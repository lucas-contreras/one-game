import { Card } from "./Card";
import { BaseActionCard } from "./types";

export class JokerCard extends Card implements BaseActionCard {
    constructor() {
        super('all')
    }

    effect() {
        console.log('change the current color flow');
    }
}
