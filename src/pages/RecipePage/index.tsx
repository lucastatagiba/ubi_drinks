import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import {
  DrinksContext,
  DrinksProviderData,
} from "../../contexts/drinksProvider";
import style from "./styles.module.scss";

interface nameParams {
  name: string;
}

const RecipePage = () => {
  const { name }: nameParams = useParams();
  const { handleRecipeDrink, drinkCard } = useContext(
    DrinksContext
  ) as DrinksProviderData;
  useEffect(() => {
    handleRecipeDrink(name);
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
      <Footer />
    </>
  );
};
export default RecipePage;
