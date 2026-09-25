import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./navbar";
import Sidebar from "./Sidebar";

import Home from "./Pages/Home";
import Resume from "./Pages/Resume";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import TeamDetails from "./Pages/TeamDetails";
import Multiple from "./Pages/Multiple";
import RickyAndMorty from "./Pages/rickyandmorty";
import CharacterDetails from "./Pages/CharacterDetails";


import "./App.css";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Sidebar />

      <main className="main-content">
        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/home" element={<Home />} />

          <Route path="/resume" element={<Resume />} />

          <Route path="/projects" element={<Projects />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/team/:id" element={<TeamDetails />} />

          <Route path="/multiple" element={<Multiple />}/>

          <Route path="/rickyandmorty" element={<RickyAndMorty />}/>

          <Route path="/rickyandmorty/:id" element={<CharacterDetails />}/>

        </Routes>
      </main>

    </BrowserRouter>
  );
}

export default App;