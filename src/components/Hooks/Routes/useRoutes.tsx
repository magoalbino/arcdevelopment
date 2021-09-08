import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { menuOptions, pageList, PagesArray } from "./routesConfig";

interface RouteContextData {
  tabValue: number;
  setTabValue: Dispatch<SetStateAction<number>>;
  selectedMenuIndex: number;
  setSelectedMenuIndex: Dispatch<SetStateAction<number>>;
  pageList: PagesArray[];
  menuOptions: PagesArray[];
}

interface RouteContextProps {
  children: ReactNode;
}

const RouteContext = createContext<RouteContextData>({} as RouteContextData);

export const RouteProvider = ({ children }: RouteContextProps) => {
  const [tabValue, setTabValue] = useState(0);
  const [selectedMenuIndex, setSelectedMenuIndex] = useState(0);

  useEffect(() => {
    [...menuOptions, ...pageList].forEach((page) => {
      switch (window.location.pathname) {
        case page.link:
          if (tabValue !== page.activeIndex) {
            setTabValue(page.activeIndex);
            if (
              page.selectedIndex &&
              page.selectedIndex !== selectedMenuIndex
            ) {
              setSelectedMenuIndex(page.selectedIndex);
            }
          }
          break;
        default:
          break;
      }
    });
  }, [selectedMenuIndex, tabValue]);

  return (
    <RouteContext.Provider
      value={{
        tabValue,
        setTabValue,
        selectedMenuIndex,
        setSelectedMenuIndex,
        pageList,
        menuOptions,
      }}
    >
      {children}
    </RouteContext.Provider>
  );
};

export function useRoutes() {
  const context = useContext(RouteContext);

  return context;
}
