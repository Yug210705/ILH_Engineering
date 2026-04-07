import { ChevronDown, Menu, X } from 'lucide-react';
import siteLogo from '../../assets/Logo.png';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS, VIEWS } from '../../constants';

export default function Navbar({ currentView, setCurrentView }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (view) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="w-full max-w-[1600px] mx-auto flex items-center justify-between px-4 sm:px-8 lg:px-12">
          {/* Logos side */}
          <div className="flex-1 flex items-center justify-start cursor-pointer transition-opacity hover:opacity-80" onClick={() => handleLinkClick(VIEWS.HOME)}>
            <img src={siteLogo} alt="ILH Engineering" className="h-[45px] sm:h-[55px] lg:h-[60px] w-auto object-contain" />
          </div>
          
          {/* Desktop Center Links */}
          <div className="hidden xl:flex shrink-0 items-center justify-center gap-1.5 lg:gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = (currentView === link.view || (currentView === VIEWS.CASE_STUDY && link.view === VIEWS.EXPERIENCE)) && link.name === 'Experience';
              return (
                <button 
                  key={link.name}
                  onClick={() => handleLinkClick(link.view)}
                  className={`flex items-center gap-1.5 transition-all px-4 lg:px-5 py-2.5 rounded-[12px] text-[13.5px] font-bold ${
                    isActive 
                    ? 'bg-[#e8f2ee] text-brand-green border border-[#d2efe2]' 
                    : 'bg-transparent hover:bg-gray-100/80 text-gray-800'
                  }`}
                >
                  {link.name} {link.hasDropdown && <ChevronDown size={14} strokeWidth={2.5} className={isActive ? 'text-brand-green/60' : 'text-gray-400'} />}
                </button>
              );
            })}
          </div>

          {/* Desktop Action side */}
          <div className="flex-1 hidden md:flex items-center justify-end gap-4">
            <button className="bg-brand-green hover:bg-[#328b58] text-white px-7 py-[11px] rounded-[12px] text-[13.5px] font-[800] transition-all duration-300 shadow-lg shadow-brand-green/20">
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="xl:hidden flex items-center justify-end">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-800 bg-gray-100 rounded-lg"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[90] bg-white pt-24 px-6 flex flex-col gap-6"
          >
            {NAV_LINKS.map((link) => (
              <button 
                key={link.name}
                onClick={() => handleLinkClick(link.view)}
                className="flex items-center justify-between w-full p-4 border-b border-gray-50 text-[18px] font-bold text-gray-800 text-left"
              >
                {link.name} {link.hasDropdown && <ChevronDown size={20} />}
              </button>
            ))}
            <div className="mt-auto pb-12 flex flex-col gap-4">
              <button className="w-full bg-brand-green text-white py-4 rounded-xl font-bold text-[18px]">
                Contact Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Spacer to prevent content from jumping under fixed nav */}
      <div className="h-[70px] sm:h-[90px]"></div>
    </>
  );
}
