import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TellUsYourPlans from "./components/TellUsYourPlans";
import HowItWorks from "./components/HowItWorks";
import ExploreTools from "./components/ExploreTools";
import ConclusionSection from "./components/ConclusionSection";
import Footer from "./components/Footer";
import TripPlanner from "./components/TripPlanner";
import TravelGuides from "./components/TravelGuides";
import Blogs from "./pages/blogs/Blogs"; // ✅ Corrected path for Blogs.jsx
import Blog1 from "./pages/blogs/Blog1.jsx";
import Blog2 from "./pages/blogs/Blog2.jsx";
import Blog3 from "./pages/blogs/Blog3.jsx";
import Blog4 from "./pages/blogs/Blog4.jsx";
import Blog5 from "./pages/blogs/Blog5.jsx";
import Blog6 from "./pages/blogs/Blog6.jsx";
import MyBlogs from "./pages/blogs/MyBlogs";
import Profile from "./components/Profile.jsx";


// Destination component imports (ensure all exist)
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

function App() {
  return (
    <div>
      <Navbar />
      <main style={{ paddingTop: "80px" }}>
        <Routes>
          {/* Homepage */}
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <TellUsYourPlans />
                <HowItWorks />
                <ExploreTools />
                <ConclusionSection />
                <Footer />
              </>
            }
          />

          {/* Trip Planner */}
          <Route path="/trip-planner" element={<TripPlanner />} />

          {/* Travel Guides Overview */}
          <Route path="/travel-guides" element={<TravelGuides />} />

          <Route path="/profile" element={<Profile />} />

          {/* Blogs Page */}
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/my-blogs" element={<MyBlogs />} />
          <Route path="/blogs/hidden-gems-europe" element={<Blog1 />} />
          <Route path="/blogs/solo-travel-tips" element={<Blog2 />} />
          <Route path="/blogs/budget-travel-hacks" element={<Blog3 />} />
          <Route path="/blogs/top-food-destinations" element={<Blog4 />} />
          <Route path="/blogs/packing-tips" element={<Blog5 />} />
          <Route path="/blogs/beach-escapes" element={<Blog6 />} />

          {/* Destination Pages */}
          <Route path="/abudhabi" element={<AbuDhabi />} />
          <Route path="/austin" element={<Austin />} />
          <Route path="/bangkok" element={<Bangkok />} />
          <Route path="/barcelona" element={<Barcelona />} />
          <Route path="/cabosanlucas" element={<CaboSanLucas />} />
          <Route path="/cancum" element={<Cancum />} />
          <Route path="/como" element={<Como />} />
          <Route path="/dubai" element={<Dubai />} />
          <Route path="/goa" element={<Goa />} />
          <Route path="/hamburg" element={<Hamburg />} />
          <Route path="/ibiza" element={<Ibiza />} />
          <Route path="/lasvegas" element={<LasVegas />} />
          <Route path="/london" element={<London />} />
          <Route path="/madrid" element={<Madrid />} />
          <Route path="/marrakech" element={<Marrakech />} />
          <Route path="/maui" element={<Maui />} />
          <Route path="/miami" element={<Miami />} />
          <Route path="/milan" element={<Milan />} />
          <Route path="/minori" element={<Minori />} />
          <Route path="/moritz" element={<Moritz />} />
          <Route path="/munich" element={<Munich />} />
          <Route path="/newyork" element={<NewYork />} />
          <Route path="/paris" element={<Paris />} />
          <Route path="/reykjavik" element={<Reykjavik />} />
          <Route path="/riyadh" element={<Riyadh />} />
          <Route path="/rome" element={<Rome />} />
          <Route path="/sanya" element={<Sanya />} />
          <Route path="/sharjah" element={<Sharjah />} />
          <Route path="/tokyo" element={<Tokyo />} />
          <Route path="/tulum" element={<Tulum />} />
          <Route path="/venice" element={<Venice />} />
          <Route path="/vienna" element={<Vienna />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
