import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home";
import Membership from "./pages/membership-page";
import SignInPage from "./pages/signin-page";
import Search from "./components/NavBar/SearchButton";
import { Signup } from "./components/Authentication/Signup";
import Layout from "./components/Outlet/Outlet";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Membership" element={<Membership />} />
        </Route>

        <Route path="/signin-page" element={<SignInPage />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/search" element={<Search />} />
        <Route
          path="*"
          element={<div className="text-[20px] text-center">404 Not Found</div>}
        />
      </Routes>
    </>
  );
}

export default App;
