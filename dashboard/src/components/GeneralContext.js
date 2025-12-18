import React, { useState } from "react";
import BuyActionWindow from "./BuyActionWindow";

const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},
  openSellWindow: (uid) => {},
  closeSellWindow: () => {},
});

export const GeneralContextProvider = ({ children }) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");

  // BUY
  const openBuyWindow = (uid) => {
    setSelectedStockUID(uid);
    setIsSellWindowOpen(false);
    setIsBuyWindowOpen(true);
  };

  const closeBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  // SELL
  const openSellWindow = (uid) => {
    setSelectedStockUID(uid);
    setIsBuyWindowOpen(false);
    setIsSellWindowOpen(true);
  };

  const closeSellWindow = () => {
    setIsSellWindowOpen(false);
    setSelectedStockUID("");
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow,
        closeBuyWindow,
        openSellWindow,
        closeSellWindow,
      }}
    >
      {children}

      {isBuyWindowOpen && (
        <BuyActionWindow uid={selectedStockUID} type="BUY" />
      )}

      {isSellWindowOpen && (
        <BuyActionWindow uid={selectedStockUID} type="SELL" />
      )}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
