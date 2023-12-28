import { useContext } from "react";
import { AppContext } from "./AppContext";

export function useAppCards() {
    const context = useContext(AppContext);

    if (!context) {
        throw new Error("App context is not defined");
    }

    return context.cards;
}
