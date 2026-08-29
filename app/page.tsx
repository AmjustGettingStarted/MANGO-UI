import Navbar from '@/components/landing/navbar';
import Hero from '@/components/landing/hero';
import Stats from '@/components/landing/stats';
import Features from '@/components/landing/features';
import AnimatedBento from '@/components/landing/animated-bento';
import { Metadata } from 'next';
import ComponentsBento from '@/components/landing/component-bento';
import TemplateBento from '@/components/landing/template-bento';
import Testimonial from '@/components/landing/testimonial';
import Footer from '@/components/landing/footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'MANGO UI',
};

export default function App() {
  return (
    <main className="dark min-h-screen overflow-x-hidden bg-[#101010]">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <AnimatedBento />
      <ComponentsBento />
      <TemplateBento />
      <Testimonial />
      <Footer />
    </main>
  );
}
