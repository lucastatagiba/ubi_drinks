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
  handleRecipeDrink: (name: string) => void;
  handleSearchByLetter: (letter: string) => void;
  drinkCard: DrinksFormat[];
}

const DrinksContext = createContext({});

const DrinksProvider = ({ children }: drinksProviderProps) => {
  const [drinks, setDrinks] = useState<DrinksFormat[]>([]);
  const [input, setInput] = useState("");
  const [select, setSelect] = useState("name");
  const [endPoint, setEndPoint] = useState("");
  const [drinkCard, setDrinkCard] = useState<DrinksFormat[]>([]);

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
    api.get("/search.php?f=a").then((res) => {
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

  const handleRecipeDrink = (name: string) => {
    api
      .get(`/search.php?s=${name}`)
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
        setDrinkCard(newDrinks);
        toast.success("Drink in moderation 😎");
      })
      .catch((err) => toast.error("try another name"));
  };

  const handleSearchByLetter = (letter: string) => {
    api.get(`/search.php?f=${letter}`).then((res) => {
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
        handleRecipeDrink,
        drinkCard,
        handleSearchByLetter,
      }}
    >
      {children}
    </DrinksContext.Provider>
  );
};
export { DrinksProvider, DrinksContext };
