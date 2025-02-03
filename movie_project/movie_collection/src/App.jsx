import "./css/App.css";
import Favorites from "./pages/Favorites";
import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar";
import { MovieProvider } from "./context/movieContext";

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;