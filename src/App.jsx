import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
