import { useUser } from "@clerk/clerk-react";
import { createContext, useContext, useEffect, useState } from "react";

export interface XpenseModel {
  _id?: string;
  userId: string;
  date: Date;
  description: string;
  amount: number;
  transactionType: string;
  category: string;
  frequency: string;
  paymentMethod: string;
}

interface XpenseRecordsContextType {
  records: XpenseModel[];
  addRecord: (record: XpenseModel) => void;
  updateRecord: (id: string, newRecord: XpenseModel) => void;
  deleteRecord: (id: string) => void;
}

export const XpenseRecordsContext = createContext<
  XpenseRecordsContextType | undefined
>(undefined);

export const XpenseRecordsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [records, setRecords] = useState<XpenseModel[]>([]);
  const { user } = useUser();

  const getRecords = async () => {
    if (!user) return;
    const response = await fetch(
      `http://localhost:3001/xpense-xplorer/getAllByUserID/${user.id}`
    );

    if (response.ok) {
      const records = await response.json();
      console.log(records);
      setRecords(records);
    }
  };

  useEffect(() => {
    getRecords();
  }, [user]);

  const addRecord = async (records: XpenseModel) => {
    const response = await fetch("http://localhost:3001/xpense-xplorer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(records),
    });

    try {
      if (response.ok) {
        const newRecord = await response.json();
        setRecords((prev) => [...prev, newRecord]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const updateRecord = async (id: string, newRecord: XpenseModel) => {
    const response = await fetch(`http://localhost:3001/xpense-xplorer/${id}`, {
      method: "PUT",
      body: JSON.stringify(newRecord),
      headers: {
        "Content-Type": "application/json",
      },
    });

    try {
      if (response.ok) {
        const newRecord = await response.json();
        setRecords((prev) =>
          prev.map((record) => {
            if (record._id === id) {
              return newRecord;
            }
            return record;
          })
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteRecord = async (id: string) => {
    const response = await fetch(`http://localhost:3001/xpense-xplorer/${id}`, {
      method: "DELETE",
    });

    try {
      if (response.ok) {
        const deletedRecord = await response.json();
        setRecords((prev) =>
          prev.filter((record) => record._id !== deletedRecord._id)
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <XpenseRecordsContext.Provider value={{ records, addRecord, updateRecord, deleteRecord }}>
      {children}
    </XpenseRecordsContext.Provider>
  );
};

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
