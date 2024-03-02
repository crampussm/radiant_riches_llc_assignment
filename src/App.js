import './App.css';
import Deals from './components/Deals';
import Footer from './components/Footer';
import Items from './components/Items';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Top from './components/Top';

function App() {
  return (
    <>
      <Navbar/>
      <Top/>
      <Items/>
      <Deals/>
      <Signup/>
      <Footer/>
    </>
  );
}

export default App;
