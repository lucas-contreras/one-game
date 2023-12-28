import { createContext } from "react";
import { Card } from "../models/Card";
import { UpdateStateFn } from "../models/types";

export interface AppContextProps {
    cards: {
        data: Card[];
        updateState: typeof UpdateStateFn;
    }
}

const defaultAppState: AppContextProps = {
    cards: {
        data: [],
        updateState: () => { },
    }
}

export const AppContext = createContext<AppContextProps>(defaultAppState);
