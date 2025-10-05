import Hero from "./components/Hero";
import About from "./components/About";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <About />
      <Hero />
    </main>
  );
};
export default App;
