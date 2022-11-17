import Inicio from "../Pages/Inicio";
import Carousel from "../Carousel";
import Descricao from "../Pages/Descricao";
import Footer from "../Pages/Footer";
import FotoCapa from '../Pages/FotoCapa';

export default function Home() {
  return (
    < div className="home" >
      <Inicio />
      <Carousel />
      <FotoCapa />
      <Descricao />
      <Footer />
    </div >
  );
}