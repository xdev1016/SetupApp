import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Journey from './components/Journey/Journey';
import Testimonial from './components/Testimonial/Testimonial';
import Reviews from './components/Reviews/Reviews';
import CtaFooter from './components/CtaFooter/CtaFooter';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#26262B]">
      <Navbar />
      <Hero />
      <Features />
      <Journey />
      <Testimonial />
      <Reviews />
      <CtaFooter />
      <Footer />
    </div>
  );
}

export default App;
