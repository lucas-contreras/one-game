import { Card } from "./Card";
import { BaseActionCard, ColorsType } from "./types";

export class ReverseCard extends Card implements BaseActionCard {
    constructor(color: ColorsType) {
        super(color);
    }
    
    effect() {
        console.log('reverse card');
    }
}
