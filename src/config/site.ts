/**
 * Everything personal lives here and in src/data/content.ts.
 * Anything in [square brackets] is still a placeholder: replace it before going live.
 */

export const site = {
  /**
   * While false the site tells search engines not to index it, so unfinished copy can never be
   * found by accident. Flip to true when you are ready to publish.
   */
  live: false,

  /** Full name as it appears in the header, footer, metadata and contact section. */
  name: 'Aathii Rakurakavan',
  /** Big hero word. Keep it to one or two short words so it fits on a phone. */
  heroName: 'Aathii',
  /** Two letters for the header mark and the favicon. */
  initials: 'AR',
  role: 'Developer & Designer',
  /** One line under the hero name. */
  headline:
    'I build software and websites that feel considered, from a cross-platform fitness app to premium sites for local businesses.',
  description:
    'Aathii Rakurakavan is a developer and designer building full-stack apps and premium websites. Selected projects, live sites and how to get in touch.',
  /** Shown in structured data (search results). */
  education: 'University of Toronto',
  /** Leave empty to hide. */
  location: '',

  /** Shown as a pill in the hero. Set to null to hide it. */
  availability: 'Open to internships and new opportunities',

  contact: {
    email: 'aathiir03@gmail.com',
    /** Optional, e.g. '+1 416 555 0100'. Leave empty to hide. */
    phone: '',
  },

  /** Portrait for the About section, processed by tools/process-photo.mjs. Empty shows a monogram card. */
  photo: '/portrait.webp',

  /** Put the file in /public and point at it (e.g. '/resume.pdf'). Empty hides every résumé button. */
  resumeUrl: '',

  socials: [
    { label: 'GitHub', url: 'https://github.com/Aathii' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/aathii-r-51760b1a5' },
    { label: 'X', url: 'https://x.com/aathiiraku' },
  ] as { label: string; url: string }[],
};

export const nav = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const mailto = (subject = 'Reaching out from your portfolio') =>
  `mailto:${site.contact.email}?subject=${encodeURIComponent(subject)}`;
