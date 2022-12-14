
import styled from "styled-components";

export const Mmodal = styled.div`
color: black;

.modal{
width: 100%;
height: 100%;
top: 0;
left: 0;
z-index: 1;
background-color: black;
display: flex;
justify-content: center;
align-items: center;
position: fixed;
}



div.content{
display: flex;
justify-content: center;
}

.container .content img{
   width: 90%;
   height: 70vh;
  border-radius: 15px;
}


.close{
  background-color: transparent;
  color: white;
  border: none;
  font-size: 200%;
  margin: 10px;
  outline: none;
  width: 30px;
  height: 32px;
  right: calc(-100% + 63px);
  cursor: pointer;
  top: 12px;
  display: flex;
  position: relative;
  align-items: center;
  padding-bottom:-10px ;
  // z-index: 3;

}

`;