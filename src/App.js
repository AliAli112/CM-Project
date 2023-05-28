// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Main } from './pages/main'
import { Mint } from './pages/minting'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route  exact path = '/' element={ <Main /> }/>
          <Route  exact path = '/mint' element={ <Mint /> }/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
