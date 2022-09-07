import GameObject from "../GameObjects";
import IAgent from "../Agents/IAgent";
import Game from "../States/Game";
import ITankRender from "../Tanks/ITankRender";
import Bullet from "./Bullet";
import StateMachine from "../StateMachine";
import PlayerAgent from "../Agents/PlayerAgent";
import GameOver from "../States/GameOver";
import Wall from "./Wall";
import Heart from "./Heart";

export default class Tank extends GameObject {
    agent:IAgent;
    renderer:ITankRender;
    health:number = 100;
    constructor(agent:IAgent, renderer:ITankRender, health:number){
        super();
        this.health = health;
        this.agent = agent;
        this.renderer = renderer;
        this.init = this.init.bind(this);
        this.update = this.update.bind(this);
        this.render = this.render.bind(this);
    }

    public async init(){
    }

    public async update(delta:number){
        this.agent?.update(delta, this);
    }

    public render(game:Game){
        this.renderer?.render(this);
        this.agent?.render(this);
    }

    public onCollision(other:GameObject){
        let isoverLap = // fixed overlapping
            (this.x < other.x + other.w) &&
            (this.x + this.w > other.x ) &&
            (this.y < other.y + other.h) &&
            (this.y + this.h > other.y);  
        if(!isoverLap) return;
        if(other instanceof Bullet){ // handle bullet collection
            other.mustDelete = true;
            this.health -= other.damage;
            if(this.agent instanceof PlayerAgent === false){
                Game.score += 10;
            } else if(this.agent instanceof PlayerAgent){
                if(this.health <= 0){
                    Game.GameObjects = []; // clear game
                    StateMachine.states.pop()
                    let state = new GameOver(); // show gameover menu
                    state.init(); // init
                    StateMachine.states.push(state) // add to stack
                }
            }    
            if(this.health <= 0){
                this.mustDelete = true;
                this.health = 0;
            }
            const music = new Audio('assets/audio/explosion.mp3');
            music.loop = false;
            music.volume = 0.15;
            music.playbackRate = 1;
            music.play();
        } else if(other instanceof Wall){ // handle Tank collection
            // move tank out of wall
            let wcx = other.x + (other.w / 2);
            let wcy = other.y + (other.h / 2);

            let leftside = 
                (this.x + this.w >= other.x ) && // check tank inside left side of wall
                (this.x + this.w <= wcx     ) && // check if tank is inside left center of wall
                (this.y + 2 >= other.y - this.h) && // limit movement to y axis
                (this.y - 2 <= other.y + other.h); // limit movement to y axis
            let rightside = 
                (this.x <= other.x + other.w) && // check tank inside right side of wall
                (this.x >= wcx              ) && // check if tank is inside right center of wall
                (this.y + 2 >= other.y - this.h) && // limit movement to y axis
                (this.y - 2 <= other.y + other.h); // limit movement to y axis                    
            let topside = 
                (this.y <= other.y + other.h) && // check tank inside top side of wall
                (this.y <= wcy              ) && // check if tank is inside top center of wall
                (this.x + 2 >= other.x - this.w) && // limit movement to x axis
                (this.x - 2 <= other.x + other.w); // limit movement to x axis                                     
            let bottomside =   
                (this.y <= other.y + other.h) && // check tank inside top side of wall
                (this.y >= wcy              ) && // check if tank is inside top center of wall
                (this.x + 2 >= other.x - this.w) && // limit movement to x axis
                (this.x - 2 <= other.x + other.w); // limit movement to x axis
            if(leftside){
                this.x = this.agent.x = other.x - this.w;
            } else if(rightside){
                this.x = this.agent.x = other.x + other.w;
            } else if(topside){
                this.y = this.agent.y = other.y - this.h;
            } else if(bottomside){
                this.y = this.agent.y = other.y + other.h;
            }                        
        } else if(other instanceof Heart){
            if(this.agent instanceof PlayerAgent){
                this.agent.health = 100;
                this.health = 100;
                other.mustDelete = true;
            }
        }
    }
    public getDirectionNormal() : {x:number, y:number} {
        if(this.agent.d == 0) return {x: 0, y:-1};
        else if(this.agent.d == 1) return {x:-1, y: 0};
        else if(this.agent.d == 2) return {x: 0, y: 1};
        else if(this.agent.d == 3) return {x: 1, y: 0};
        else return {x: 0, y: 0};
    }
}


(global as any).Tank = Tank;