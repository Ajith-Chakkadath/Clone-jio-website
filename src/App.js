import logo from './logo.svg';
import './App.css';
import Navbar from './pages/navbar/Navbar';
import Hero from './pages/hero/Hero';
import Menubar from './pages/menubar/Menubar';
import Footer from './pages/Footer/footer';
import Guide from './pages/guide/guide';
import Sectionfirst from './pages/sectionOne/sectionfirst';
import Digital from './pages/sectiontwo/Digital';
import Videobar from './pages/videoBar/Videobar';
import Grow from './pages/grow/Grow';
import Maker from './pages/makeDifferenc/Maker';
import Card from './pages/card/Card';
import Lern from './pages/lerarn/lern';
import Productheading from './pages/product/Productheading';
import Productcard from './pages/product/Productcard';
import Spolite from './pages/spotlite/spolite';

function App() {
  return (
    <div className="App">
   <Navbar />
   <Hero />
   <Menubar />
   <Sectionfirst />
   <Digital />
   <Videobar />
   <Spolite />
   <Productheading />
   <Productcard />
   <Lern />
   <Maker />
   <Card />
   <Grow />
   <Guide />
   <Footer />
    </div>
  );
}

export default App;
