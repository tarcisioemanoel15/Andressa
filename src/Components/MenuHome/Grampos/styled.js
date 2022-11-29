import styled from "styled-components";

export const GramposContainer = styled.div`
@font-face {
  font-family: Parisienne;
  src: url('./public/static/fonts/Parisienne/Parisienne-Regular.ttf');
}


margin: auto;
width: 75%;
padding: 30px;
text-align: center;

h1{
margin-top: 50px;
margin-bottom: 25px;
font-family: Parisienne;
font-size: 50px;

}

h2{

  margin: 30px;
  font-family: Parisienne;
  font-size: 30px;

}


/* Photos deitada */
.retrato{
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 25px;
}

.box{
  width: 300px;
  height: 150px;
}

.box img{
  width: 100%;
  height: 100%;
  border-radius: 15px;
}
/* Photos deitada fim*/



/* photos empe */
.paisagem{
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));

  gap: 30px;
}

.boxHeithe{
  margin: auto;
  width: 190px;
  height: 300px;
}
.boxHeithe img{
  width: 100%;
  height: 100%;
  border-radius: 15px;

}
/* photos empe fim*/

`;