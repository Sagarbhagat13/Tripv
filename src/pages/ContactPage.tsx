import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactCards from '@/components/contact/ContactCards';
import ContactSection from '@/components/contact/ContactSection';
import FaqSection from '@/components/contact/FaqSection';
import MinimalHero from '@/components/MinimalHero';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />
      
      <main className="flex-grow">
        <MinimalHero title="Get in Touch" />
        
        {/* Contact Cards */}
        <ContactCards />
        
        {/* Contact Form & Map */}
        <ContactSection />
        
        {/* FAQ Section */}
        <FaqSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
