import "./App.css";
import Nav from "./Component/Nav/Nav";
import Hero from "./Component/Hero/Hero";
import Faculty from "./Component/Faculty/Faculty";
import Service from "./Component/Service/Service";
import Program from "./Component/Programs/Program";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Service />
      <Program />
      <Faculty />
    </>
  );
}

export default App;
