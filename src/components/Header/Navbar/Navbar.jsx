import Languages from '../Languages/Languages.jsx';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='main-nav'>
      <ul className='main-menu'>
        <li className='main-menu-item'>
          <a className='main-menu-link active' href='#home'>
            Home
          </a>
        </li>
        <li className='main-menu-item'>
          <a className='main-menu-link' href='#portfolio'>
            Portfolio
          </a>
        </li>
        <li className='main-menu-item'>
          <a className='main-menu-link' href='#skills'>
            Skills
          </a>
        </li>
        <li className='main-menu-item'>
          <a className='main-menu-link' href='#contact'>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
