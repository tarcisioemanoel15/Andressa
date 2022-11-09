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
        <Carousel />
      </div>

    </Paj>
  );
}