import { Card } from "./Card";
import { BaseActionCard, ColorsType } from "./types";

export class Take2Card extends Card implements BaseActionCard {
    constructor(color: ColorsType) {
        super(color);
    }

    effect() {
        console.log('take 2 cards');
    }
}
