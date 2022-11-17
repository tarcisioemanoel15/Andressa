import { Paj } from "../styled";
import { Link } from "react-router-dom";

export default function Paj1() {

  return (
    <Paj>

      <div className="paj1">

        <h1>Paj1</h1>
        <p>Falta terminar</p>

        <Link to={'/'}>
          <button>Voltar</button>
        </Link>


      </div>

    </Paj>
  );
}