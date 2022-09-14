import "./App.css";
import { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import YouTubePlayer from "./Components/YouTubePlayer";
import HomePage from "./Pages/homePage";
import ErrorPage from "./Pages/errorPage";
import Category from "./Pages/category";
import Recipe from "./Pages/recipe";

// export const CounterContext = createContext(0);

function App() {
  const [state, setState] = useState(0);

  return (
    // <CounterContext.Provider value={{ state, setState }}>
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalogo" element={<HomePage />} />

          <Route path="/catalogo/:categoryName">
            <Route index element={<Category />} />

            <Route path=":recipeName/:id" element={<Recipe />}>
              <Route path="" element={"Sei nella index della ricetta"} />
              <Route path="youtube" element={<YouTubePlayer />} />
            </Route>
          </Route>

          <Route
            path="/catalogo/:categoryName/new"
            element={<ErrorPage status={500} />}
          />
          <Route path="*" element={<ErrorPage name="prova" status={404} />} />
        </Routes>
      </Router>
    </div>
    // </CounterContext.Provider>
  );
}

export default App;
