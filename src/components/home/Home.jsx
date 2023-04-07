import HomeImage from 'images/kieran-taylor-xnwmORhx4rc-unsplash.jpg';

console.log(process.env.REACT_APP_API_KEY);
console.log(process.env.REACT_APP_ANOTHER_KEY);

const Home = () => (
  <>
    <h1>Home</h1>
    <img src={HomeImage} alt='home-img' className='img' />
  </>
);

export default Home;
