import { useHistory } from "react-router-dom";
import style from "./styles.module.scss";

const NotFoundPage = () => {
  const history = useHistory();
  return (
    <>
      <div className={style.mainDivNotFound}>
        <div>
          <h1>Error 404</h1>
          <h2>Page not found !</h2>
        </div>
        <button onClick={() => history.push("/")}>Back to Home</button>
      </div>
    </>
  );
};
export default NotFoundPage;
