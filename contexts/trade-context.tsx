import React, {useContext} from 'react';
import type {FC, ReactNode} from 'react';
import {createContext, useMemo, useState} from 'react';

export type TradeContextProps = {
  isTradeVisible: boolean;
  setIsTradeVisible: (isOpen: boolean) => void;
};

const Context = createContext<TradeContextProps | undefined>(undefined);

export const TradeProvider: FC<{children: ReactNode}> = ({children}) => {
  const [isTradeVisible, setIsTradeVisible] = useState(false);

  const contextValue = useMemo(
    () => ({
      isTradeVisible,
      setIsTradeVisible,
    }),
    [isTradeVisible, setIsTradeVisible],
  );

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default function useTrade() {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error('Trade context require');
  }
  return context;
}
