import { Link } from 'react-router-dom';
import { DEFAULT_USERNAME } from 'src/utils/constants';

const Header = () => (
  <>
    <h3>Welcome, {DEFAULT_USERNAME}</h3>
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/profile'>Profile</Link>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>
    </ul>
  </>
);

export default Header;
