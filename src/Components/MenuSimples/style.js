import styled from 'styled-components';

export const Menue = styled.header`

@font-face {
  font-family: parisienne ;
  src: url('./static/fonts/Parisienne/Parisienne-Regular.ttf');
};



nav ul {
  display: flex;
}

 li{
  list-style: none;
  color: white;
  margin-left: 30px;
}

a{
  text-decoration: none;
}

a:hover{
  color: blue;

  text-decoration: underline;
}


header {
  width: 100%;
  background-color:#e794e2;
  display: flex;
  justify-content: space-between;
  font-family: parisienne;
  padding-left: 50px;
  padding-right: 50px;
  align-items: center;
  position: fixed;
  z-index: 1;
}


header .iconLogo img{
  width: 65px;
  height: 70px;
    margin-top: 5px;

  }

 


  @media screen and (max-width: 530px) {
    header{
      // display: block;
      padding-left: 10px;
      padding-right: 10px;
    }
  
  }

  @media screen and (max-width: 480px) {
    header{
    display: grid;
    }

      header .iconLogo img{
        width: 40px;
        height: 40px;
    }
   }
  @media screen and (max-width: 410px) {
    header{
    display: grid;
    }

      header .iconLogo img{
        width: 40px;
    }
 
    nav ul li{
    font-size: 70%;
    }
  }
`;