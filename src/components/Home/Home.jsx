import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { MainHome} from "./MainHome";

const Home = () => {
  return (
    <div className="ecom-home-container">
      <Header />
      <MainHome />
      <Footer/>
    </div>
  );
};

export { Home };
