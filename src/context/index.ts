import {createContext, Dispatch, SetStateAction} from 'react';
import Book from "@/types/Book";

export interface CartData extends Book {
    type: "Buy" | "Rent"
}

interface ICartDataContext {
    cartData: CartData[]
    setCartData: Dispatch<SetStateAction<ICartDataContext["cartData"]>>
}

export const StoreContext = createContext<ICartDataContext>({cartData: [], setCartData: () => {}});
