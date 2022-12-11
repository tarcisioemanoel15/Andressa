import styled from "styled-components";

export const Paj = styled.div`

.containerTiaras{
  width: 100%;
  background-color: pink;
  color: black;
  text-align: center;

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
/* 
.paj2{
  width: 100%;
  height: 100vh;
  background-color: blue;
} */





.paj3{
  width: 100%;
  height: 100vh;
  background-color: red;
}

.contato{
  width: 100%;
  height: 100vh;
  background-color: black;
  color: white;
}

.containerTiaras,  
.paj3, .contato{
  font-family: Arial, Helvetica, sans-serif;
  padding-top: 80px;

}

`;