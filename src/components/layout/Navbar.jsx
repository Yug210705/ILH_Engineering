import { ChevronDown, Menu, X } from 'lucide-react';
import siteLogo from '../../assets/logo.webp';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS, VIEWS } from '../../constants';

export default function Navbar({ currentView, setCurrentView }) {
  const CAPABILITIES_DROPDOWN = [
    {
      name: 'Data Center & Mission-Critical Infrastructure',
      view: VIEWS.DATA_CENTER,
    },
    {
      name: 'Electrical Power Systems',
      view: VIEWS.CAPABILITIES,
    },
    {
      name: 'Connectivity & Network Resilience',
      view: VIEWS.CONNECTIVITY,
    },
    {
      name: 'Life Safety & Security Systems',
      view: VIEWS.SAFETY,
    },
    {
      name: 'Project Management for Critical Deployments',
      view: VIEWS.PROJECT_MANAGEMENT,
    },
  ];
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [capDropOpen, setCapDropOpen] = useState(false);
  const [mobileCapOpen, setMobileCapOpen] = useState(false);
  const dropdownRef = useRef(null);
  const hoverTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(hoverTimeoutRef.current);
    setCapDropOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setCapDropOpen(false);
    }, 100);
  };

  const handleLinkClick = (view) => {
    if (!view) return;
    setCurrentView(view);
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
    setCapDropOpen(false);
    setMobileCapOpen(false);
  };

  const isCapabilitiesActive =
    currentView === VIEWS.DATA_CENTER || currentView === VIEWS.CAPABILITIES;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="w-full max-w-[1600px] mx-auto flex items-center justify-between px-4 sm:px-8 lg:px-12">
          {/* Logo */}
          <div
            className="flex-1 flex items-center justify-start cursor-pointer transition-opacity hover:opacity-80"
            onClick={() => handleLinkClick(VIEWS.HOME)}
          >
            <img
              src={siteLogo}
              alt="ILH Engineering"
              className="h-[45px] sm:h-[55px] lg:h-[60px] w-auto object-contain"
            />
          </div>

          {/* Desktop Center Links */}
          <div className="hidden xl:flex shrink-0 items-center justify-center gap-1.5 lg:gap-2">
            {NAV_LINKS.map((link) => {
              const isActive =
                (currentView === link.view ||
                  (currentView === VIEWS.CASE_STUDY && link.view === VIEWS.EXPERIENCE)) &&
                link.name === 'Experience';

              if (link.name === 'Capabilities') {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    ref={dropdownRef}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      className={`flex items-center gap-1.5 cursor-pointer transition-all px-4 lg:px-5 py-2.5 rounded-[12px] text-[13.5px] font-semibold ${
                        isCapabilitiesActive || capDropOpen
                          ? 'bg-[#e8f2ee] text-brand-green border border-[#d2efe2]'
                          : 'bg-transparent hover:bg-gray-100/80 text-gray-800'
                      }`}
                    >
                      {link.name}
                      <ChevronDown
                        size={14}
                        strokeWidth={2.5}
                        className={`transition-transform duration-200 ${
                          capDropOpen ? 'rotate-180' : ''
                        } ${isCapabilitiesActive || capDropOpen ? 'text-brand-green/60' : 'text-gray-400'}`}
                      />
                    </button>

                    <AnimatePresence>
                      {capDropOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.97 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[320px] bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-[200]"
                        >
                          {CAPABILITIES_DROPDOWN.map((item, i) => (
                            <button
                              key={i}
                              onClick={() => handleLinkClick(item.view)}
                              className={`w-full text-left px-5 py-3.5 text-[13px] font-semibold transition-colors border-b border-gray-50 last:border-0 flex items-center justify-between group
                                ${item.view
                                  ? 'text-gray-800 hover:bg-[#e8f2ee] hover:text-brand-green cursor-pointer'
                                  : 'text-gray-400 cursor-not-allowed'
                                }
                                ${
                                  (item.view === VIEWS.DATA_CENTER && currentView === VIEWS.DATA_CENTER) ||
                                  (item.view === VIEWS.CAPABILITIES && currentView === VIEWS.CAPABILITIES)
                                    ? 'bg-[#e8f2ee] text-brand-green'
                                    : ''
                                }
                              `}
                            >
                              {item.name}
                              {!item.view && (
                                <span className="text-[10px] font-normal text-gray-300 ml-2 shrink-0">
                                  Coming soon
                                </span>
                              )}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.view)}
                  className={`flex items-center gap-1.5 cursor-pointer transition-all px-4 lg:px-5 py-2.5 rounded-[12px] text-[13.5px] font-semibold ${
                    isActive
                      ? 'bg-[#e8f2ee] text-brand-green border border-[#d2efe2]'
                      : 'bg-transparent hover:bg-gray-100/80 text-gray-800'
                  }`}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <ChevronDown
                      size={14}
                      strokeWidth={2.5}
                      className={isActive ? 'text-brand-green/60' : 'text-gray-400'}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="flex-1 hidden md:flex items-center justify-end gap-4">
            <button className="cursor-pointer bg-brand-green hover:bg-[#328b58] text-white px-7 py-[11px] rounded-[12px] text-[13.5px] font-[600] transition-all duration-300 shadow-lg shadow-brand-green/20">
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="xl:hidden flex items-center justify-end">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 cursor-pointer text-gray-800 bg-gray-100 rounded-lg"
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
            className="fixed inset-0 z-[90] bg-white pt-24 px-6 flex flex-col gap-2 overflow-y-auto"
          >
            {NAV_LINKS.map((link) => {
              if (link.name === 'Capabilities') {
                return (
                  <div key={link.name}>
                    <button
                      onClick={() => setMobileCapOpen((prev) => !prev)}
                      className="flex items-center justify-between w-full p-4 border-b border-gray-100 text-[18px] font-semibold text-gray-800 cursor-pointer"
                    >
                      {link.name}
                      <ChevronDown
                        size={20}
                        className={`transition-transform duration-200 ${mobileCapOpen ? 'rotate-180' : ''}`}
                      />
                    </button>

                    <AnimatePresence>
                      {mobileCapOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden bg-gray-50 rounded-xl mb-2"
                        >
                          {CAPABILITIES_DROPDOWN.map((item, i) => (
                            <button
                              key={i}
                              onClick={() => handleLinkClick(item.view)}
                              className={`w-full text-left px-5 py-3.5 text-[14px] font-semibold border-b border-gray-100 last:border-0 flex items-center justify-between
                                ${item.view
                                  ? 'text-gray-700 active:bg-[#e8f2ee] cursor-pointer'
                                  : 'text-gray-400 cursor-not-allowed'
                                }`}
                            >
                              {item.name}
                              {!item.view && (
                                <span className="text-[10px] font-normal text-gray-300 ml-2 shrink-0">
                                  Soon
                                </span>
                              )}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.view)}
                  className="flex items-center justify-between w-full p-4 border-b border-gray-50 text-[18px] font-semibold text-gray-800 text-left cursor-pointer"
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown size={20} />}
                </button>
              );
            })}

            <div className="mt-auto pb-12 flex flex-col gap-4">
              <button className="w-full cursor-pointer bg-brand-green text-white py-4 rounded-xl font-semibold text-[18px]">
                Contact Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer */}
      <div className="h-[70px] sm:h-[90px]"></div>
    </>
  );
}
