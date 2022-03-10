import { DrinksFormat } from "../../contexts/drinksProvider";
import Button from "../Button";
import style from "./styles.module.scss";

const Card = ({
  name,
  image,
  type,
  instrutuction,
  category,
  ingredients,
  isRecipe,
}: DrinksFormat) => {
  return (
    <>
      {!isRecipe ? (
        <div className={style.divCard}>
          <h2> {name} </h2>

          <div className={style.cardDownSide}>
            <img alt="drinkImage" src={`${image}`} loading="lazy" />
            <Button isredirect nameCard={name} redirectTo="/recipe">
              Get your recipe
            </Button>
          </div>
        </div>
      ) : (
        <div className={style.divCard + " " + style.recipe}>
          <h2> {name} </h2>
          <img alt="drinkImage" src={`${image}`} loading="lazy" />
          <span className={style.ingredients}>Ingredients:</span>
          <ul>
            {ingredients.map((item, index) => (
              <li key={index}> {item} </li>
            ))}
          </ul>
          <span className={style.instructionsLabel}> How to do: </span>
          <span className={style.instructions}>{instrutuction}</span>
          <div className={style.typeAndCategory}>
            <div className={style.divType}>
              <span className={style.typeLabel}>Type:</span>
              <span className={style.type}>{type}</span>
            </div>
            <div className={style.divCategory}>
              <span className={style.categoryLabel}>Category:</span>
              <span className={style.category}>{category}</span>
            </div>
          </div>

          <Button isredirect nameCard={name} redirectTo={"/"}>
            Back to the home page
          </Button>
        </div>
      )}
    </>
  );
};

export default Card;
