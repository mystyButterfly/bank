import { createContext, useState, ReactNode } from "react";

export type UserType = {
  id: string;
  firstName: string;
  lastName: string;
  address: string;
  state: string;
  postCode: string;
  dateOfBirth: string;
  ssn: string;
  email: string;
  password: string;
} | null;

export interface ContextBanksList  {
  cardID: string;
  bankName: string;
  status: boolean;
}

interface UserContextType {
  user: UserType;
  setUser: (u: UserType) => void;
  contextBanksList: ContextBanksList[];
  setContextBanksList: React.Dispatch<React.SetStateAction<ContextBanksList[]>>;
}


export const UserContext = createContext<UserContextType | null>(null);

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserType>(null);
  const [contextBanksList, setContextBanksList] = useState<ContextBanksList[]>([]);

  const contextValue: UserContextType = {
    user,
    setUser,
    contextBanksList,
    setContextBanksList,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
