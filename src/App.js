import './App.css';
import Prop from './component/Prop';
import State from './component/State';
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div className='text-center mb-20'>
          <p className='text-[72px] '>MewCount</p>
          <p className='text-[24px] font-light text-stone-400 '>By Rizal</p>
        </div>
       <State />
       <div>
       </div>
      </header>
    </div>
  );
}

export default App;
