import { BaseCard, AllColorsType, CardStatus } from './types';

export abstract class Card implements BaseCard {
    protected uuid: string;
    protected inHand = false;
    protected inDeck = true;
    protected isPot = false;

    constructor(private color: AllColorsType) {
        this.uuid = crypto.randomUUID();
    }

    getColor(): AllColorsType {
        return this.color;
    }

    getUUID() {
        return this.uuid;
    }

    setStatusGame({ inDeck = false, inHand = false, inPot = false }: CardStatus): this {
        if (inDeck && (inHand || inPot)) {
            throw new Error('a card cannot be in the deck and in hand or in pot at the same time');
        }

        if (inHand && (inDeck || inPot)) {
            throw new Error('a card cannot be in hand and in deck or in pot at the same time');
        }

        if (inPot && (inDeck || inHand)) {
            throw new Error('a card cannot be in pot and in deck or in hand at the same time');
        }

        this.inDeck = inDeck;
        this.inHand = inHand;
        this.isPot = inPot;

        return this;
    }

    get isInHand(): boolean {
        return this.inHand;
    }

    get isInDeck(): boolean {
        return this.inDeck;
    }

    get isInPot(): boolean {
        return this.isPot;
    }
}