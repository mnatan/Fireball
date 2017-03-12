import * as ex from "excalibur";
import {Resources} from "../game/Resources";
import {Game} from "../game/Game";

export class Explosion extends ex.Actor {
    constructor(position: ex.Vector) {

        super(position.x, position.y, 50, 50);
        this.collisionType = ex.CollisionType.PreventCollision;

        this.color = ex.Color.Red;
        let animation = new ex.SpriteSheet(Resources.resources.explosion, 5, 5, 64, 64)
            .getAnimationForAll(Game.engine, 30);

        this.addDrawing("main", animation);

        this.update = function (engine: ex.Engine, delta: number) {
            if (animation.isDone())
                this.kill();
        }
    }

}