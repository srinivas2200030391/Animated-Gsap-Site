import { Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Features";
import Story from "../components/Story";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import ArtistDashboard from "../components/ArtistDashboard";
import AdminDashboard from "../components/AdminDashboard";
import VisitorDashboard from "../components/VisitorDashboard";
import CuratorDashboard from "../components/CuratorDashboard";

export default function index({
  onAdminLogin,
  onArtistLogin,
  onCuratorLogin,
  onVisitorLogin,
}) {
  return (
    <div>
      <Routes>
        {/* Define the main route */}
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <Hero />
              <About />
              <Features />
              <Story />
              <Contact />
              <Footer />
            </>
          }
        />
        {/* Define the sign-in route */}
        <Route
          path="/signin"
          element={
            <SignIn
                  onAdminLogin={onAdminLogin}
                  onArtistLogin={onArtistLogin}
                  onCuratorLogin={onCuratorLogin}
                  onVisitorLogin={onVisitorLogin}
            />
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/artistDashboard" element={<ArtistDashboard />} />
        <Route path="/adminDashboard" element={<AdminDashboard />} />
        <Route path="/visitorDashboard" element={<VisitorDashboard />} />
        <Route path="/curatorDashboard" element={<CuratorDashboard />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  );
}
