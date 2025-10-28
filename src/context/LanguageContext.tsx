import React, { createContext, useContext, useState, ReactNode, useMemo } from 'react';
import en from '../i18n/en.json';
import zh from '../i18n/zh.json';

type Language = 'en' | 'zh';

// Define the structure of your translation files
type Translations = typeof en;

interface LanguageContextType {
    language: Language;
    setLanguage: (language: Language) => void;
    t: (key: keyof Translations) => string;
}

const translations = { en, zh };

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>('zh'); // Default language is Chinese

    const t = (key: keyof Translations): string => {
        return translations[language][key] || key;
    };

    const value = useMemo(() => ({
        language,
        setLanguage,
        t
    }), [language]);

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};
