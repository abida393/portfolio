import Header from "./components/1-header/Header";
import Hero from "./components/2-hero/Hero";
import MainContent from "./components/3-mainContent/MainContent";
import Contact from "./components/4-contact/Contact";
import Footer from "./components/5-footer/Footer";
import "./index.css";

function App() {
  return (
    <div className="container"> 
      <Header />
      <hr />
      <Hero />
      <hr />
      <MainContent />
      <hr />
      <Contact />
      <hr />
      <Footer/>
    </div>
  );
}

export default App; 
