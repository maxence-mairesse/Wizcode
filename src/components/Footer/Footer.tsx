import './Footer.scss';

const Footer = () => {
  return (
    <div className="Footer">
      <div className="name">
        <img src="./logo.png" alt="" />
        <h2>WizardCode</h2>
        <ul>
          <li>Maxence Mairesse développeur Fullstack</li>

          <li>
            mail:{' '}
            <a className="mail" href="mailto:wizardcodepro@gmail.com">
              wizardcodepro@gmail.com{' '}
            </a>
          </li>
          <li>Siret: 92828697000019</li>
        </ul>
      </div>
      <div className="navigation hidden ">
        <h2>Navigation</h2>
        <ul className="nav list">
          <li>
            <a href="/">Accueil</a>
          </li>
          <li>
            <a href="/prestations">Prestations</a>
          </li>
          <li>
            <a href="/tarifs">Tarifs</a>
          </li>
          <li>
            <a href="/portfolio">Portfolio</a>
          </li>
        </ul>
      </div>
      <div className="reseaux  hidden">
        <h2>Reseaux</h2>
        <ul className="reseau-nav list">
          <li>
            <a href="https://www.linkedin.com/in/maxence-mairesse/">Linkedin</a>
          </li>
          <li>
            <a href="https://github.com/maxence-mairesse">Github</a>
          </li>
          <li>
            <a href="https://www.malt.fr/profile/maxencemairesse01">Malt</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
