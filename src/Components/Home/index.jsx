import Inicio from "../Pages/Inicio";
import Carousel from "../Carousel";
import Descricao from "../Pages/Descricao";
import Footer from "../Pages/Footer";

export default function Home() {
  return (
    < div className="home" >
      <Inicio />
      <Carousel />
      <Descricao />
      <Footer />
    </div >
  );
}