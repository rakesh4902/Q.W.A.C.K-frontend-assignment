import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
    <Header />
    <div className='visible active'>
    <div className="app">
      <a href="https://www.qwackedu.com/vocabulary/word"><div className='word-button'><h1 className='word'>Word of the Day</h1></div></a>
      <a href="https://www.qwackedu.com/vocabulary/games"><div className='word-button1'><h1 className='word'>Play Fun games</h1></div></a>
    <div className="sun">
    </div>
    <div className="ocean">
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
    </div>
  
    </div>
    </div>
    <Footer /> 
    </>
  );
}

export default App;
