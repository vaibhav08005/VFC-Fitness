import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import Disciplines from './components/Disciplines';
import AICoach from './components/AICoach';
import Footer from './components/Footer';

function App() {
  return (
    <main className="bg-sanctum-black min-h-screen w-full relative">
      <div className="fixed inset-0 pointer-events-none bg-noise opacity-[0.03] z-[100]" />
      
      <Header />
      <Hero />
      <Manifesto />
      <Disciplines />
      
      {/* Locations / Membership Section - Updated for VFC */}
      <section id="locations" className="min-h-screen bg-white text-black flex items-center justify-center relative overflow-hidden">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <span className="text-sanctum-orange font-bold tracking-widest text-sm uppercase mb-4 block">Visit Us</span>
            <h2 className="text-6xl md:text-8xl font-display font-bold uppercase leading-none mb-8">
              VFC<br/>HQ
            </h2>
            <div className="flex flex-col gap-6 mb-8">
                <div>
                    <h4 className="text-xl font-bold uppercase mb-2">Location</h4>
                    <p className="text-lg font-medium text-black/70">
                    Opp. Kisan Mall, Shivaji Nagar,<br/>
                    Nanded, Maharashtra
                    </p>
                </div>
                <div>
                    <h4 className="text-xl font-bold uppercase mb-2">Hours</h4>
                    <p className="text-lg font-medium text-black/70">
                    Mon - Sat: 5:30 AM - 10:00 PM<br/>
                    Sun: 5:00 PM - 9:00 PM
                    </p>
                </div>
            </div>
            
            <button 
              onClick={() => alert("Will update for you")}
              className="border-2 border-black px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300"
            >
              Get Directions
            </button>
          </div>
          <div className="order-1 md:order-2 h-[600px] bg-black w-full overflow-hidden relative group">
             <img 
              src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069&auto=format&fit=crop" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90"
              alt="VFC Gym Interior"
             />
             <div className="absolute bottom-4 left-4 bg-white/90 px-4 py-2">
                 <span className="text-xs font-bold uppercase tracking-widest text-black">Shivaji Nagar, Nanded</span>
             </div>
          </div>
        </div>
      </section>

      <Footer />
      <AICoach />
    </main>
  );
}

export default App;