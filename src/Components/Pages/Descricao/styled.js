import styled from 'styled-components';

export const DescricaoStyled = styled.section`

@font-face {
  font-family: Parisienne;
  src: url('./static/fonts/Parisienne-Regular.ttf');
}

text-align: center;
font-family: Arial, Helvetica, sans-serif;

.container{
  background-color: #ffffff91;
  width: 95%;
  display: flex;
  gap: 5px;
  margin: auto;
  margin-bottom: 20px;
  border-radius: 20px;
  box-shadow: 0px 0px 8px floralwhite;
}
.container div{
  width: 30%;
  margin: auto;
  padding: 10px;
}

.container div h3{
  padding: 10px;
  padding-bottom: 25px;
  font-family: Parisienne;
  font-size: 155%;
}



@media screen and (max-width: 590px){

  .container{
    display: block;
  }

  .container div{
  width: 80%;
}
}

`; 