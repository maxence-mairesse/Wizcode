import './Home.scss';

const Home = () => {
  return (
    <div className="Home">
      <div className="presentation">
        <img src="../../../logo.png" alt="logo site" />{' '}
        <h3>Maxence Mairesse</h3>
        <h4>Développeur Fullstack Freelance</h4>
      </div>
      <div className="accroche">
        <div className="title">
          <hr />
          <h3>Ensemble</h3>
          <hr />
        </div>
        <div>
          <h2>Créons un produit innovant </h2>
        </div>
        <div className="adjectif">
          <div>
            <ul>
              <li>
                <i className="fa-solid fa-medal" />
              </li>
              <li>Qualité</li>
              <li>
                Faites passer votre projet web à un niveau supérieur avec une
                solution technologique de pointe.
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <i className="fa-solid fa-bullseye" />
              </li>
              <li>Objectif</li>
              <li>
                On conçoit et développe des solutions adaptées à vos besoins.
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <i className="fa-solid fa-message" />
              </li>
              <li>Communication</li>
              <li>
                100 % à distance, on communique et on organise les objectifs en
                utilisant la méthode Agile.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
