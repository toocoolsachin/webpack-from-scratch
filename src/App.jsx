import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import HomeImage from './images/kieran-taylor-xnwmORhx4rc-unsplash.jpg';
import ProfileImage from './images/simon-pallard-WoIwpd-xOrU-unsplash.jpg';
import AboutImage from './images/zhou-xian-_2IrHlei4TA-unsplash.jpg';

const Header = () => (
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
);

const Home = () => (
  <>
    <h1>Home</h1>
    <img src={HomeImage} alt='home-img' className='img' />
  </>
);
const Profile = () => (
  <>
    <h1>Profile</h1>
    <img src={ProfileImage} alt='home-img' className='img' />
  </>
);
const About = () => (
  <>
    <h1>About</h1>
    <img src={AboutImage} alt='home-img' className='img' />
  </>
);

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/about' element={<About />} />
    </Routes>
  </BrowserRouter>
);

export default App;
