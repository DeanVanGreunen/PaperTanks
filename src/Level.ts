import GameObject from "./GameObjects";
import Wall from "./GameObjects/Wall";
import Tank from "./GameObjects/Tank";
import Bullet from "./GameObjects/Bullet";
import BaseTank from "./Tanks/BaseTank";
import FollowAgent from "./Agents/FollowAgent";
import FollowAgentWithFire from "./Agents/FollowAgentWithFire";
import PlayerAgent from "./Agents/PlayerAgent";
import DumbAgent from "./Agents/DumbAgent";
import EndLevel from "./GameObjects/EndLevel";

export default class Level {
    public static levels = new Map<string, any>();
    public static getNextLevel(level_name:string){        
        const json = Level.levels.get(level_name);
        return json['next_level'];
    }
    public static doesExist(level_name:string){        
        return Level.levels.get(level_name) !== undefined;
    }
    public static getLevel(level_name:string){
        const json = Level.levels.get(level_name);
        let gos:GameObject[] = [];
        let objs = json['objects']
        for(let item of objs){
            if(item['type'] == 'Wall'){
                gos.push(new Wall(item['x'], item['y'], item['w'], item['h']));                    
            } else if(item['type'] == 'Tank'){
                let agent;
                if(item['agent'] == "PlayerAgent"){
                    agent = new PlayerAgent(item['agent_x'],item['agent_y'],item['agent_w'],item['agent_h']);
                } else if(item['agent'] == "DumbAgent"){
                    agent = new DumbAgent(item['agent_x'],item['agent_y'],item['agent_w'],item['agent_h']);
                } else if(item['agent'] == "FollowAgent"){
                    agent = new FollowAgent(item['agent_x'],item['agent_y'],item['agent_w'],item['agent_h']);
                } else if(item['agent'] == "FollowAgentWithFire"){
                    agent = new FollowAgentWithFire(item['agent_x'],item['agent_y'],item['agent_w'],item['agent_h']);
                } else {
                    agent = new DumbAgent(item['agent_x'],item['agent_y'],item['agent_w'],item['agent_h']);                        
                }
                let health = item['health'];
                let renderer;
                if(item['renderer'] == "BaseTank"){
                        renderer = new BaseTank();
                } else {
                    renderer = new BaseTank();
                }
                let tank = new Tank(agent, renderer, health);
                gos.push(tank)                       
            } else if(item['type'] == 'Bullet'){
                let bullet = new Bullet(item['x'],item['y'],item['r'],item['vx'],item['vy']);
                gos.push(bullet)   
            } else if(item['type'] == 'EndLevel'){
                let endlevel = new EndLevel(item['x'],item['y'],item['w'],item['h']);
                gos.push(endlevel)   
            }
        }
        return gos;
    }
}


