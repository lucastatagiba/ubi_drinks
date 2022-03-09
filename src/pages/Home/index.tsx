import Input from "../../components/Input";
import style from "./styles.module.scss";
import Button from "../../components/Button";

const Home = () => {
  return (
    <div className={style.main}>
      <span className={style.labelInput}>
        search for your drink to see the recipe
      </span>
      <div className={style.divInput}>
        <Input placeholder="Ex: margarita, melya..." />
        <Button />
      </div>
    </div>
  );
};
export default Home;
