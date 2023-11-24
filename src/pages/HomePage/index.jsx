import "./style.css";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <>
      <Header></Header>

      <div className="hero--left-col">
        <h1>Interaktivně za památkami</h1>
        <div className="about">
          <div className="about--text">
            <p>
              <span className="highlight">
                Interaktivní webové průvodce pražskými památkami,
              </span>{" "}
              <span className="highlight">
                Inovativní a zábavný způsob, jak poznat architekturu a kulturní
                dědictví tohoto města.
              </span>{" "}
            </p>
            {/* tlačítka */}
            <div className="btns-container">
              <Link to="/monuments">
                <button className="btn bth--monuments">Chci se učit </button>{" "}
              </Link>

              <Link to="/game">
                <button className="btn bth--about-us">Chci se otestovat</button>
              </Link>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
      
    </>
    
  );
};
