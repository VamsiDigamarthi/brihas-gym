import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Plans from "./components/Plans";
import Programs from "./components/Programs";
import Reasons from "./components/Reasons";
import Testimonials from "./components/Testimonials";
function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
