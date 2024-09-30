import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Achievemets from "./components/Achievemets";
import Projects from "./components/Projects";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/achievements" element={<Achievemets />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

// App.js
// import React from "react";
// import "./App.css"; // Your existing CSS file
// import ParticlesBackground from "./components/ParticlesBackground.js"; // Path to your particle component

// function App() {
//   return (
//     <div className="app">
//       {/* Particle background effect */}
//       <ParticlesBackground />

//       {/* Main Content */}
//       <header className="header">
//         <h1>My Personal Website</h1>
//       </header>

//       {/* Other content and pages */}
//       <Router>
//         <div className="App">
//           <Navbar />
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/achievements" element={<Achievemets />} />
//             <Route path="/projects" element={<Projects />} />
//           </Routes>
//         </div>
//       </Router>
//     </div>
//   );
// }

// export default App;
