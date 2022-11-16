import styled from "styled-components";

export const Fotocapa = styled.article`

@font-face {
  font-family: Parisienne;
  src: url('./static/fonts/Parisienne/Parisienne-Regular.ttf');
}

.tituloDaCapa h1{
  font-family: Parisienne;
}
.tituloDaCapa p{
  font-family: Arial, Helvetica, sans-serif;
}


display: flex;
justify-content: center;
justify-content: space-around;
align-items: center;
width: 100%;
height: 100vh;
padding: 20px;

.FCapa img{
  width: 300px;
  border-radius: 0px 50px 0px 120px;
}



.tituloDaCapa{
  width: 15%;
}


@media screen and (max-width:950px){
.FCapa img{
 width: 200px;
}
}

.tituloDaCapa{
  width: 35%;
}

@media screen and (max-width:600px){
  flex-flow: column-reverse;

  
.tituloDaCapa{
  width: 50%;
}

}

`;
