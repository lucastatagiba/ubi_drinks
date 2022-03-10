import { createContext, useState, ReactNode, useEffect } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";

interface drinksProviderProps {
  children: ReactNode;
}
export interface DrinksFormat {
  id: string;
  name: string;
  image: string;
  category: string;
  instrutuction: string;
  type: string;
  ingredients: string[];
  isRecipe?: boolean;
}
export interface DrinksProviderData {
  drinks: DrinksFormat[];
  newDrink: DrinksFormat;
  input: string;
  select: string;
  searchNewDrink: () => void;
  handleSearchInput: (inputValue: string) => void;
  handleSearchSelect: (selectValue: string) => void;
}

const DrinksContext = createContext({});

const DrinksProvider = ({ children }: drinksProviderProps) => {
  const [drinks, setDrinks] = useState<DrinksFormat[]>([]);
  const [input, setInput] = useState("");
  const [select, setSelect] = useState("name");
  const [endPoint, setEndPoint] = useState("");
  const handleSearchInput = (inputValue: string) => {
    setInput(inputValue);
  };
  const handleSearchSelect = (selectValue: string) => {
    setSelect(selectValue);
  };
  useEffect(() => {
    if (select === "name") {
      setEndPoint(`/search.php?s=${input}`);
    } else if (select === "category") {
      setEndPoint(`/filter.php?c=${input}`);
    } else {
      setEndPoint(`/filter.php?i=${input}`);
    }
  }, [input, select]);
  useEffect(() => {
    api.get("/search.php?s=").then((res) => {
      const newDrinks = res.data.drinks.map((drink: any) => {
        return {
          id: drink.idDrink,
          name: drink.strDrink,
          category: drink.strCategory,
          type: drink.strAlcoholic,
          instrutuction: drink.strInstructions,
          image: drink.strDrinkThumb,
          ingredients: Object.keys(drink).reduce((acc, key) => {
            if (key.includes("strIngredient") && drink[key] !== null) {
              acc.push(drink[key] as never);
            }
            return acc;
          }, []),
        };
      });
      setDrinks(newDrinks);
    });
  }, []);

  const searchNewDrink = () => {
    api
      .get(endPoint)
      .then((res) => {
        const newDrinks = res.data.drinks.map((drink: any) => {
          return {
            id: drink.idDrink,
            name: drink.strDrink,
            category: drink.strCategory,
            type: drink.strAlcoholic,
            instrutuction: drink.strInstructions,
            image: drink.strDrinkThumb,
            ingredients: Object.keys(drink).reduce((acc, key) => {
              if (key.includes("strIngredient") && drink[key] !== null) {
                acc.push(drink[key] as never);
              }
              return acc;
            }, []),
          };
        });
        setDrinks(newDrinks);
      })
      .catch((err) => toast.error("try another name"));
  };

  return (
    <DrinksContext.Provider
      value={{
        drinks,
        searchNewDrink,
        handleSearchInput,
        input,
        handleSearchSelect,
        select,
      }}
    >
      {children}
    </DrinksContext.Provider>
  );
};
export { DrinksProvider, DrinksContext };
