import './App.css';
import Prop from './section/Prop';
import State from './section/State';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import About from './component/About';
import Loading from './component/Loading';
import { useEffect, useState } from 'react';




const App = ()=> {

  const[show,setShow] = useState(false);
  
  useEffect(()=>{
    setTimeout(()=>{
      setShow(true)
    },3000)
  })

   if (!show){
    return (
      <> 
      
      {/* <Loading/> */}
    <Navbar/>

      
      </>
    );
   }
   return(
    <>
      <Navbar/>
    </>
   )
   
   
  
}

export default App;
