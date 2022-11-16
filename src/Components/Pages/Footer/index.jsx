import { Footerr } from "./stiled";
import Zapp from "./img/Zap.jpg";
function Footer() {

  return (
    <Footerr>

      <footer id='footerr'>
        <div className="footerImg"><img src={Zapp} alt="zapp" /></div>
        <h1>(74)999 074-904</h1>
      </footer>

    </Footerr>
  );
}

export default Footer;