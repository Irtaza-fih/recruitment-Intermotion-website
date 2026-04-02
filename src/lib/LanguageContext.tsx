import React, { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { useSearchParams } from "react-router-dom";
import type { Lang } from "./translations";

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
}

const LanguageContext = createContext<LanguageContextType>({ lang: "nl", setLang: () => {} });

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialLang = (searchParams.get("lang") === "en" ? "en" : "nl") as Lang;
  const [lang, setLangState] = useState<Lang>(initialLang);

  const setLang = (l: Lang) => {
    setLangState(l);
    const params = new URLSearchParams(searchParams);
    if (l === "nl") {
      params.delete("lang");
    } else {
      params.set("lang", l);
    }
    setSearchParams(params, { replace: true });
  };

  useEffect(() => {
    const paramLang = searchParams.get("lang");
    if (paramLang === "en" && lang !== "en") {
      setLangState("en");
    } else if (paramLang !== "en" && lang === "en") {
      setLangState("nl");
    }
  }, [searchParams]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => useContext(LanguageContext);
