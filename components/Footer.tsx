import React from 'react';

const Footer: React.FC = () => {
  const handleNotImplemented = (e: React.MouseEvent) => {
    e.preventDefault();
    alert("Call on 9373768026, and make it yours");
  };

  return (
    <footer className="bg-black px-6 py-24 text-white">
      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="flex flex-col gap-8">
            <h2 className="text-6xl md:text-8xl font-display font-bold uppercase tracking-tighter">
              CRAFT <br />YOUR <span className="text-sanctum-orange">BODY</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-12 md:gap-24 text-sm tracking-widest uppercase text-white/60">
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-bold">Connect</h4>
              <a href="#" onClick={handleNotImplemented} className="hover:text-sanctum-orange transition-colors">Instagram</a>
              <a href="#" onClick={handleNotImplemented} className="hover:text-sanctum-orange transition-colors">Facebook</a>
              <a href="#" onClick={handleNotImplemented} className="hover:text-sanctum-orange transition-colors">JustDial</a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-bold">Gym</h4>
              <a href="#" onClick={handleNotImplemented} className="hover:text-sanctum-orange transition-colors">Location</a>
              <a href="#" onClick={handleNotImplemented} className="hover:text-sanctum-orange transition-colors">Classes</a>
              <a href="#" onClick={handleNotImplemented} className="hover:text-sanctum-orange transition-colors">Join</a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-white/30 uppercase tracking-widest">
            © 2024 VFC Crafting Fitness Club. All rights reserved.
          </p>
          <p className="text-xs text-white/30 uppercase tracking-widest">
            Nanded, Maharashtra
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;