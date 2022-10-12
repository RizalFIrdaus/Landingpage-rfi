import './App.css';
import Prop from './section/Prop';
import State from './section/State';
import Navbar from './component/Navbar';
import Hero from './component/Hero';

function App() {

  return (
    <>
    <section className="myNavbar">
        <Navbar/>
    </section>
    <section className='myHero'>
     <Hero/>
    </section>
       
    </>
  );
}

export default App;
