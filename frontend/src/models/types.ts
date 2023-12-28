export type ColorsType = 'red' | 'blue' | 'green' | 'yellow'; 
export type AllColorsType = ColorsType | 'all';

export interface CardStatus {
    inHand: boolean;
    inDeck: boolean;
    inPot: boolean;
}

export declare function UpdateStateFn(ids: string[], changes: CardStatus): void;

export interface BaseCard {
    getColor(): AllColorsType;
    getUUID(): string;
    get isInDeck(): boolean;
    get isInHand(): boolean;
    get isInPot(): boolean;
}

export interface BaseNumberCard extends BaseCard {
    getValue(): number;
}

export interface BaseActionCard extends BaseCard {
    effect(): void;
}