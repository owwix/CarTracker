import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="bg-gray-800 min-h-screen text-white">
      <Router>
        <NavBar />
      </Router>
    </div>

  );
}

export default App;
