import GameObject from "./GameObjects";
import { readFileSync, promises as fsPromises } from 'fs';
import { join } from 'path';
import Wall from "./GameObjects/Wall";

export default class Level {
    public static async load(level_name:string) {
        let filename = `/assets/levels/${level_name}.json`;
        let json_string = await fetch(filename).then((r)=>{
            r.json();
        }).then((r)=>{
            return r as unknown as string;
        });
        
        const json = JSON.parse(json_string);
        let gos:GameObject[] = [];
        for(let item of json){
            // objects
            switch(item['type']){
                case 'Wall':
                    gos.push(new Wall(item['x'], item['y'], item['w'], item['h']));
                    break;
            }
        }

        return gos;
    }
}


