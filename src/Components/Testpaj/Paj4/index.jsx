import { Paj } from "../styled";
import { Link } from "react-router-dom";
import Carousel from "../../Carousel";

export default function Paj4() {

  return (
    <Paj>

      <div className="paj4">
        <Link to={'/'}>
          <button>Voltar</button>
        </Link>

        <h1>Paj4</h1>
        <h2>ZAP: (74)999 999-999</h2>
        <Carousel />
      </div>

    </Paj>
  );
}