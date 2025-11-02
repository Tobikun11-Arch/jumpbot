import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WhyBlockchain from './components/WhyBlockchain';
import WhyBlockchainMatters from './components/WhyBlockchainMatters';
import HowItWorks from './components/HowItWorks';
import PricingPlans from './components/PricingPlans';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <HeroSection />
      <WhyBlockchain />
      <WhyBlockchainMatters />
      <PricingPlans />
      <HowItWorks />
      <Footer />
    </div>
  );
}
