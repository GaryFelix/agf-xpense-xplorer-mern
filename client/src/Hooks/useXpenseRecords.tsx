import { useContext } from "react";
import { XpenseRecordsContext, XpenseRecordsContextType } from "../contexts/xpense-record-context";

export const useXpenseRecords = () => {
    const context = useContext<XpenseRecordsContextType | undefined>(
      XpenseRecordsContext
    );
  
    if (!context) {
      throw new Error(
        "useXpenseRecords must be used within a XpenseRecordsProvider"
      );
    }
  
    return context;
  };