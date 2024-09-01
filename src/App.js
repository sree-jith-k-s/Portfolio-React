import About from "./Components/About";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Timeline from "./Components/Timeline";
import Achievements from "./Components/Achievements";
import Connect from "./Components/Connect";


function App() {
  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      <Navbar />
      <Home />
      <About />
      <Skills/>
      <Timeline/>
      <Projects />
      <Achievements/>
      <Connect/>
      <Footer />
    </div>
  );
}

export default App;