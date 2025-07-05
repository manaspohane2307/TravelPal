import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Common Components
import Navbar from "./components/Navbar";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/SignUp";
import Home from "./components/Home";
import MyBlogsPage from "./pages/blogs/MyBlogsPage";
import Profile from "./components/Profile";
import TripPlanner from "./components/TripPlanner";
import TravelGuides from "./components/TravelGuides";
import Blogs from "./pages/blogs/Blogs";
import PlanPage from "./components/PlanPage";

// Blog Pages
import Blog1 from "./pages/blogs/Blog1";
import Blog2 from "./pages/blogs/Blog2";
import Blog3 from "./pages/blogs/Blog3";
import Blog4 from "./pages/blogs/Blog4";
import Blog5 from "./pages/blogs/Blog5";
import Blog6 from "./pages/blogs/Blog6";

// Destination Pages
import AbuDhabi from "./components/destinations/AbuDhabi";
import Austin from "./components/destinations/Austin";
import Bangkok from "./components/destinations/Bangkok";
import Barcelona from "./components/destinations/Barcelona";
import CaboSanLucas from "./components/destinations/CaboSanLucas";
import Cancum from "./components/destinations/Cancum";
import Como from "./components/destinations/Como";
import Dubai from "./components/destinations/Dubai";
import Goa from "./components/destinations/Goa";
import Hamburg from "./components/destinations/Hamburg";
import Ibiza from "./components/destinations/Ibiza";
import LasVegas from "./components/destinations/LasVegas";
import London from "./components/destinations/London";
import Madrid from "./components/destinations/Madrid";
import Marrakech from "./components/destinations/Marrakech";
import Maui from "./components/destinations/Maui";
import Miami from "./components/destinations/Miami";
import Milan from "./components/destinations/Milan";
import Minori from "./components/destinations/Minori";
import Moritz from "./components/destinations/Moritz";
import Munich from "./components/destinations/Munich";
import NewYork from "./components/destinations/NewYork";
import Paris from "./components/destinations/Paris";
import Reykjavik from "./components/destinations/Reykjavik";
import Riyadh from "./components/destinations/Riyadh";
import Rome from "./components/destinations/Rome";
import Sanya from "./components/destinations/Sanya";
import Sharjah from "./components/destinations/Sharjah";
import Tokyo from "./components/destinations/Tokyo";
import Tulum from "./components/destinations/Tulum";
import Venice from "./components/destinations/Venice";
import Vienna from "./components/destinations/Vienna";

// Maldives Quotations Page
import MaldivesQuotations from "./pages/quotations/MaldivesQuotations";

// Maldives Quotation Detail Cards
import MaldivesCard1 from "./components/cards/maldives/MaldivesCard1";
import MaldivesCard2 from "./components/cards/maldives/MaldivesCard2";
import MaldivesCard3 from "./components/cards/maldives/MaldivesCard3";
import MaldivesCard4 from "./components/cards/maldives/MaldivesCard4";
import MaldivesCard5 from "./components/cards/maldives/MaldivesCard5";

const AppRoutes = () => (
  <>
    <Navbar />
    <main style={{ paddingTop: "80px" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/hidden-gems-europe" element={<Blog1 />} />
        <Route path="/blogs/solo-travel-tips" element={<Blog2 />} />
        <Route path="/blogs/budget-travel-hacks" element={<Blog3 />} />
        <Route path="/blogs/top-food-destinations" element={<Blog4 />} />
        <Route path="/blogs/packing-tips" element={<Blog5 />} />
        <Route path="/blogs/beach-escapes" element={<Blog6 />} />
        <Route path="/my-blogs" element={<MyBlogsPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/travel-guides" element={<TravelGuides />} />
        <Route path="/trip-planner" element={<TripPlanner />} />
        <Route path="/plan" element={<PlanPage />} />

        {/* Maldives Quotation Main Page */}
        <Route path="/quotations/maldives" element={<MaldivesQuotations />} />

        {/* Maldives Card Pages */}
        <Route path="/quotations/maldives/card1" element={<MaldivesCard1 />} />
        <Route path="/quotations/maldives/card2" element={<MaldivesCard2 />} />
        <Route path="/quotations/maldives/card3" element={<MaldivesCard3 />} />
        <Route path="/quotations/maldives/card4" element={<MaldivesCard4 />} />
        <Route path="/quotations/maldives/card5" element={<MaldivesCard5 />} />
      </Routes>
    </main>
  </>
);

export default function App() {
  return (
    <AuthProvider>
      <AppRoutes />
      <ToastContainer position="top-center" autoClose={3000} />
    </AuthProvider>
  );
}
