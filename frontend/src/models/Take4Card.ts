import { Card } from "./Card";
import { BaseActionCard } from "./types";

export class Take4Card extends Card implements BaseActionCard {
    constructor() {
        super('all')
    }

    effect() {
        console.log('take 4 cards');
    }
}
