import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experience from './components/experiences/Experience';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Portfolio from './components/portfolio/Portfolio'
import Services from './components/services/Services';
import Testimonials from './components/testimonials/Testimonials';

function App() {
return (
    <>
      <Header/>
      <Nav />
      <About />
      <Experience/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
      </>
  );
}

export default App;
