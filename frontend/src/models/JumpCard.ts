import { Card } from "./Card";
import { BaseActionCard, ColorsType } from "./types";

export class JumpCard extends Card implements BaseActionCard {
    constructor(color: ColorsType) {
        super(color);
    }

    effect() {
        console.log('jum');
    }
}
