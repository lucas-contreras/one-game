import { Action } from 'redux';
import { Card } from '../../models/Card';

const CARD_SET_INITIAL_CARDS = 'card/setInitialCards';

interface SetInitialCardsAction extends Action {
    type: typeof CARD_SET_INITIAL_CARDS;
    payload: Card[];
}

export function setInitialCards(payload: Card[]): SetInitialCardsAction {
    return {
        type: CARD_SET_INITIAL_CARDS,
        payload,
    }
}

type CardAction = SetInitialCardsAction;

export interface CardState {
    dataCards: Card[];
}

export const CardDefaultState: CardState = {
    dataCards: [],
}

export default function CardReducer(state: CardState = CardDefaultState, action: CardAction) {
    switch (action.type) {
        case CARD_SET_INITIAL_CARDS: {
            const { payload } = action;
            return {
                dataCards: payload
            }
        }
        default: {
            return state;
        }
    }
}