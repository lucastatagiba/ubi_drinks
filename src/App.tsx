import Header from "./components/Header";
import Home from "./pages/Home";
import style from "./styles/global.module.scss";

function App() {
  return (
    <div className={style.app}>
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
      <Home />
    </div>
  );
}

export default App;
