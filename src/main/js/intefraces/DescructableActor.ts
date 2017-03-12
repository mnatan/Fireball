import * as ex from "excalibur";
import {HpBar} from "../UI/HpBar";

export enum DamageType {
    Fire = 0,
}

export abstract class DestructableActor extends ex.Actor {
    health: number = 100;
    hpBar: HpBar;

    take_damage(damage: number, type: DamageType): void {}
}