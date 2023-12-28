import { useCallback, useMemo, useState } from "react";
import { CardServiceImp } from "../services/CardService";
import { UpdateStateFn } from "../models/types";


export function useCardModule() {
    const cardsInitialized = useMemo(() => {
        const cardService = new CardServiceImp()
        return cardService.initialize();
    }, []);

    const [cards, setCards] = useState(cardsInitialized);

    const updateState = useCallback<typeof UpdateStateFn>((ids, changes) => {
        setCards((prevCards) => {
            const newCards = prevCards.map((card) => {
                const isIn = ids.includes(card.getUUID());

                if (isIn) {
                    return card.setStatusGame(changes)
                }
                return card;
            });

            return newCards;
        });
    }, []);

    return {
        cards,
        updateState,
    };
}