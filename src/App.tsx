import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { Home } from "./pages/home";
import Membership from "./components/Membership/membership-page";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        />
        <Route
          path="/Membership"
          element={
            <>
              <Membership />
            </>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
