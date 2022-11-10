import { DescricaoStyled } from "./styled";

function Descricao(params) {

  return (
    <DescricaoStyled>

      <div className="container">

        <div className="sbreOProduto">
          <h3>Sobre o produto</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatum voluptatem nulla molestias natus provident maxime tempore
            exercitationem iure sint aspernatur, hic velit adipisci impedit, optio
            iusto nesciunt at. Magnam, accusantium?</p>
        </div>


        <div className="comComprar">
          <h3>Como comprar</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatum voluptatem nulla molestias natus provident maxime tempore
            exercitationem iure sint aspernatur, hic velit adipisci impedit, optio
            iusto nesciunt at. Magnam, accusantium?</p>
        </div>

        <div className="material">

          <h3>Material</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatum voluptatem nulla molestias natus provident maxime tempore
            exercitationem iure sint aspernatur, hic velit adipisci impedit, optio
            iusto nesciunt at. Magnam, accusantium?</p>
        </div>


      </div>
    </DescricaoStyled>
  );

}

export default Descricao;