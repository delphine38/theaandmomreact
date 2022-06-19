import './App.css';

//dans terminal
//npm install react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//import components
import Header from './components/Header';
import Nav from './components/Nav';
import Accueil from './components/Accueil';
import Boutique from './components/Boutique';
import Apropos from './components/Apropos';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
            
            <Route path="/apropos" element={<Apropos />} />
            
            <Route path="/contact" element={<Contact />} />
            
          </Routes>
        </BrowserRouter>

      </header>
      <main>

      </main>
      <footer>
        <Footer />
      </footer>
      
    </div>
  );
}

export default App;
