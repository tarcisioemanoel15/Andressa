import styled from "styled-components";

export const Carousell = styled.div`

@font-face {
  font-family: Dancingenne;
  src: url('./static/fonts/Parisienne/Parisienne-Regular.ttf');
}
@font-face {
  font-family: Macondo;
  src: url('./static/fonts/Macondo/Macondo-Regular.ttf');
};

font-family: Dancingenne;

.caixa {
  text-align: center;
  margin-left: -14px;
  position: relative;
}

.caixa h1 {
  font-size: 50px;
  color: #ff41ff73;
  font-family: Macondo;
  }

.containerr {
  width: 100%;
  margin: auto;
  height: 60%;
  text-align: center;
  padding: 15px;
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
}

.containerr::-webkit-scrollbar {
  display: none;
}

.containerr .carousel {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(16, 87, 150, 0.288);
  width: 100%;
  min-height: 200px;
  margin: auto;
}

.item {
  width: 100%;
  padding-top: 15px;
  margin: 7px;

  display: flex;
  flex-direction: column;
  justify-content: center;
}

.foto {
  width: 150px;
  height: 160px;
  display: flex;
  justify-content: center;
  border-radius: 10px;
}

.item .foto img {
  width: 60%;
  max-height: 200px;
  border-radius: 10px;
}

.item h5 {
  color: aliceblue;
  padding-top: 10px;
}

.item p {
  color: aliceblue;
  padding-top: 10px;
}

.buttons button {
  background-color:#e794e2;

  border: none;
  cursor: pointer;
  transition: all 2s;
  // border-radius: 20px;
}
.buttons button:hover{
  background-color:#dd4fd4;
}

.buttons button img{
  width: 25px;
}

.buttons button:first-child {
  position: absolute;
  left: 13px;
  top: 83px;
  height: 72%;
  transform: rotate(180deg);
}

.buttons button:last-child{
  position: absolute;
  right: 0;
  top: 83px;
  height: 72%;
}

@media screen and (max-width:600px){
  .buttons button img{
    width: 20px;
    background-color:#f0f8ff6e;
    border-radius: 50%;
  }

  .buttons button {
  background-color:transparent;
}

.buttons button:first-child {
  position: absolute;
  left: 10px;
  top: 83px;
  height: 72%;
}
}
`; 