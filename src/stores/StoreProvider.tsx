import React, { createContext } from 'react';
import RootStore from './RootStore';

const store = new RootStore();

export const StoreContext = createContext({ store:store });

export const StoreProvider: React.FC<any> = ({ children }) => {

    return (
        <StoreContext.Provider value={{store}}>
            {children}
        </StoreContext.Provider>
    );
};

export default StoreProvider;
