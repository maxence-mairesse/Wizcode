import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from '../Home/Home';
import Header from '../Header/Header';
import Error from '../Error/Error';
import Prestations from '../Presations/Prestations';
import Tarifs from '../Tarifs/Tarifs';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prestations" element={<Prestations />} />
        <Route path="/tarifs" element={<Tarifs />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
