import { Card } from "../models/Card";
import { JokerCard } from "../models/JokerCard";
import { JumpCard } from "../models/JumpCard";
import { NumberCard } from "../models/NumberCard";
import { ReverseCard } from "../models/ReverseCard";
import { Take2Card } from "../models/Take2Card";
import { Take4Card } from "../models/Take4Card";
import { BaseCard, ColorsType } from "../models/types";

const numberValues = [0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9];
const colorValues: ColorsType[] = ['blue', 'green', 'red', 'yellow'];

export interface CardService {
    initialize: () => BaseCard[];
}

export class CardServiceImp implements CardService {
    initialize() {
        const result = colorValues.reduce((prev, curr) => {
            const totalCards: Card[] = [];

            const numbers = numberValues.map((num) => new NumberCard(curr, num));
            const take2s = [0, 1].map(() => new Take2Card(curr));
            const jumps = [0, 1].map(() => new JumpCard(curr));
            const reverseCards = [0, 1].map(() => new ReverseCard(curr));

            totalCards.push(...numbers);
            totalCards.push(...take2s);
            totalCards.push(...jumps);
            totalCards.push(...reverseCards);

            return prev.concat(totalCards);
        }, [] as Card[]);

        const take4s = [new Take4Card(), new Take4Card(), new Take4Card(), new Take4Card()];
        const jokers = [new JokerCard(), new JokerCard(), new JokerCard(), new JokerCard()];

        result.push(...take4s);
        result.push(...jokers);

        return result;
    }
}