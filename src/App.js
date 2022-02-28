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
function App() {

  return (
    <>
      <Router>
      <Topbar />
        <Routes>
          <Route path="/covid" element={<Covid19/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
