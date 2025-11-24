import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { About } from './components/About';
import { Needs } from './components/Needs';
import { Solutions } from './components/Solutions';
import { Networking } from './components/Networking';
import { Consultancy } from './components/Consultancy';
import { WhoWeAre } from './components/WhoWeAre';
import { Contact } from './components/Contact';

function App() {
  return (
    <main className="bg-[#050505] min-h-screen text-white selection:bg-purple-500 selection:text-white">
      <div className="bg-noise" />
      <div className="h-screen flex flex-col">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Needs />
      <Solutions />
      <Networking />
      <Consultancy />
      <WhoWeAre />
      <Contact />
    </main>
  );
}

export default App;
