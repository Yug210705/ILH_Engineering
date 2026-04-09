/**
 * Navigation configuration for the site.
 * Centralized here to keep Navbar and App in sync.
 */

export const VIEWS = {
  HOME: 'home',
  EXPERIENCE: 'experience',
  CASE_STUDY: 'caseStudy',
  CAPABILITIES: 'capabilities',
  DATA_CENTER: 'dataCenter',
  CONNECTIVITY: 'connectivity',
  SAFETY: 'safety',
  PROJECT_MANAGEMENT: 'projectManagement',
};

export const NAV_LINKS = [
  { 
    name: 'Capabilities', 
    hasDropdown: true, 
    view: VIEWS.CAPABILITIES,
    dropdownItems: [
      { name: 'Data Center & Mission-Critical Infrastructure', view: VIEWS.DATA_CENTER },
      { name: 'Electrical Power Systems', view: VIEWS.CAPABILITIES },
      { name: 'Connectivity & Network Resilience', view: null },
      { name: 'Life Safety & Security Systems', view: null },
      { name: 'Project Management for Critical Deployments', view: null },
    ]
  },
  { name: 'Experience', hasDropdown: false, view: VIEWS.EXPERIENCE },
  { name: 'The Firm', hasDropdown: true, view: VIEWS.HOME },
  { name: 'Geographic Coverage', hasDropdown: true, view: VIEWS.HOME },
];
