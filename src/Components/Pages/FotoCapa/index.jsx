import { Fotocapa } from "./styled";
import Proprietaria from "./img/Proprietaria.png";

function FotoCapa() {
  return (
    <Fotocapa>
      {/* <div className="container"> */}

      <div className="tituloDaCapa">
        <h1>Salmo 125:1</h1>
        <p>
          Aqueles que confiam no Senhor são como o monte Sião,
          que não pode ser abalado, mas permanece para sempre.
        </p>

      </div>

      <div className="FCapa">
        <img src={Proprietaria} alt="" />
      </div>

      {/* </div> */}

    </Fotocapa>
  );
}

export default FotoCapa;