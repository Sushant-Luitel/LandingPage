import Footer from "../Footer/Footer";
import Membership from "../Membership/Membership";
import NavBar from "../NavBar/NavBar";
import { Routes, Route } from "react-router-dom";
function LandingPage() {
  return (
    <>
      
        <NavBar />
        <Routes>
        <Route path="/Membership" element={<><Membership /></>} />
        </Routes>
        <Footer />
     
    </>
  );
}

export default LandingPage;
