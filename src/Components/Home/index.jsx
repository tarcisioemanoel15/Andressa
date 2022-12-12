import Inicio from "../Pages/Inicio";
import Carousel from "../Carousel";
import Descricao from "../Pages/Descricao";
import Tiaras from "../MenuHome/Tiaras";
import Footer from "../Pages/Footer";
import FotoCapa from '../Pages/FotoCapa';

export default function Home() {
  return (
    < div className="home" >
      <Inicio />
      <Carousel />
      <FotoCapa />
      <Tiaras />
      <Descricao />
      <Footer />
    </div >
  );
}