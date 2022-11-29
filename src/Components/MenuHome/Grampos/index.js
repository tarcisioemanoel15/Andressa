import { GramposContainer } from "./styled";
import Modal from "../../Pages/Inicio/Modal";

// imagems pequena
import grampo00 from "./img/Grampos/mices200/0.jpg";
import grampo01 from "./img/Grampos/mices200/1.jpg";
import grampo02 from "./img/Grampos/mices200/2.jpg";
import grampo03 from "./img/Grampos/mices200/3.jpg";
import grampo04 from "./img/Grampos/mices200/4.jpg";
import grampo05 from "./img/Grampos/mices200/5.jpg";
import grampo06 from "./img/Grampos/mices200/6.jpg";
import grampo07 from "./img/Grampos/mices200/7.jpg";
import grampo08 from "./img/Grampos/mices200/8.jpg";
import grampo09 from "./img/Grampos/mices200/9.jpg";
import grampo10 from "./img/Grampos/mices200/10.jpg";
import grampo11 from "./img/Grampos/mices200/11.jpg";
import grampo12 from "./img/Grampos/mices200/12.jpg";
// imagems pequena fim


// imagems media
import mise0 from "./img/Grampos/mices600/0.jpg";
import mise1 from "./img/Grampos/mices600/1.jpg";
import mise2 from "./img/Grampos/mices600/2.jpg";
import mise3 from "./img/Grampos/mices600/3.jpg";
import mise4 from "./img/Grampos/mices600/4.jpg";
import mise5 from "./img/Grampos/mices600/5.jpg";
import mise6 from "./img/Grampos/mices600/6.jpg";
import mise7 from "./img/Grampos/mices600/7.jpg";
import mise8 from "./img/Grampos/mices600/8.jpg";
import mise9 from "./img/Grampos/mices600/9.jpg";
import mise10 from "./img/Grampos/mices600/10.jpg";
import mise11 from "./img/Grampos/mices600/11.jpg";
import mise12 from "./img/Grampos/mices600/12.jpg";
// imagems media fim

import { useState } from 'react';


export default function Grampos() {

  const [isModalVisible1, setModalVisible1] = useState(false);
  const [isModalVisible2, setModalVisible2] = useState(false);
  const [isModalVisible3, setModalVisible3] = useState(false);
  const [isModalVisible4, setModalVisible4] = useState(false);
  const [isModalVisible5, setModalVisible5] = useState(false);
  const [isModalVisible6, setModalVisible6] = useState(false);
  const [isModalVisible7, setModalVisible7] = useState(false);
  const [isModalVisible8, setModalVisible8] = useState(false);
  const [isModalVisible9, setModalVisible9] = useState(false);
  const [isModalVisible10, setModalVisible10] = useState(false);
  const [isModalVisible11, setModalVisible11] = useState(false);
  const [isModalVisible12, setModalVisible12] = useState(false);
  const [isModalVisible13, setModalVisible13] = useState(false);

  return (
    <GramposContainer>

      <div className="Grampos">

        <h1>Grampos & Pulseiras</h1>

        <div className="retrato">

          <div className="box" onClick={() => setModalVisible1(true)}>
            <img src={grampo05} alt="grampo5" />
          </div>

          <div className="box" onClick={() => setModalVisible2(true)}>
            <img src={grampo06} alt="grampo6" />
          </div>

          <div className="box" onClick={() => setModalVisible3(true)}>
            <img src={grampo07} alt="grampo7" />
          </div>

          <div className="box" onClick={() => setModalVisible4(true)}>
            <img src={grampo08} alt="grampo8" />
          </div>

          <div className="box" onClick={() => setModalVisible5(true)}>
            <img src={grampo09} alt="grampo9" />
          </div>

          <div className="box" onClick={() => setModalVisible6(true)}>
            <img src={grampo10} alt="grampo10" />
          </div>

          <div className="box" onClick={() => setModalVisible7(true)}>
            <img src={grampo11} alt="grampo11" />
          </div>

          <div className="box" onClick={() => setModalVisible8(true)}>
            <img src={grampo12} alt="grampo12" />
          </div>

          <div className="box" onClick={() => setModalVisible9(true)}>
            <img src={grampo00} alt="grampo0" />
          </div>

          <div className="box" onClick={() => setModalVisible10(true)}>
            <img src={grampo02} alt="grampo2" />
          </div>

        </div>

        <h2>Com muito Amor</h2>
        <div className="paisagem">

          <div className="boxHeithe" onClick={() => setModalVisible11(true)}>
            <img src={grampo01} alt="grampo1" />
          </div>

          <div className="boxHeithe" onClick={() => setModalVisible12(true)}>
            <img src={grampo03} alt="grampo3" />
          </div>

          <div className="boxHeithe" onClick={() => setModalVisible13(true)}>
            <img src={grampo04} alt="grampo4" />
          </div>

        </div>

      </div>


      {
        isModalVisible1 ? (
          <Modal onClose={() => { setModalVisible1(false) }}>
            <img src={mise5} alt="erroTiara" />
          </Modal>
        ) : null
      }

      {
        isModalVisible2 ? (
          <Modal onClose={() => { setModalVisible2(false) }}>
            <img src={mise6} alt="erroTiara" />
          </Modal>
        ) : null
      }

      {
        isModalVisible3 ? (
          <Modal onClose={() => { setModalVisible3(false) }}>
            <img src={mise7} alt="erroTiara" />
          </Modal>
        ) : null
      }

      {
        isModalVisible4 ? (
          <Modal onClose={() => { setModalVisible4(false) }}>
            <img src={mise8} alt="erroTiara" />
          </Modal>
        ) : null
      }
      {
        isModalVisible5 ? (
          <Modal onClose={() => { setModalVisible5(false) }}>
            <img src={mise9} alt="erroTiara" />
          </Modal>
        ) : null
      }

      {
        isModalVisible6 ? (
          <Modal onClose={() => { setModalVisible6(false) }}>
            <img src={mise10} alt="erroTiara" />
          </Modal>
        ) : null
      }

      {
        isModalVisible7 ? (
          <Modal onClose={() => { setModalVisible7(false) }}>
            <img src={mise11} alt="erroTiara" />
          </Modal>
        ) : null
      }

      {
        isModalVisible8 ? (
          <Modal onClose={() => { setModalVisible8(false) }}>
            <img src={mise12} alt="erroTiara" />
          </Modal>
        ) : null
      }

      {
        isModalVisible9 ? (
          <Modal onClose={() => { setModalVisible9(false) }}>
            <img src={mise0} alt="erroTiara" />
          </Modal>
        ) : null
      }

      {
        isModalVisible10 ? (
          <Modal onClose={() => { setModalVisible10(false) }}>
            <img src={mise2} alt="erroTiara" />
          </Modal>
        ) : null
      }

      {
        isModalVisible11 ? (
          <Modal onClose={() => { setModalVisible11(false) }}>
            <img height="460px" src={mise1} alt="erroTiara" />
          </Modal>
        ) : null
      }

      {
        isModalVisible12 ? (
          <Modal onClose={() => { setModalVisible12(false) }}>
            <img height="460px" src={mise3} alt="erroTiara" />
          </Modal>
        ) : null
      }

      {
        isModalVisible13 ? (
          <Modal onClose={() => { setModalVisible13(false) }}>
            <img height="460px" src={mise4} alt="erroTiara" />
          </Modal>
        ) : null
      }

    </GramposContainer>

  );
}