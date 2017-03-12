import * as ex from "excalibur";
import {Resources} from "../game/Resources";
import {DestructableActor, DamageType} from "../intefraces/DescructableActor";
import {HpBar} from "../UI/HpBar";
import {Game} from "../game/Game";
import * as _ from "lodash";

function debounce(time: number): Function {
    return function (target, key, descriptor): void {
        descriptor.value = _.debounce(descriptor.value, time);
        return descriptor
    }
}

export class Wall extends DestructableActor {

    constructor(x: number, y: number) {
        super(x, y, 50, 50);

        this.health = 20000;
        this.hpBar = new HpBar(x, y, this.health);
        this.collisionType = ex.CollisionType.Fixed;
        let sprite = new ex.Sprite(Resources.resources.wall, 0, 0, 50, 50);
        this.addDrawing(sprite);
    }

    @debounce(10)
    take_damage(damage: number, type: DamageType) {
        console.log('hp before: ', this.health);
        Game.engine.add(this.hpBar);
        this.health -= damage;
        this.hpBar.hp = this.health;
        console.log('hp after: ', this.health);
        if (this.health < 0) {
            this.kill();
            this.hpBar.kill()
        }
    }
}