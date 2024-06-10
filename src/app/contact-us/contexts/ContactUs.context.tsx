'use client';

import { createContext, ReactNode, useContext, useState } from 'react';

interface ContactUsContextType {
    email: string;
    handleSetEmail: (email: string) => void;
}

const ContactUsContext = createContext<ContactUsContextType>({
    email: '',
    handleSetEmail: () => {},
});

const useContactUs = () => {
    const context = useContext(ContactUsContext);

    if (!context) {
        throw new Error('useContactUs must be used within a ContactUsProvider');
    }

    return context;
};

const ContactUsProvider = ({ children }: { children: ReactNode }) => {
    const [email, setEmail] = useState('');

    const handleSetEmail = (email: string) => {
        setEmail(email);
    };

    return (
        <ContactUsContext.Provider value={{ email, handleSetEmail }}>
            {children}
        </ContactUsContext.Provider>
    );
};

export { ContactUsProvider, useContactUs };
