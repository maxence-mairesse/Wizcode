import './Tarifs.scss';

const Tarifs = () => {
  return (
    <div className="Tarifs">
      <div className="entete">
        <h2>Tarifs des prestations</h2>
        <h3>
          Des tarifs et forfaits pour tout type de projet : du site vitrine au
          site e-commerce, en passant par des applications web sur mesure,
          conçues spécialement pour vous.{' '}
        </h3>
      </div>
      <div className="sectionTarif">
        <div className="TarifJournalier blockTarif">
          <h3>Tarif Journalier</h3>
          <h4>200€/Jour TTC</h4>
        </div>
        <div className="Tarifsitevitrine blockTarif">
          <h3>Forfait site vitrine</h3>
          <h4>500€ TTC</h4>
          <p>
            {' '}
            Maquette et réalisation de votre site vitrine, comprenant les pages
            légales, la page d'accueil, ainsi que deux pages au choix (contact,
            galerie, etc.).
          </p>
        </div>

        <div className="Tarifsitevitrine blockTarif">
          <h3>Forfait site e-commerce</h3>
          <h4>2000€ TTC</h4>
          <p>
            {' '}
            Maquette et réalisation de votre site e-commerce:{' '}
            <span>catalogue, panier, système de paiement. </span>
          </p>
        </div>

        <div className="blockhidden blockTarif" />
      </div>
    </div>
  );
};

export default Tarifs;
