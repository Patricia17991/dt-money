import { createContext, ReactNode } from "react"


interface Transaction {
    id: number;
    description: string;
    type: 'income' | 'outcome';
    price: number;
    category: string;
    createdAt: string;
  }
  

interface TransactionContextType {
  transactions: Transaction[];
}

interface TransactionsProviderProps {
    children: ReactNode;
}

const TransactionContext = createContext({} as TransactionContextType)

export function TransactionsProvider({children} : TransactionsProviderProps) {
    return(
        <TransactionContext.Provider value={{transactions: []}}>
            {children}
        </TransactionContext.Provider>
    )
}
