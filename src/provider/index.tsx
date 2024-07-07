'use client'

import {useState} from 'react';
import {CartData, StoreContext} from '@/context';

export default function StoreProvider({
                                          children,
                                      }: Readonly<{
    children: React.ReactNode;
}>) {
    const [cartData, setCartData] = useState<CartData[]>([]);

    return (<StoreContext.Provider value={{cartData, setCartData}}>
            {children}
        </StoreContext.Provider>)
}
