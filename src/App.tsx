import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { Home } from "./pages/home";
import Membership from "./pages/membership-page";
import Footer from "./components/Footer/Footer";
import SignInPage from "./pages/signin-page";

function App() {
  return (
    <>
      
      <Routes>
        <Route
          path="/"
          element={
            <>
            <NavBar />
            <Home />
            <Footer />
            </>
          }
        />
        <Route
          path="/Membership"
          element={
            <>
            <NavBar />
            <Membership />
            <Footer />
            </>
          }
        />

        <Route
          path="/signin-page"
          element={
            <>
              <SignInPage />
            </>
          }
        />
      </Routes>
      
    </>
  );
}

export default App;
