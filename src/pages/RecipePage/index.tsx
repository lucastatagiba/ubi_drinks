import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Card from "../../components/Card";
import Header from "../../components/Header";
import { DrinksFormat } from "../../contexts/drinksProvider";
import { api } from "../../services/api";
import style from "./styles.module.scss";

interface nameParams {
  name: string;
}

const RecipePage = () => {
  const { name }: nameParams = useParams();
  const [drinkCard, setDrinkCard] = useState<DrinksFormat[]>([]);
  useEffect(() => {
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

      .catch((err) => toast.error("drink not found"));
  }, [name]);

  return (
    <>
      <Header />
      <div className={style.mainRecipe}>
        {drinkCard[0] && (
          <Card
            id={drinkCard[0].id}
            name={drinkCard[0].name}
            type={drinkCard[0].type}
            category={drinkCard[0].category}
            instrutuction={drinkCard[0].instrutuction}
            image={drinkCard[0].image}
            ingredients={drinkCard[0].ingredients}
            isRecipe
          />
        )}
      </div>
    </>
  );
};
export default RecipePage;
