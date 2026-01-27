import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

interface AppContextType {
    value: number; // Removed undefined here for simpler logic
    setValue: Dispatch<SetStateAction<number>>; // Use the official React type
}

interface AppProviderProps {
    children: any;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: AppProviderProps) => {

    const [value, setValue] = useState(0);


    return (

        <AppContext.Provider value={{ value, setValue }}>
            {children}
        </AppContext.Provider>

    );

};

// export const useAppContext = () => {
//     return useContext(AppContext);
// }

export const useAppContext = () => {
    const context = useContext(AppContext);
    
    // If context is undefined, it means this hook is being used 
    // outside of an <AppProvider>
    if (context === undefined) {
        throw new Error("useAppContext must be used within an AppProvider");
    }
    
    return context; // TypeScript now knows context is DEFINED
};