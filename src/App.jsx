import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/about/About';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Profile from './components/profile/Profile';

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
