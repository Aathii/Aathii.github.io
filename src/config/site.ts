/**
 * Everything personal lives here and in src/data/content.ts.
 */

export const site = {
  /**
   * While false the site tells search engines not to index it (and robots.txt blocks crawlers), so
   * unfinished copy can never be found by accident. True = public and indexable.
   */
  live: true,

  /** Full name as it appears in the header, footer, metadata and contact section. */
  name: 'Aathii Rakurakavan',
  /** The bold word in the hero greeting. */
  firstName: 'Aathii',
  /** Two letters for the header mark and the favicon. */
  initials: 'AR',
  role: 'Developer, co-founder and membership advisor',
  description:
    'Aathii Rakurakavan builds apps and websites, co-founded EverSeasons Co, and works in sales as a membership advisor at Fitness Connection. Selected work, experience and contact.',
  /** Shown in structured data (search results). */
  education: 'University of Toronto',

  /** Small status line above the hero greeting. Set to '' to hide it. */
  availability: 'Open to new opportunities',

  contact: {
    email: 'aathiir03@gmail.com',
  },

  /** Portrait for the hero, processed by tools/process-photo.mjs. */
  photo: '/portrait.webp',
  photoAlt: 'Aathii at the University of Toronto convocation, holding an Honours Bachelor of Science diploma',

  /** Put the file in /public and point at it (e.g. '/resume.pdf'). Empty hides every résumé button. */
  resumeUrl: '',

  socials: [
    { label: 'GitHub', url: 'https://github.com/Aathii' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/aathii-r-51760b1a5' },
    { label: 'X', url: 'https://x.com/aathiiraku' },
  ] as { label: string; url: string }[],
};

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const mailto = (subject = 'Reaching out from your portfolio') =>
  `mailto:${site.contact.email}?subject=${encodeURIComponent(subject)}`;
