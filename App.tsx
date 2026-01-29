import React from 'react';
import { Hero } from './components/Hero';
import { FilterSection } from './components/FilterSection';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { ContentSection } from './components/ContentSection';
import { AuthoritySection } from './components/AuthoritySection';
import { OfferSection } from './components/OfferSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <main className="bg-deepBlack min-h-screen text-gray-200 antialiased selection:bg-fireRed selection:text-white">
      <Hero />
      <FilterSection />
      <ProblemSection />
      <SolutionSection />
      <ContentSection />
      <AuthoritySection />
      <OfferSection />
      <Footer />
    </main>
  );
}

export default App;