import { InputHTMLAttributes } from "react";
import style from "./styles.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({ ...rest }: InputProps) => {
  return <input className={style.input} {...rest} />;
};
export default Input;
