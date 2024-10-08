import './Home.scss';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hook/redux';

const Home = () => {
  const isopen: boolean = useAppSelector((state) => state.HomeReducer.OpenMenu);

  return (
    <div className={isopen ? 'hidden' : 'Home'}>
      <div className="presentation">
        <div className="image">
          <img src="../../../logo.png" alt="logo site" />{' '}
          <h2>Wizarding Code</h2>
        </div>
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
      <div className="stack">
        <hr />
        <div>
          <Link to="https://fr.legacy.reactjs.org/" target="_blank">
            <div>
              <ul>
                <li>
                  <img src="../../../logo/React.png" alt="logo react" />
                </li>
                <li>React</li>
              </ul>
            </div>
          </Link>
          <Link to="https://laravel.com/" target="_blank">
            <div>
              <ul>
                <li>
                  <img src="../../../logo/Laravel.png" alt="logo Laravel" />
                </li>
                <li>Laravel</li>
              </ul>
            </div>
          </Link>
          <Link to="https://nodejs.org/fr" target="_blank">
            <div>
              <ul>
                <li>
                  <img src="../../../logo/Node.js.png" alt="logo NodeJs" />
                </li>
                <li>NodeJS</li>
              </ul>
            </div>
          </Link>
          <Link to="https://getbootstrap.com/" target="_blank">
            <div>
              <ul>
                <li>
                  <img
                    src="../../../logo/Bootstrap_logo.png"
                    alt="logo Bootstrap"
                  />
                </li>
                <li>Bootstrap</li>
              </ul>
            </div>
          </Link>
        </div>
        <hr />
      </div>
      <div className="pourquoi">
        <h2>Besoin d'un développeur FullStack</h2>
        <h3>Que pourrions nous faire ensemble ?</h3>

        <img src="../../../moi.jpeg" />
        <p>
          Je conçois et développe des projets web de toutes envergures, allant
          des sites vitrines aux solutions SaaS, en répondant aux besoins tant
          des petites que des grandes entreprises.
        </p>

        <Link to="/presations" className="link">
          En savoir Plus
        </Link>
      </div>
      <hr />
      <div className="CV">
        <h2>CV développeur fullstack</h2>
        <h3>Besoin d'en savoir plus sur mon parcours, téléchargez mon cv </h3>

        <button type="submit">
          <a href="../../../files/CV.pdf" target="_blank" rel="noreferrer">
            Télécharger le CV
          </a>
        </button>
      </div>
    </div>
  );
};

export default Home;
