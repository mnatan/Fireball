import * as ex from "excalibur";
import {getAction} from "../utils/utils";
import {Player} from "../model/Player";
import {Resources} from "./Resources";
import {Level} from "./Level";
import * as _ from "lodash";

export class Game extends ex.Engine {

    static engine: Game;
    static player: Player;

    constructor() {
        super({
            displayMode: ex.DisplayMode.FullScreen,
            suppressConsoleBootMessage: true
        });
        Game.engine = this;
        this.backgroundColor = ex.Color.Black;
    }

    bootstrap(): void {
        let player = Game.player = new Player();

        this.input.keyboard.on('hold', function (evt: KeyboardEvent) {
            let key: string = ex.Input.Keys[evt.key];
            let actions = {
                'Up': () => { player.move(key) },
                'Down': () => { player.move(key) },
                'Left': () => { player.move(key) },
                'Right': () => { player.move(key) },
                'W': () => { player.move('Up') },
                'S': () => { player.move('Down') },
                'A': () => { player.move('Left') },
                'D': () => { player.move('Right') },
            };
            getAction(actions, key)();
        });

        this.input.keyboard.on('release', function (evt: KeyboardEvent) {
            let key: string = ex.Input.Keys[evt.key];
            let actions = {
                'Up': () => { player.stop(key) },
                'Down': () => { player.stop(key) },
                'Left': () => { player.stop(key) },
                'Right': () => { player.stop(key) },
                'W': () => { player.stop('Up') },
                'S': () => { player.stop('Down') },
                'A': () => { player.stop('Left') },
                'D': () => { player.stop('Right') },
            };
            getAction(actions, key)();
        });

        this.input.pointers.primary.on('down', function (evt: ex.Input.PointerEvent) {
            player.cast(evt);
        });


        let fps_table: number[] = [];
        let label = new ex.Label();
        label.x = -200;
        label.y = -200;
        label.fontFamily = "Arial";
        label.fontSize = 50;
        label.fontUnit = ex.FontUnit.Px; // pixels are the default
        label.text = "Foo";
        label.color = ex.Color.Green;
        label.textAlign = ex.TextAlign.Center;
        label.update = function (engine: ex.Engine, delta: number) {
            fps_table.push(Math.round(engine.stats.currFrame.fps));
            if (fps_table.length > 30) {
                fps_table.shift();
            }
            this.text = Math.round(_.mean(fps_table));
        };
        this.add(label);

        this.start(Resources.load()).then(Game.setUpLevel);
    }

    static setUpLevel(): void {
        let level = new Level(Resources.resources.level1.data, Game.engine, Game.player);
    }
}
