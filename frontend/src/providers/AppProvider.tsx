import React, { useMemo } from "react";
import { AppContext, AppContextProps } from "./AppContext";
import { useCardModule } from "../hooks/useCardModule";

interface AppProviderProps {
  children: React.ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  const { cards, updateState } = useCardModule();

  const value = useMemo<AppContextProps>(() => {
    return {
      cards: {
        data: cards,
        updateState,
      },
    };
  }, [cards, updateState]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
