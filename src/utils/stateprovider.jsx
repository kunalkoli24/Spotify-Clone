import React, { createContext, useContext, useReducer } from "react";
export const StateContext = createContext();
export const Stateprovider = ({ children, initialState, reducer }) => {
    return (
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateprovider = () => {
    const context = useContext(StateContext);
    if (!context) {
        throw new Error("useStateprovider must be used within a Stateprovider");
    }
    return context;
};