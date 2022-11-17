import { Paj } from "../styled";
import { Link } from "react-router-dom";
import Carousel from "../../Carousel";

export default function Contato() {

  return (
    <Paj>

      <div className="contato">

        <h1>Contato</h1>

        <h2>(74)999 999-999</h2>
        <Carousel />


        <Link to={'/'}>
          <button>Voltar</button>
        </Link>

      </div>

    </Paj>
  );
}