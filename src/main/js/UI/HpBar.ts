import * as ex from "excalibur";


export class HpBar extends ex.Actor {
    width: number;
    height: number;
    maxHp: number;
    hp: number;

    constructor(x: number, y: number, maxHp: number) {
        let width = 40;
        let height = 10;

        super(x - (width / 2), y - (height / 2) + 15, width, height);

        this.width = width;
        this.height = height;
        this.maxHp = maxHp;
        this.hp = maxHp;
    }

    draw(ctx: CanvasRenderingContext2D, delta: number): void {
        ex.Util.DrawUtil.roundRect(ctx, this.x, this.y, 40, 10, 5, ex.Color.Black, ex.Color.Red);
        let progress = this.width * (this.hp / this.maxHp);
        let margin = 1;
        let progressWidth = progress - margin * 2;
        let height = this.height - margin * 2;
        ex.Util.DrawUtil.roundRect(ctx,
            this.x + margin,
            this.y + margin,
            progressWidth > 0 ? progressWidth : 0,
            height,
            5,
            null,
            ex.Color.Green
        );
    }

}
