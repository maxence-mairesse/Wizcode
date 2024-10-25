import './Presations.scss';

const Prestations = () => {
  return (
    <div className="Prestations">
      <div className="entete">
        <h2>Nos prestations de service</h2>
        <h3>
          {' '}
          Notre mission, concevoir et développer le produit qui vous aidera a
          passer au niveau suivant{' '}
        </h3>
      </div>

      <div className="service">
        <h3> Que proposons-nous ?</h3>

        <ul>
          <li>
            <div>
              <i className="fa-solid fa-paintbrush" />
            </div>
            <h4> Identité graphique</h4>
            <p>
              Réalisation d'une maquette et d'une charte graphique pour des
              élements dans un projet web.
            </p>
          </li>
          <li>
            <div>
              <i className="fa-solid fa-paintbrush" />
            </div>
            <h4> Intégration web </h4>
            <p>
              Intégration d'une maquette en respectant la charte graphique et
              les normes W3C.
            </p>
          </li>

          <li>
            <div>
              <i className="fa-solid fa-paintbrush" />
            </div>
            <h4> Développement </h4>
            <p>
              Développement seul ou au sein d'une équipe dans le cadre d'une
              mission pour poursuivre ou améliorer un projet déjà existant.
            </p>
          </li>
        </ul>

        <h3> vous êtes convaincus ?</h3>

        <div className="contact">
          <h4>Contactez moi Malt</h4>
          <a href="https://www.malt.fr/profile/maxencemairesse01">
            Voir profil Malt
          </a>
        </div>
      </div>
    </div>
  );
};

export default Prestations;
