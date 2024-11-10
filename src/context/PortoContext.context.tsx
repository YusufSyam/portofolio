import React, { ReactNode, createContext, useState } from "react";

interface PortoContextType {
  isAnsweredQuestion: boolean;
  setIsAnsweredQuestion: React.Dispatch<React.SetStateAction<boolean>>;
}

export type TUserType = null | "SELLER" | "BUYER";

const PortoContext = createContext<PortoContextType | undefined>(undefined);

interface PortoProviderProps {
  children: ReactNode;
}

const PortoProvider: React.FC<PortoProviderProps> = ({ children }) => {

  const [isAnsweredQuestion, setIsAnsweredQuestion] = useState(false);

  return (
    <PortoContext.Provider
      value={{ isAnsweredQuestion, setIsAnsweredQuestion }}
    >
      {children}
    </PortoContext.Provider>
  );
};

export { PortoContext, PortoProvider };

