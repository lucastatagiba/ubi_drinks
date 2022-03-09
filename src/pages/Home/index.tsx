import Input from "../../components/Input";
import style from "./styles.module.scss";
import Button from "../../components/Button";
import Header from "../../components/Header";

const Home = () => {
  return (
    <div className={style.main}>
      <Header />

      <section className={style.sectionWelcome}>
        <h1>There is always a perfect drink for every occasion. </h1>
        <p>
          The world has changed, now we spend more time at home on more intimate
          occasions when suddenly, you feel like drinking something different,
          but you don't want to have to prepare, for example, a drink with gin
          that is a lot of work. You just want to be more practical when having
          friends over and you don't have time to prepare something very
          elaborate. How about learning how to make easy drinks that perfectly
          match each of our new moments?
        </p>
      </section>
      <span className={style.labelInput}>
        Search for your drink to see the recipe:
      </span>
      <div className={style.divInput}>
        <Input placeholder="Ex: margarita, melya..." />
        <Button />
      </div>
    </div>
  );
};
export default Home;
