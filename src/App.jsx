import './App.css';
import Footer from './components/Footer/Footer';
import LuzBg from './components/Global/LuzBg/LuzBg';
import Header from './components/Header/Header';
import Home from './components/Body/Home/Home';
import Portfolio from './components/Body/Porfolio/Portfolio';
import Skills from './components/Body/Skills/Skills';
import Contact from './components/Body/Contact/Contact';

function App() {
  return (
    <>
      <Header></Header>
      <Home></Home>
      <Portfolio></Portfolio>
      <Skills></Skills>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
