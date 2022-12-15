import styled from "styled-components";

export const Paj = styled.div`
@font-face {
  font-family: Macondo;
  src: url('./static/fonts/Macondo/Macondo-Regular.ttf');
};

.containerTiaras{
  width: 100%;
  background-color: pink;
  color: black;
  text-align: center;

}

.containerTiaras h1{
  font-family: Macondo;
  margin-top: 25px;
}

.containerImg{
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  justify-items: center;
}

.caixa{
  height: 400px;
  width: 250px;
  color: black;
  margin: 20px;
  text-align: right;
}
.caixa img{
  width: 100%;
  height: 100%;
  border-radius: 10px 50px 10px 10px;
}

@media screen and (max-width: 750px){
  .caixa{
    height: 300px;
    width: 250px;

    
  }
}



/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */




.paj3{
  text-align: center;
  width: 100%;
  height: 100vh;
  background-image: url('./static/images/01/Original/0.jpeg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  
}
/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
.contato{
  width: 100%;
  background-color: black;
  color: white;
  text-align: center;
  
}

.containerTiaras,  
.paj3, .contato{
  font-family: Arial, Helvetica, sans-serif;
  padding-top: 80px;

}

`;