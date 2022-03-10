import { useContext } from "react";
import { useHistory } from "react-router-dom";
import {
  DrinksContext,
  DrinksProviderData,
} from "../../contexts/drinksProvider";
import style from "./styles.module.scss";

interface ButtonProps {
  children: string;
  isredirect?: boolean;
  nameCard?: string;
  redirectTo?: string;
}
const Button = ({
  children,
  isredirect,
  nameCard,
  redirectTo,
}: ButtonProps) => {
  const { searchNewDrink } = useContext(DrinksContext) as DrinksProviderData;
  const history = useHistory();
  const handleFunctions = () => {
    if (isredirect) {
      redirectTo === "/recipe"
        ? history.push(`${redirectTo}/${nameCard}`)
        : history.push(`${redirectTo}`);
    } else {
      return searchNewDrink();
    }
  };

  return (
    <button className={style.button} onClick={handleFunctions}>
      {children}
    </button>
  );
};
export default Button;
