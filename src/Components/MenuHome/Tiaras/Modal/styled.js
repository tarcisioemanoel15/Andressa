
import styled from "styled-components";

export const Mmodal = styled.div`
color: black;

.modal{
width: 100%;
height: 100vh;
top: 0px;
left: 0;
z-index: 1;
background-color: black;
display: flex;
justify-content: center;
align-items: center;
position: fixed;
}

.container{
  background-color: #4e4949db;
  width: 80%;
  height: 99%;
  color: black;
  border-radius: 20px;

  display: grid;
    justify-content: center;
    align-items: center;

    padding-bottom: 230px;
}

div.content{
display: flex;
justify-content: center;
}

.container .content img{
   width: 63%;
  height: 100%;
  border-radius: 15px;
}








.close{
  background-color: transparent;
  color: wheat;
  border: none;
  font-size: 120%;
  margin: 10px;
  outline: none;
  width: 30px;
  height: 32px;
  right: calc(-100% + 63px);
  cursor: pointer;
  top: -5px;
  display: flex;
  position: relative;
  align-items: center;
  padding-bottom:-10px ;

}

`;