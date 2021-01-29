import './App.css';
import Header from './components/Header';
import Aboutme from './components/challenges/day01/Aboutme';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  // this is a root component
  // parent function
  const name = 'Paul'; // JS above return statement can be
  // injected into JSX using { }

  return (
    <div className='App'>
      <Header /> {/* this is how you mount a component */}
      <Aboutme /> {/* child function */}
      <Home />
      <Footer />
    </div>
  );
}

export default App;
