import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Packages from './components/Packages';
import Gallery from './components/Gallery';
import Stats from './components/Stats';
import Team from './components/Team';
import Testimonial from './components/Testimonial';
import Booking from './components/Booking';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
    { isLoading && <Preloader onComplete= {() => setIsLoading(false)
} />}

{/* 
        We render the main content even while loading so it's ready behind the 
        preloader, but we enforce the background color.
      */}
<div className="bg-background-light text-primary font-body antialiased selection:bg-primary selection:text-white" >
  <Navbar />
  < Hero />
  <Services />
  < Packages />
  <Gallery />
  < Stats />
  <Team />
  < Testimonial />
  <Booking />
  < Footer />
  </div>
  </>
  );
}

export default App;
