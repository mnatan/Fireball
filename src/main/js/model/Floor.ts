import * as ex from "excalibur";
import {Resources} from "../game/Resources";

export class Floor extends ex.Actor {
    constructor(x: number, y: number) {
        super(x, y, 50, 50);

        this.collisionType = ex.CollisionType.PreventCollision;

        let sprite = new ex.Sprite(Resources.resources.wall, 0, 0, 50, 50);
        sprite.darken(.6);
        this.addDrawing(sprite);
        this.off("collision");
    }
}