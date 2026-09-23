/**
 * Portfolio content. Every claim is backed by something checkable: a live site, a repo, the diploma,
 * or something Aathii confirmed directly (Membership Advisor at Fitness Connection, co-founder of
 * EverSeasons Co, degree focus). No dates by request; add them to `experience` if wanted later.
 */

export interface Project {
	slug: string;
	title: string;
	/** Short label above the title, e.g. "iPhone app · Live". */
	kind: string;
	/** One or two sentences: what it is and what I did. */
	summary: string;
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
		kind: 'iPhone app · Live',
		summary:
			'A fitness app that brings food, training, activity and progress together. Food logging with barcode search, set-by-set training plans, coaching, and a 12-week AI projection of your goal. One FastAPI backend serves the web app and the native iPhone app.',
		role: 'Creator and lead developer',
		tags: ['React Native', 'Expo', 'FastAPI', 'Next.js', 'OpenAI API'],
		liveUrl: 'https://makeitirl.ca',
		liveLabel: 'Visit makeitirl.ca',
		image: '/projects/irl-tall.webp',
		imageAlt: 'IRL homepage: the headline "Track it. See it. Make it IRL." beside three iPhone screens showing a 12-week vision, a workout plan and a food log.',
	},
	{
		slug: 'follow-up-assistant',
		title: 'Follow-up Assistant',
		kind: 'AI tool · Built for my sales role',
		summary:
			'An assistant I built for my own job as a membership advisor. It drafts personal follow-up messages for new leads and current members, then automates the SMS, email, notes and next follow-up tasks in the CRM.',
		role: 'Designer and developer',
		tags: ['Python', 'Streamlit', 'OpenAI API', 'Gleantap CRM'],
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
	current?: boolean;
	points: string[];
}

export const experience: Role[] = [
	{
		title: 'Membership Advisor',
		org: 'Fitness Connection',
		current: true,
		points: [
			'Sales: walk prospective members through the club, learn their goals and help them choose the right membership.',
			'Follow up with new leads and current members, and built an AI assistant to automate that follow-up.',
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
		title: 'Creator and lead developer',
		org: 'IRL',
		orgUrl: 'https://makeitirl.ca',
		points: ['A fitness app for iPhone, live at makeitirl.ca, with a web app and a shared API.'],
	},
	{
		title: 'Founder',
		org: 'Elevate Digital',
		orgUrl: 'https://aathii.github.io/ElevateWebDesign/',
		points: ['Web design studio: I design and build websites for small businesses.'],
	},
];

export const education = {
	degree: 'Honours Bachelor of Science',
	school: 'University of Toronto',
	focus: 'Technology and coding, computer science, and math.',
};

export interface SkillGroup {
	label: string;
	items: string[];
}

/** Every entry is evidenced by a repo, a live site or the sales role. */
export const skills: SkillGroup[] = [
	{ label: 'Languages', items: ['Python', 'TypeScript', 'JavaScript', 'HTML & CSS'] },
	{ label: 'Frameworks', items: ['React', 'React Native (Expo)', 'Next.js', 'Astro', 'Tailwind CSS', 'FastAPI', 'Streamlit'] },
	{ label: 'AI', items: ['OpenAI API', 'LLM-powered features and automation'] },
	{ label: 'Design', items: ['UI design', 'Responsive layouts', 'Motion'] },
	{ label: 'Business', items: ['Membership sales', 'Lead follow-up', 'CRM automation (Gleantap)', 'Running a small business'] },
];

export const aboutParagraphs = [
	'I work in sales as a membership advisor at Fitness Connection. Alongside that I build: IRL, a fitness app for iPhone; websites for small businesses through my studio, Elevate Digital; and EverSeasons Co, the home-maintenance company I co-founded.',
	'Selling face to face shapes how I build: start with what the customer actually needs, then write the code. It is also why I built an AI assistant to automate my own sales follow-ups.',
	'I studied technology and coding, computer science and math at the University of Toronto, where I earned an Honours Bachelor of Science.',
];

/** The three short "what I do" rows in the About section. */
export const pillars = [
	{ icon: 'build', label: 'Build', text: 'IRL, a fitness app for iPhone, plus websites for small businesses.' },
	{ icon: 'sell', label: 'Sell', text: 'Membership advisor at Fitness Connection.' },
	{ icon: 'start', label: 'Start', text: 'Co-founder of EverSeasons Co and founder of Elevate Digital.' },
] as const;
