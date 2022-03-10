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
import Footer from "../../components/Footer";
import { IconButton, VStack, useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

const Home = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const { drinks, handleSearchSelect, select, handleSearchByLetter } =
    useContext(DrinksContext) as DrinksProviderData;
  const letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
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
      <VStack p={4} />

      <IconButton
        position="fixed"
        left="85%"
        top="5%"
        cursor="pointer"
        icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
        bg={
          colorMode === "light"
            ? getComputedStyle(
                document.querySelector(":root") as Element
              ).getPropertyValue("--darkmode")
            : getComputedStyle(
                document.querySelector(":root") as Element
              ).getPropertyValue("--beige")
        }
        color={
          colorMode === "light"
            ? getComputedStyle(
                document.querySelector(":root") as Element
              ).getPropertyValue("--beige")
            : getComputedStyle(
                document.querySelector(":root") as Element
              ).getPropertyValue("--brown")
        }
        isRound={true}
        size="lg"
        onClick={toggleColorMode}
        aria-label=""
      />
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
        <h2 className={style.filterLetterLabel}> Filtered by letter:</h2>
        <div className={style.linkLetters}>
          {letters.map((letter, index) => {
            return (
              <div key={index}>
                <p onClick={() => handleSearchByLetter(letter)}>{letter}</p>
                <p>|</p>
              </div>
            );
          })}
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
      <Footer />
    </>
  );
};
export default Home;
