import { createContext, useContext, useState, ReactNode } from "react";

export type Language = "ru" | "en";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (ru: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "ru",
  setLang: () => {},
  t: (ru) => ru,
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem("lang");
    return (saved === "en" ? "en" : "ru") as Language;
  });

  const handleSetLang = (l: Language) => {
    localStorage.setItem("lang", l);
    setLang(l);
  };

  const t = (ru: string, en: string) => (lang === "ru" ? ru : en);

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => useContext(LanguageContext);

export default LanguageContext;