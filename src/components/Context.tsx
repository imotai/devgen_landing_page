import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAsyncFn } from "react-use";

export type HomeQueryContext = {
  query: string | null;
};

type IXpieContext = {
  homeContext: HomeQueryContext;
  setHomeContext: (context: HomeQueryContext) => void;
};

const XpieContext = React.createContext({} as IXpieContext);

function useXpieContext() {
  return React.useContext(XpieContext);
}

function XpieContextProvider({ children }: { children: React.ReactNode }) {
  const isMounted = useRef(false);
  const navigate = useNavigate();
  const [homeContext, setHomeContext] = useState<HomeQueryContext>(
    {} as HomeQueryContext
  );
  const { pathname, search } = useLocation();
  const params = new URLSearchParams(search);

  useEffect(() => {}, [pathname]);
  return (
    <XpieContext.Provider
      value={{
        homeContext,
        setHomeContext,
      }}
    >
      {children}
    </XpieContext.Provider>
  );
}
export { XpieContext, useXpieContext, XpieContextProvider };
