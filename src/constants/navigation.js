/**
 * Navigation configuration for the site.
 * Centralized here to keep Navbar and App in sync.
 */

export const NAV_LINKS = [
  { name: 'Capabilities', hasDropdown: true, view: 'capabilities' },
  { name: 'Experience', hasDropdown: false, view: 'experience' },
  { name: 'The Firm', hasDropdown: true, view: 'home' },
  { name: 'Geographic Coverage', hasDropdown: true, view: 'home' },
];

export const VIEWS = {
  HOME: 'home',
  EXPERIENCE: 'experience',
  CASE_STUDY: 'caseStudy',
  CAPABILITIES: 'capabilities',
};
