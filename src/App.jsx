import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/landing/LandingPage";
import MainPage from "./pages/mainPage/MainPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path="/landing" element={<LandingPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
