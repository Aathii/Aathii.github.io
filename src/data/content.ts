/**
 * Portfolio content, gathered from Aathii's GitHub (github.com/Aathii) and the live sites.
 * Only claims backed by a repo, README or live page are stated. [Square brackets] mean "confirm/fill".
 */

export interface Project {
	slug: string;
	title: string;
	/** Short category label above the title. */
	kind: string;
	/** One line: what it is. */
	summary: string;
	/** What it does and how it was built. Two or three sentences, facts only. */
	description: string;
	role: string;
	year: string;
	/** Free-form status line, e.g. "Live" or "Private repository". */
	status: string;
	tags: string[];
	/** Live site (opens in a new tab). */
	liveUrl?: string;
	/** Source code on GitHub. */
	repoUrl?: string;
	/** Screenshots under /public/projects. Without them a generated cover is shown. */
	images?: {
		/** Main screenshot. When `pan` is set it is a tall capture whose top matches the first screen. */
		desktop: string;
		mobile?: string;
		/** Slowly scroll the screenshot through the browser frame on hover (desktop pointers only). */
		pan?: boolean;
	};
	/** Alt text for the screenshot. */
	imageAlt?: string;
	/** Wordmark for the generated cover when there are no screenshots. */
	coverWord?: string;
}

export const projects: Project[] = [
	{
		slug: 'irl',
		title: 'IRL',
		kind: 'Product · iPhone app, web & API',
		summary: 'Track it. See it. Make it IRL: food, training and progress in one connected system.',
		description:
			'A fitness app for iPhone with a live product site. It covers food logging with barcode search, set-by-set training plans, coaching, and a 12-week Future AI Vision of your goal. One shared FastAPI backend powers the web app and a native Expo / React Native app.',
		role: 'Creator & lead developer',
		year: 'Ongoing',
		status: 'Live · code private',
		tags: ['React Native', 'Expo', 'FastAPI', 'Next.js', 'OpenAI API'],
		liveUrl: 'https://makeitirl.ca',
		images: { desktop: '/projects/irl-tall.webp', pan: true, mobile: '/projects/irl-mobile.webp' },
		imageAlt: 'IRL homepage: the headline "Track it. See it. Make it IRL." beside three iPhone screens showing a 12-week vision, a workout plan and a food log.',
	},
	{
		slug: 'elevate-digital',
		title: 'Elevate Digital',
		kind: 'Studio site · Brand & web',
		summary: 'The web studio I run for small businesses, and the site that sells it.',
		description:
			'A dark, motion-led site for a bespoke web-design studio: services, process, packages and a showcase of live work, built so a visitor always knows the next step. Hand-built HTML and CSS with a mobile-first layout.',
		role: 'Founder, designer & developer',
		year: '2026',
		status: 'Live',
		tags: ['HTML', 'CSS', 'JavaScript', 'Responsive design'],
		liveUrl: 'https://aathii.github.io/ElevateWebDesign/',
		repoUrl: 'https://github.com/Aathii/ElevateWebDesign',
		images: { desktop: '/projects/elevate-tall.webp', pan: true, mobile: '/projects/elevate-mobile.webp' },
		imageAlt: 'Elevate Web Studio homepage: a glowing logo over a dark network backdrop with the headline "Premium websites for brands that want to look more established online".',
	},
	{
		slug: 'coco-shack',
		title: 'The Coco Shack',
		kind: 'Client site · Events & booking',
		summary: 'A cinematic booking site for a Toronto live coconut bar.',
		description:
			'A marketing and lead-capture site for a mobile coconut bar serving weddings, corporate events and festivals. Video hero, scroll-driven motion and a mobile-first booking flow, built with Astro, Tailwind CSS and Lenis smooth scroll.',
		role: 'Designer & developer',
		year: '2026',
		status: 'Preview · pending client launch',
		tags: ['Astro', 'Tailwind CSS', 'TypeScript', 'Lenis'],
		liveUrl: 'https://aathii.github.io/coco-shack-website/',
		repoUrl: 'https://github.com/Aathii/coco-shack-website',
		images: { desktop: '/projects/coco-tall.webp', pan: true, mobile: '/projects/coco-mobile.webp' },
		imageAlt: 'The Coco Shack homepage: a full-bleed video of coconuts being cut, with the headline "Coconuts cut live. Cocktails served in the shell."',
	},
	{
		slug: 'everseasons',
		title: 'EverSeasons Co',
		kind: 'Client site · Home maintenance',
		summary: 'A premium site for a local home-maintenance company.',
		description:
			'A full-bleed, trust-first site for a home-maintenance brand: services, gallery, FAQ and a clear booking call to action on every screen size. Featured as live work on the Elevate Digital showcase.',
		role: 'Designer & developer',
		year: '2026',
		status: 'Live',
		tags: ['HTML', 'CSS', 'JavaScript', 'Responsive design'],
		liveUrl: 'https://aathii.github.io/Everseasonz/',
		repoUrl: 'https://github.com/Aathii/Everseasonz',
		images: { desktop: '/projects/everseasons-tall.webp', pan: true, mobile: '/projects/everseasons-mobile.webp' },
		imageAlt: 'EverSeasons Co home page: a hand cleaning a window behind the brand mark and the headline "Home Maintenance".',
	},
	{
		slug: 'juicing4life',
		title: 'Juicing4Life',
		kind: 'Client site · Food & local retail',
		summary: 'A warm, video-led site for a family-run cane juice booth in Scarborough.',
		description:
			'Menu, a three-generation family story and visit details, with call-ahead ordering front and centre. React 18, Vite, Tailwind and TypeScript, with per-character heading animation, scroll reveals and full reduced-motion support.',
		role: 'Designer & developer',
		year: '2026',
		status: 'Built · not yet deployed',
		tags: ['React', 'Vite', 'Tailwind CSS', 'TypeScript'],
		repoUrl: 'https://github.com/Aathii/juicing4life',
		images: { desktop: '/projects/juicing4life-tall.webp', pan: true, mobile: '/projects/juicing4life-mobile.webp' },
		imageAlt: 'Juicing4Life homepage: a full-bleed video of a fresh coconut and sugar cane behind a frosted card reading "Juicing4Life" with opening hours and location.',
	},
];

export interface EarlierWork {
	title: string;
	note: string;
	year: string;
	url: string;
	external: string;
}

/** Smaller or older things worth a link. */
export const earlierWork: EarlierWork[] = [
	{
		title: 'Follow-up Assistant',
		note: 'Streamlit app that uses an LLM to draft lead messages and automates CRM follow-ups.',
		year: '2026',
		url: 'https://github.com/Aathii/CRMAUTOGLEAN',
		external: 'GitHub',
	},
	{
		title: 'Hackathon team project',
		note: 'Python project built with three teammates for a hackathon.',
		year: '2020',
		url: 'https://github.com/Aathii/purple-casimir',
		external: 'GitHub',
	},
	{
		title: 'My first site, Aathii.R',
		note: 'Where it started: a personal page from high school.',
		year: '2020',
		url: 'https://aathii.github.io/Devthii/',
		external: 'Live',
	},
];

export interface Milestone {
	period: string;
	title: string;
	org: string;
	points: string[];
}

export const experience: Milestone[] = [
	{
		period: '2026 – Now',
		title: 'Founder, designer & developer',
		org: 'Elevate Digital',
		points: [
			'Design and build premium, conversion-focused websites for local service businesses.',
			'Live work: EverSeasons Co. In build: The Coco Shack.',
		],
	},
	{
		period: 'Now',
		title: 'Creator & lead developer',
		org: 'IRL',
		points: [
			'Live at makeitirl.ca: an iPhone app, a web app and a shared API.',
			'Barcode food logging, set-by-set workout tracking and AI-assisted coaching features.',
		],
	},
	{
		period: 'Education',
		title: 'Honours Bachelor of Science',
		org: 'University of Toronto',
		points: [],
	},
	{
		period: '2020 – 2021',
		title: 'Coding Club President · Student Council President',
		org: 'High school',
		points: [
			'Led the coding club, mentored students, and helped launch the school’s social channels, CedarNews and CedarTree.',
			'Competed in hackathons: KuriusHacks Christmas Edition, NewYearNewHack and HackTheLib 2021.',
		],
	},
];

export interface SkillGroup {
	label: string;
	items: string[];
}

/** Every entry is evidenced by a repo or a live site. */
export const skills: SkillGroup[] = [
	{ label: 'Languages', items: ['Python', 'TypeScript', 'JavaScript', 'HTML & CSS'] },
	{ label: 'Frontend & mobile', items: ['React', 'React Native (Expo)', 'Next.js', 'Astro', 'Tailwind CSS', 'Vite'] },
	{ label: 'Backend & data', items: ['FastAPI', 'Streamlit', 'REST APIs'] },
	{ label: 'AI', items: ['OpenAI API', 'LLM-assisted features'] },
	{ label: 'Design & motion', items: ['UI design', 'Responsive layouts', 'Scroll animation', 'Lenis'] },
	{ label: 'Tooling', items: ['Git & GitHub', 'GitHub Pages', 'EAS builds'] },
];

/** Big statement that lights up word by word as you scroll. Keep it under ~45 words. */
export const statement =
	'I care about how software feels as much as how it runs. So far that has meant a cross-platform fitness app, a web studio for local businesses, and sites that real brands put their name on.';

export const facts = [
	{ label: 'Focus', value: 'Full-stack · Mobile · Web design' },
	{ label: 'Building now', value: 'IRL and Elevate Digital' },
	{ label: 'Education', value: 'University of Toronto, Honours B.Sc.' },
	{ label: 'Looking for', value: 'Internships & new roles' },
];

export const aboutParagraphs = [
	'I have been building since high school: I ran the coding club, mentored other students and competed in hackathons. I went on to earn an Honours Bachelor of Science at the University of Toronto, and I never stopped building.',
	'Today I am building IRL, a fitness product across web, API and native mobile, and running Elevate Digital, the studio I started to design and ship premium websites for small businesses. I like owning the whole thing: the idea, the interface, the code and the details in between.',
];
