"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);

  const openContact = () => setContactOpen(true);
  const closeContact = () => setContactOpen(false);

  return (
    <>
      <Header onOpenContact={openContact} />
      <main>
        <Hero onOpenContact={openContact} />
        <Services onOpenContact={openContact} />
        <Gallery />
        <About />
        <Testimonials />
        <Contact onOpenContact={openContact} />
      </main>
      <Footer />
      <ContactModal open={contactOpen} onClose={closeContact} />
      <FloatingCTA onOpenContact={openContact} />
    </>
  );
}
