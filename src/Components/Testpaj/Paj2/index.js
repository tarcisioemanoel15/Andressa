import { Paj } from "../styled";
import { Link } from "react-router-dom";

export default function Paj2() {

  return (
    <Paj>

      <div className="paj2">
        <Link to={'/'}>
          <button>Voltar</button>
        </Link>

        <h1>Paj2</h1>
        <img src="./static/images/icon/android-chrome-512x512.png" alt="" />
      </div>

    </Paj>
  );
}