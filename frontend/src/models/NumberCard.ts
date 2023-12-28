import { Card } from "./Card";
import { ColorsType, BaseNumberCard } from "./types";

export class NumberCard extends Card implements BaseNumberCard {
    constructor(color: ColorsType, private value: number) {
        super(color);
    }

    getValue(): number {
        return this.value;
    }
}
