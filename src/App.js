import logo from './logo.svg';
import './App.css';
import Topbar from './components/Topbar';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Covid19 from './pages/Covid19';
import Vaccine from './pages/Vaccine';
import Home from './pages/Home';
import SmartCity from './pages/SmartCity/SmartCity';
import Footer from './components/Footer';
function App() {

  return (
    <>
      <Router>
      <Topbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/covid" element={<Covid19/>} />
          <Route path="/smart-city" element={<SmartCity/>} />
          <Route path="/vaksin" element={<Vaccine/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
