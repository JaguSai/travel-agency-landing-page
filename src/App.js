import './App.scss';
import Trip from './Components/Trip';
import Clients from './Components/Clients';
import Destinations from './Components/Destinations';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Services from './Components/Services';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Destinations />
      <Trip />
      <Clients />
      <Footer />
    </>
  );
}

export default App;
