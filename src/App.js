import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Hero from "./sections/Hero";
import Partners from "./sections/Partners";
import Support from "./sections/Support";
import Tokenomics from "./sections/Tokenomics";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Tokenomics />
      <Partners />
      <Support />
      <Footer />
    </div>
  );
}

export default App;
