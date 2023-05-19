import './Body.css';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import Portfolio from './Porfolio/Portfolio';
import Skills from './Skills/Skills';

const Body = () => {
  return (
    <div className='body'>
      <Home></Home>
      <Portfolio></Portfolio>
      <Skills></Skills>
      <Contact></Contact>
    </div>
  );
};
export default Body;
