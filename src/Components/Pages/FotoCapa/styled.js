import styled from "styled-components";

export const Fotocapa = styled.article`

@font-face {
  font-family: Parisienne;
  src: url('./static/fonts/Parisienne/Parisienne-Regular.ttf');
}

@font-face {
  font-family: Macondo;
  src: url('./static/fonts/Macondo/Macondo-Regular.ttf');
};

.tituloDaCapa h1{
  font-family: Macondo;
}
.tituloDaCapa p{
  font-family: Macondo;
}

display: flex;
justify-content: center;
justify-content: space-around;
align-items: center;
width: 100%;
/* height: 100vh; */
padding: 20px;

.FCapa img{
  width: 300px;
  border-radius: 0px 50px 0px 120px;
}

.tituloDaCapa{
  width: 25%;
}
.tituloDaCapa p, h1{
  font-size: 40px;
}

@media screen and (max-width:950px){
.FCapa img{
 width: 200px;
}
}

.tituloDaCapa{
  width: 55%;
}

@media screen and (max-width:600px){
  flex-flow: column-reverse;
  
.tituloDaCapa{
  width: 80%;
}
}
`;
