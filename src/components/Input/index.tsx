import { InputHTMLAttributes, useContext } from "react";
import {
  DrinksContext,
  DrinksProviderData,
} from "../../contexts/drinksProvider";
import style from "./styles.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = (props: InputProps) => {
  const { handleSearchInput } = useContext(DrinksContext) as DrinksProviderData;
  return (
    <input
      className={style.input}
      {...props}
      onChange={(e) => handleSearchInput(e.target.value)}
    />
  );
};
export default Input;
