import Input from "../../components/Input";
import style from "./styles.module.scss";
import Button from "../../components/Button";
import Header from "../../components/Header";
import { useContext, useEffect, useState } from "react";
import {
  DrinksContext,
  DrinksProviderData,
} from "../../contexts/drinksProvider";
import Card from "../../components/Card";

const Home = () => {
  const { drinks, handleSearchSelect, select } = useContext(
    DrinksContext
  ) as DrinksProviderData;
  const [placeholder, setPlaceholder] = useState("");
  useEffect(() => {
    select === "name"
      ? setPlaceholder("Ex: margarita, melya...")
      : select === "category"
      ? setPlaceholder("Ex: cocktail, ordinary drink...")
      : setPlaceholder("Ex: Vodka, gin...");
  }, [select]);
  return (
    <>
      <Header />
      <div className={style.main}>
        <section className={style.sectionWelcome}>
          <h1>There is always a perfect drink for every occasion. </h1>
          <p>
            The world has changed, now we spend more time at home on more
            intimate occasions when suddenly, you feel like drinking something
            different, but you don't want to have to prepare, for example, a
            drink with gin that is a lot of work. You just want to be more
            practical when having friends over and you don't have time to
            prepare something very elaborate. How about learning how to make
            easy drinks that perfectly match each of our new moments?
          </p>
        </section>
        <span className={style.labelInput}>
          Search for your drink to see the recipe:
        </span>
        <div className={style.selectDiv}>
          <h2>Filtered by:</h2>
          <select onChange={(e) => handleSearchSelect(e.target.value)}>
            <option value="name"> Drink name </option>
            <option value="category"> Category </option>
            <option value="ingredients"> Ingredients </option>
          </select>
        </div>

        <div className={style.divInput}>
          <Input placeholder={placeholder} />
          <Button>Search</Button>
        </div>

        <ul>
          {drinks.map((drink) => (
            <li key={drink.id}>
              <Card
                id={drink.id}
                name={drink.name}
                type={drink.type}
                category={drink.category}
                instrutuction={drink.instrutuction}
                image={drink.image}
                ingredients={drink.ingredients}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default Home;
