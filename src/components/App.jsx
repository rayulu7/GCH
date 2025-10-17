import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import HeroSection from "./HeroSection.jsx";
import WhyGCHSection from "./WhyGCHSection.jsx";
import Installations from "./Installations.jsx";
import HomeServicesSection from "./HomeServicesSection.jsx";
import Clients from "./Clients.jsx";
import Team from "./Team.jsx";
import Board from "./Board.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";
import Expertsewage from "./Wwmanagement/Expertsewage.jsx";
import ServicesSection from "./Wwmanagement/Servicesection.jsx";
import Effluenttreatment from "./Wwmanagement/Effluenttreatment.jsx";
import TechnologiesSection from "./Wwmanagement/TechnologiesSection.jsx";
import BenefitsSection from "./Wwmanagement/BenefitsSection.jsx";
import WWHeroSection from "./Wwmanagement/WWMHeroSection.jsx";
import SolarInstallation from "./Solar/SolarInstallation.jsx";
import Residential from "./Solar/Residential.jsx";
import HousingSociety from "./Solar/HousingSociety.jsx";
import IndustrialCommercial from "./Solar/IndustrialCommercial.jsx";
import AboutUs from "./AboutUs.jsx";
import LoadingScreen from "./LoadingScreen.jsx";
import Maintenance from "./Maintenance.jsx";
import Investments from "./Investments.jsx";
import GCHStore from "./GCHStore.jsx";
import WhyChooseGCH from "./Solar/WhyChooseGCH.jsx";
import OurClients from "./Solar/OurClients.jsx";
import FloatingActionButtons from "./FloatingActionButtons.jsx";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import ForgotPassword from "./ForgotPassword.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import { AuthProvider } from "../contexts/AuthContext.jsx";


// ScrollToTop Component - Scrolls to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Layout Component with Navbar and Footer
function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <Navbar />
      <div className="pt-20">
        {children}
      </div>
      <Footer />
    </div>
  );
}

// Home Page Component
function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <WhyGCHSection />
      <Installations />
      <HomeServicesSection />
      <Clients />
      <Team />
      <Board />
      <Contact />
    </Layout>
  );
}

// Solar Installation Page
function SolarInstallationPage() {
  return (
    <Layout>
      <SolarInstallation />
    </Layout>
  );
}

// Residential Page
function ResidentialPage() {
  return (
    <Layout>
      <Residential />
    </Layout>
  );
}

// Housing Society Page
function HousingSocietyPage() {
  return (
    <Layout>
      <HousingSociety />
    </Layout>
  );
}

// Industrial Commercial Page
function IndustrialCommercialPage() {
  return (
    <Layout>
      <IndustrialCommercial />
    </Layout>
  );
}

// Water Management Page
function WaterManagementPage() {
  return (
    <Layout>
      <WWHeroSection />
      <Expertsewage />
      <ServicesSection />
      <Effluenttreatment />
      <TechnologiesSection />
      <BenefitsSection />
      <WhyGCHSection />
      <OurClients />
    </Layout>
  );
}

// About Us Page
function AboutUsPage() {
  return (
    <Layout>
      <AboutUs />
    </Layout>
  );
}

// Maintenance Page
function MaintenancePage() {
  return (
    <Layout>
      <Maintenance />
    </Layout>
  );
}

// Investments Page
function InvestmentsPage() {
  return (
    <Layout>
      <Investments />
    </Layout>
  );
}

// GCH Store Page
function GCHStorePage() {
  return (
    <Layout>
      <GCHStore />
    </Layout>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show loading screen for 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/solar-installation" element={<SolarInstallationPage />} />
          <Route path="/water-management" element={<WaterManagementPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/residential" element={<ResidentialPage />} />
          <Route path="/housing-society" element={<HousingSocietyPage />} />
          <Route path="/industrial-commercial" element={<IndustrialCommercialPage />} />
          <Route path="/maintenance" element={<MaintenancePage />} />
          <Route path="/investments" element={<InvestmentsPage />} />
          <Route path="/gch-store" element={<GCHStorePage />} />
          <Route path="/login" element={
            <ProtectedRoute>
              <Login />
            </ProtectedRoute>
          } />
          <Route path="/signup" element={
            <ProtectedRoute>
              <Signup />
            </ProtectedRoute>
          } />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
        <FloatingActionButtons />
      </Router>
    </AuthProvider>
  );
}

export default App;
