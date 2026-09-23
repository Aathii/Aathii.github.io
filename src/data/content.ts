/**
 * Portfolio content. The source of truth is Aathii's résumé (public/Aathii_Rakurakavan_Resume.pdf), plus what
 * Aathii confirmed directly (co-founder of EverSeasons Co) and what the live sites and repos show.
 * Keep this file and the résumé in step: never add a role, date, metric or claim that isn't in one of them.
 */

export interface Project {
	slug: string;
	title: string;
	/** Short label above the title, e.g. "iOS app · TestFlight". */
	kind: string;
	/** One or two sentences: what it is and what I did. */
	summary: string;
	/** Optional engineering highlights shown as a short list. */
	highlights?: string[];
	role: string;
	tags: string[];
	/** Live site (opens in a new tab). */
	liveUrl?: string;
	liveLabel?: string;
	/** Source code on GitHub. */
	repoUrl?: string;
	/**
	 * Tall "scroll-through" screenshot under /public/projects. Its top matches the first screen and it
	 * pans slowly inside the frame on hover. Without one, `illustration` is drawn instead.
	 */
	image?: string;
	imageAlt?: string;
	illustration?: 'assistant';
}

export const projects: Project[] = [
	{
		slug: 'irl',
		title: 'IRL',
		kind: 'AI fitness & nutrition app for iPhone',
		summary:
			'A full-stack iOS app: an Expo / React Native client against a Python FastAPI backend on Render with SQLite storage, built and shipped to TestFlight through Expo Application Services. Google Gemini powers meal scanning, personalized coaching and image generation.',
		highlights: [
			'On-device progress-photo identity checks with OpenCV (YuNet + ORB) instead of a third-party service.',
			'Apple and Google Sign-In, JWT sessions, PBKDF2 password hashing and password-reset email.',
			'HealthKit, camera, photo library and push notifications, with subscriptions through RevenueCat.',
			'Nutrition data unified from USDA FoodData Central, Open Food Facts and FatSecret; a 119-test pytest suite.',
		],
		role: 'Creator and lead developer',
		tags: ['React Native', 'Expo', 'Python', 'FastAPI', 'SQLite', 'Google Gemini'],
		liveUrl: 'https://makeitirl.ca',
		liveLabel: 'Visit makeitirl.ca',
		image: '/projects/irl-tall.webp',
		imageAlt: 'IRL homepage: the headline "Track it. See it. Make it IRL." beside three iPhone screens showing a 12-week vision, a workout plan and a food log.',
	},
	{
		slug: 'follow-up-assistant',
		title: 'CRM Follow-up Automation',
		kind: 'Automation · Built for my sales job',
		summary:
			'A workflow on the GleanTap CRM API that drafts follow-up messages, logs texts, emails and notes automatically, and completes routine follow-up tasks. It saves several hours of manual data entry a week and cut my daily workflow down to phone calls.',
		role: 'Designer and developer',
		tags: ['Python', 'Streamlit', 'OpenAI API', 'GleanTap API'],
		repoUrl: 'https://github.com/Aathii/CRMAUTOGLEAN',
		illustration: 'assistant',
	},
	{
		slug: 'everseasons',
		title: 'EverSeasons Co',
		kind: 'My company · Live',
		summary:
			'The student-run home-maintenance company I co-founded: window and gutter cleaning, pressure washing, deck staining, driveway sealing and snow removal. I designed and built its website, with services, FAQ and booking on every screen size.',
		role: 'Co-founder; designed and built the site',
		tags: ['HTML', 'CSS', 'JavaScript'],
		liveUrl: 'https://aathii.github.io/Everseasonz/',
		liveLabel: 'Visit the site',
		repoUrl: 'https://github.com/Aathii/Everseasonz',
		image: '/projects/everseasons-tall.webp',
		imageAlt: 'EverSeasons Co homepage: a hand cleaning a window behind the brand mark and the headline "Home Maintenance".',
	},
	{
		slug: 'coco-shack',
		title: 'The Coco Shack',
		kind: 'Client website · Live',
		summary:
			'A booking site for a Toronto live coconut bar that caters weddings, corporate events and festivals. Video hero, scroll-driven motion and a mobile-first path to booking.',
		role: 'Designer and developer',
		tags: ['Astro', 'Tailwind CSS', 'TypeScript'],
		liveUrl: 'https://aathii.github.io/coco-shack-website/',
		liveLabel: 'Visit the site',
		repoUrl: 'https://github.com/Aathii/coco-shack-website',
		image: '/projects/coco-tall.webp',
		imageAlt: 'The Coco Shack homepage: a video of coconuts being cut, with the headline "Coconuts cut live. Cocktails served in the shell."',
	},
	{
		slug: 'juicing4life',
		title: 'Juicing4Life',
		kind: 'Client website',
		summary:
			'A warm, video-led site for a family-run cane juice booth in Scarborough: the menu, the family story and visit details, with call-ahead ordering up front.',
		role: 'Designer and developer',
		tags: ['React', 'Vite', 'Tailwind CSS', 'TypeScript'],
		repoUrl: 'https://github.com/Aathii/juicing4life',
		image: '/projects/juicing4life-tall.webp',
		imageAlt: 'Juicing4Life homepage: a video of fresh coconut and sugar cane behind a card reading "Juicing4Life" with opening hours and location.',
	},
];

export interface SystemsProject {
	title: string;
	stack: string;
	points: string[];
}

/** Lower-level work from the résumé (no public code). */
export const systemsWork: SystemsProject[] = [
	{
		title: 'Linux system shell',
		stack: 'C · Sockets · GDB',
		points: [
			'A working Unix shell (mysh) in C with core utilities (ls, cd, cat, wc), fork/exec process management, background jobs and signal handling.',
			'Client–server communication over TCP/UDP sockets, with zero memory leaks verified using AddressSanitizer and GDB.',
		],
	},
	{
		title: 'Functional language interpreter & desugarer',
		stack: 'Haskell · Racket',
		points: [
			'An interpreter for Orange, a functional language: abstract syntax tree, eager evaluation, environment-based lookup, closures and structured error propagation.',
			'A structural-recursion desugarer in Racket that translates high-level syntax into a core language, including n-ary calls and deeply nested pattern matching.',
		],
	},
];

export interface MoreWork {
	title: string;
	note: string;
	url: string;
	linkLabel: string;
}

/** Smaller things worth a link. */
export const moreWork: MoreWork[] = [
	{
		title: 'Elevate Digital',
		note: 'The site for my web design studio: services, process and packages for small businesses.',
		url: 'https://aathii.github.io/ElevateWebDesign/',
		linkLabel: 'Live site',
	},
	{
		title: 'Hackathon team project',
		note: 'A Python project built with three teammates at a hackathon.',
		url: 'https://github.com/Aathii/purple-casimir',
		linkLabel: 'GitHub',
	},
];

export interface Role {
	title: string;
	org: string;
	/** Optional link for the organisation. */
	orgUrl?: string;
	location?: string;
	/** From the résumé. Left empty where the résumé has no dates. */
	period?: string;
	/** Small line under the title, e.g. "Promoted from Sales Specialist". */
	note?: string;
	current?: boolean;
	points: string[];
}

export const experience: Role[] = [
	{
		title: 'Sales Lead',
		org: 'Fitness Connection',
		location: 'Richmond Hill, ON',
		period: 'May 2025 – Present',
		note: 'Promoted from Sales Specialist',
		current: true,
		points: [
			'Top-performing sales representative at the location; I own the full membership sales cycle, from first inquiry to close.',
			'Built an automated workflow on the GleanTap CRM API that logs texts, emails and notes and completes routine follow-ups, saving several hours of data entry a week.',
			'Work across three CRMs (GleanTap, Antaris and Less Annoying CRM), reconciling lead, appointment and conversion records and resolving member account and billing issues.',
		],
	},
	{
		title: 'Co-founder',
		org: 'EverSeasons Co',
		orgUrl: 'https://aathii.github.io/Everseasonz/',
		points: [
			'Student-run home-maintenance company: exterior cleaning, seasonal upkeep and protection.',
			'Designed and built the company website.',
		],
	},
	{
		title: 'Founder',
		org: 'Elevate Digital',
		orgUrl: 'https://aathii.github.io/ElevateWebDesign/',
		points: ['Web design studio: I design and build websites for small businesses.'],
	},
	{
		title: 'Event Support Lead',
		org: 'DUA Events, University of Toronto',
		location: 'Toronto, ON',
		period: 'May 2023 – Jun 2025',
		points: [
			'Coordinated logistics, setup, teardown and live issue resolution across teams for campus events on tight timelines.',
			'Troubleshot A/V and operational failures and kept staff, vendors and attendees updated as priorities shifted.',
		],
	},
];

export const education = {
	degree: 'Honours Bachelor of Science',
	school: 'University of Toronto',
	period: 'Sept 2021 – Apr 2026',
	program: 'Technology, Coding & Society, with a double minor in Computer Science and Mathematics.',
};

export interface SkillGroup {
	label: string;
	items: string[];
}

/** From the résumé, plus the web tools the featured client sites are built with. */
export const skills: SkillGroup[] = [
	{ label: 'Languages', items: ['Python', 'JavaScript', 'TypeScript', 'C', 'Java', 'SQL', 'Haskell', 'Racket', 'Bash'] },
	{ label: 'Mobile & web', items: ['React Native', 'React', 'Expo', 'React Navigation', 'FastAPI', 'Pydantic', 'Astro', 'Tailwind CSS'] },
	{ label: 'AI & computer vision', items: ['Google Gemini API', 'OpenAI SDK', 'OpenCV (YuNet, ORB)', 'Image-generation pipelines'] },
	{ label: 'Backend & data', items: ['REST API design', 'SQLite', 'JWT / OAuth authentication', 'Third-party API integration'] },
	{ label: 'Infrastructure', items: ['Render', 'Linux / Unix', 'Expo Application Services (EAS)', 'Excel automation'] },
	{ label: 'Developer tools', items: ['Git', 'Claude Code', 'OpenAI Codex', 'pytest', 'ESLint', 'GDB', 'AddressSanitizer'] },
	{ label: 'Business', items: ['Full-cycle membership sales', 'CRM automation', 'GleanTap, Antaris, Less Annoying CRM', 'Event operations'] },
	{ label: 'Spoken', items: ['English', 'French', 'Tamil'] },
];

export const aboutParagraphs = [
	"I'm a University of Toronto graduate (Honours B.Sc. in Technology, Coding & Society, with minors in computer science and math) building IRL, a full-stack AI fitness app for iPhone. My background runs from C, Haskell and Racket to React Native and FastAPI.",
	"I'm also a Sales Lead at Fitness Connection, promoted from Sales Specialist, where I own the membership sales cycle from first inquiry to close. Selling face to face shapes how I build: start with what the customer needs, then write the code. It's also why I automated my own CRM follow-ups.",
	'Outside that, I co-founded EverSeasons Co, a student-run home-maintenance company, and design websites for small businesses through Elevate Digital. I speak English, French and Tamil.',
];

/** The three short "what I do" rows in the About section. */
export const pillars = [
	{ icon: 'build', label: 'Build', text: 'IRL, an AI fitness app for iPhone, plus websites for small businesses.' },
	{ icon: 'sell', label: 'Sell', text: 'Sales Lead at Fitness Connection and the top-performing rep at my location.' },
	{ icon: 'start', label: 'Start', text: 'Co-founder of EverSeasons Co and founder of Elevate Digital.' },
] as const;
