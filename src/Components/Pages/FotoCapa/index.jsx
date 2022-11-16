import { Fotocapa } from "./styled";
import Proprietaria from "./img/Proprietaria.png";
// import Tiara from "./img/tiara-192x192.png";


function FotoCapa() {
  return (
    <Fotocapa>



      {/* <div className="container"> */}

      <div className="tituloDaCapa">
        <h1>Titulo</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, possimus facilis facere fuga soluta voluptatem ducimus optio saepe ea pariatur provident iste incidunt. Vero expedita commodi, a eligendi aliquid obcaecati.
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