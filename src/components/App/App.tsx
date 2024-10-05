import logo from '../../assets/logo.svg';
import Home from '../Home/Home';
import Header from '../Header/Header';
import Error from '../Error/Error';
import './App.scss';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
