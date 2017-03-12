import * as ex from "excalibur";
import {getAction} from "../utils/utils";
import {Fireball} from "./Fireball";
import {Game} from "../game/Game";
import {Resources} from "../game/Resources";
import {ScaledSprite} from "../game/ScaledSprite";
import {DestructableActor} from "../intefraces/DescructableActor";

export class Player extends DestructableActor {
    speed: number;
    futureX: number;
    futureY: number;

    constructor() {
        super(0, 0, 50, 50);

        this.color = ex.Color.Red;
        this.collisionType = ex.CollisionType.Active;
        this.speed = 200;
        this.futureX = this.x;
        this.futureY = this.y;

        let sprite: ex.Sprite;
        sprite = new ScaledSprite(Resources.resources.mage, 144, 192, 72, 96, new ex.Vector(40, 50));
        this.addDrawing("down", sprite);
        sprite = new ScaledSprite(Resources.resources.mage, 72, 0, 72, 96, new ex.Vector(40, 50));
        this.addDrawing("up", sprite);
        sprite = new ScaledSprite(Resources.resources.mage, 72, 288, 72, 96, new ex.Vector(40, 50));
        this.addDrawing("left", sprite);
        sprite = new ScaledSprite(Resources.resources.mage, 72, 96, 72, 96, new ex.Vector(40, 50));
        this.addDrawing("right", sprite);
        this.setDrawing("down");
    }

    move(dir: string): void {
        let actions = {
            'Up': () => {
                this.vel.y = -this.speed;
                this.setDrawing("up");
            },
            'Down': () => {
                this.vel.y = this.speed;
                this.setDrawing("down");
            },
            'Left': () => {
                this.vel.x = -this.speed;
                this.setDrawing("left");
            },
            'Right': () => {
                this.vel.x = this.speed;
                this.setDrawing("right");
            },
        };
        getAction(actions, dir)();
    }

    stop(dir: string) {
        let actions = {
            'Up': () => { this.vel.y = 0; },
            'Down': () => { this.vel.y = 0; },
            'Left': () => { this.vel.x = 0; },
            'Right': () => { this.vel.x = 0; },
        };
        getAction(actions, dir)();
    }

    cast(evt: ex.Input.PointerEvent) {
        let fireball = new Fireball(
            new ex.Vector(this.x, this.y),
            new ex.Vector(evt.x, evt.y)
        );
        Game.engine.add(fireball);
    }
}