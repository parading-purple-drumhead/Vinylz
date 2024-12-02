import "./App.css";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import ServiceModels from "./components/ServiceModels";

function App() {
  return (
    <div className="app">
      <header>
        <Navbar />
      </header>
      <main>
        <Landing />
        <ServiceModels />
      </main>
    </div>
  );
}

export default App;
