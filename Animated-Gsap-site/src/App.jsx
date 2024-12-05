import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SignIn from "./components/SignIn"; // Import the SignIn component
import SignUp from "./components/SignUp";
import ArtistDashboard from './components/artistDashboard';
import AdminDashboard from './components/adminDashboard';
import VisitorDashboard from './components/visitorDashboard';
import CuratorDashboard from './components/curatorDashboard';

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
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
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/artistDashboard" element={<ArtistDashboard/>} />
        <Route path="/adminDashboard" element={<AdminDashboard />} />
        <Route path="/visitorDashboard" element={<VisitorDashboard />} />
        <Route path="/curatorDashboard" element={<CuratorDashboard />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </main>
  );
}

export default App;
