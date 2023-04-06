import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';

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

const Home = () => <h1>Home</h1>;
const Profile = () => <h1>Profile</h1>;
const About = () => <h1>About</h1>;

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
