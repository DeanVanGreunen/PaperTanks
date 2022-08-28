import GameObject from "./GameObjects";
import { readFileSync, promises as fsPromises } from 'fs';
import { join } from 'path';

export default class Level {
    public static load(level_name:string) : Level{
        let filename = `assets/levels/${level_name}.json`;
        const result = readFileSync(join(__dirname, filename), 'utf-8');
        const json = JSON.parse(result);
        return json;
    }
}