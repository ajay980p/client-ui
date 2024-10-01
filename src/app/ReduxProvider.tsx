'use client'

import { addToCart } from '@/utils/store/features/cart/cartSlice';
import { AppStore, makeStore } from '@/utils/store/store';
import React, { ReactNode, useRef } from 'react';
import { Provider } from 'react-redux';

interface ProviderProps {
    children: ReactNode;
}
const ReduxProvider: React.FC<ProviderProps> = ({ children }) => {

    const data = {
        id: 1,
        name: "Pizza",
        price: 99
    }
    const storeRef = useRef<AppStore>()
    if (!storeRef.current) {
        storeRef.current = makeStore()
        storeRef.current.dispatch(addToCart(data))
    }

    return (
        <Provider store={storeRef.current} >
            {children}
        </Provider>
    );
}

export default ReduxProvider;