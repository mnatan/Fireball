import * as ex from "excalibur";
import {Explosion} from "./Explosion";
import {Game} from "../game/Game";
import {Resources} from "../game/Resources";
import {ScaledSprite} from "../game/ScaledSprite";
import {DestructableActor, DamageType} from "../intefraces/DescructableActor";

export class Fireball extends DestructableActor {
    constructor(start: ex.Vector, target: ex.Vector) {
        let vel = target
            .sub(start)
            .normalize()
            .scale(30);

        super(start.x + vel.x, start.y + vel.y, 14, 14);

        vel = vel.scale(30);
        this.vel.setTo(vel.x, vel.y);

        this.addDrawing(new ScaledSprite(Resources.resources.explosion, 0, 0, 64, 64, new ex.Vector(30, 30)));

        this.collisionType = ex.CollisionType.Passive;
        this.on("collision", this.explode);
    }

    explode(evt: ex.CollisionEvent): void {
        let other = evt.other as DestructableActor;
        other.take_damage(20, DamageType.Fire);
        Game.engine.currentScene.camera.shake(5, 5, 5);
        Game.engine.add(new Explosion(new ex.Vector(this.x, this.y)));
        evt.actor.kill();
    }

}