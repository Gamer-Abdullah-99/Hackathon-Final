import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import NavRoutes from './routes/routes';


function App() {
  return (
    <>
      <Router>
        <NavRoutes />
      </Router>
    </>
  );
}

export default App;
