import { Menue } from "./style";
import { Link } from "react-router-dom";

export default function MenuSimples() {

  return (
    <div className="containner">
      <Menue>


        <header>

          <Link to={'/'}>
            <div className="iconLogo">
              <img src="./static/images/Icon/apple-touch-icon.png" alt="Logo" />
            </div>
          </Link>

          <nav>

            <ul>
              <Link to={'/'}>
                <li>Inicio</li>
              </Link>

              <Link to={'/a1'} >
                <li>Tiaras</li>
              </Link>

              <Link to={'/a2'} >
                <li>Grampos</li>
              </Link>

              <Link to={'/a3'} >
                <li>Menu3</li>
              </Link>

              <Link to={'/contato'} >
                <li>Menu4</li>
              </Link>

            </ul>
          </nav>

        </header>
      </Menue>


    </div>
  );
}
