import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import TestimonialsSection from './components/TestimonialsSection';
import PainPointsSection from './components/PainPointsSection';
import SolutionSection from './components/SolutionSection';
import PackageSection from './components/PackageSection';
import AudienceSection from './components/AudienceSection';
import PricingSection from './components/PricingSection';
import ObjectionsSection from './components/ObjectionsSection';
import AuthoritySection from './components/AuthoritySection';
import FaqSection from './components/FaqSection';
import FooterSection from './components/FooterSection';

function App() {
  React.useEffect(() => {
    // Update page title
    document.title = "Revita Hair - Suplemento para Crescimento Capilar";
    
    // Add smooth scrolling behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const href = this.getAttribute('href');
        if (href) {
          const targetElement = document.querySelector(href);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
              behavior: 'smooth'
            });
          }
        }
      });
    });

    // Add scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, {
      root: null,
      threshold: 0.1,
    });

    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function () {});
      });
      
      document.querySelectorAll('section').forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="font-sans">
      <style jsx="true">{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease forwards;
        }
        
        section {
          opacity: 0;
        }
      `}</style>
      
      <Header />
      <HeroSection />
      <TestimonialsSection />
      <PainPointsSection />
      <SolutionSection />
      <PackageSection />
      <AudienceSection />
      <PricingSection />
      <ObjectionsSection />
      <AuthoritySection />
      <FaqSection />
      <FooterSection />
    </div>
  );
}

export default App;