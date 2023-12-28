import { BaseCard } from "../models/types";

export class ShuffleService {
    public static shuffle(cards: BaseCard[], quantity = 7) {
        const { length } = cards;
        const selectedCards: Record<string, boolean> = {};
        let whileExist = true;
        let uuid = '';

        for (let n = 0; n < quantity; n++) {
            while (whileExist) {
                const rdm = Math.floor(Math.random() * (length - 1));
                uuid = cards[rdm].getUUID();
                whileExist = Boolean(selectedCards[uuid]);

                selectedCards[uuid] = true;
            }

            whileExist = true;
        }

        return selectedCards;
    }
}