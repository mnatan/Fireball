import * as ex from "excalibur";
import {getAction} from "../utils/utils";
import {Wall} from "../model/Wall";
import {Player} from "../model/Player";
import {Floor} from "../model/Floor";

export class Level {

    map: ex.Actor[];

    constructor(data: string, game: ex.Engine, player: Player) {

        let lines = data.split('\n');

        for (let y = 0; y < lines.length; y++) {
            for (let x = 0; x < lines[y].length; x++) {

                let actions = {
                    '#': () => {return new Wall(x * 50, y * 50)},
                    '.': () => {return new Floor(x * 50, y * 50)},
                    'P': () => {
                        player.x = x * 49;
                        player.y = y * 49;
                        return new Floor(x * 50, y * 50)
                    },
                };

                game.add(getAction(actions, lines[y][x])());
            }
        }

        game.currentScene.camera = new ex.LockedCamera();
        game.currentScene.camera.setActorToFollow(player);
        game.add(player);
    }
}