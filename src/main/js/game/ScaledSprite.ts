import * as ex from "excalibur";

export class ScaledSprite extends ex.Sprite {
    constructor(image: ex.Texture, sx: number, sy: number, swidth: number, sheight: number, scaleTo: ex.Vector) {
        super(image, sx, sy, swidth, sheight);

        this.scale = new ex.Vector(
            scaleTo.x / swidth,
            scaleTo.y / sheight
        );
    }
}