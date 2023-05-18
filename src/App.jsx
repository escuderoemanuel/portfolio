import './App.css';
import Footer from './components/Footer/Footer';
import LuzBg from './components/Global/LuzBg/LuzBg';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header></Header>
      <LuzBg className={"Luz1"}></LuzBg>
      <LuzBg className={"Luz2"}></LuzBg>
      <LuzBg className={"Luz3"}></LuzBg>
      <LuzBg className={"Luz4"}></LuzBg>
      <Footer></Footer>
    </>
  );
}

export default App;
