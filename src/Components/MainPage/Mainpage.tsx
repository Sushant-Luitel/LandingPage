import Footer from "../Footer/Footer";
import { Home } from "../Home/Home";
import Membership from "../Membership/Membership";
import NavBar from "../NavBar/NavBar";
import { Routes, Route } from "react-router-dom";
function LandingPage() {
  return (
    <>
      
        <NavBar />
        <Routes>
        <Route path="/" element={<><Home /></>} />
        </Routes>
        <Routes>
        <Route path="/Membership" element={<><Membership /></>} />
        </Routes>
        <Footer />
     
    </>
  );
}

export default LandingPage;
