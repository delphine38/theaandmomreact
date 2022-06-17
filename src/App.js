import './App.css';

//dans terminal
//npm install react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//import components
import Header from './components/Header';
import Nav from './components/Nav';
import Accueil from './components/Accueil';
import Boutique from './components/Boutique';

function App() {
  return (
    <div className="App">

      <header>
        <Header />

        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/accueil" element={<Accueil />} />
            <Route path="/boutique" element={<Boutique />} />
            
          </Routes>
        </BrowserRouter>

      </header>
      <main>

      </main>
      <footer></footer>
      
    </div>
  );
}

export default App;
