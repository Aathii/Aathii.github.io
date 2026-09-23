import { lockScroll, onScroll, unlockScroll } from './smooth-scroll';

/**
 * Header: paper background once the page scrolls, highlights the section in view, and runs the
 * full-screen colour-wipe menu on phones and tablets.
 */
export function initHeader() {
	const header = document.getElementById('site-header');
	if (!header) return;

	const toggle = document.getElementById('menu-toggle') as HTMLButtonElement | null;
	const menu = document.getElementById('mobile-menu');
	const backgroundRegions = Array.from(document.querySelectorAll<HTMLElement>('[data-inert-when-menu]'));
	let menuOpen = false;

	onScroll((y) => header.classList.toggle('is-scrolled', y > 16));

	/* Active section indicator */
	const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('[data-nav-link]'));
	const sectionIds = new Map<Element, string>();
	for (const link of navLinks) {
		const section = document.getElementById(link.hash.slice(1));
		if (section) sectionIds.set(section, link.hash.slice(1));
	}

	let activeId = '';
	const setActive = (id: string) => {
		if (id === activeId) return;
		activeId = id;
		for (const link of navLinks) {
			if (id && link.hash === `#${id}`) link.setAttribute('aria-current', 'true');
			else link.removeAttribute('aria-current');
		}
	};

	if ('IntersectionObserver' in window && sectionIds.size) {
		const observer = new IntersectionObserver(
			(entries) => {
				entries
					.sort((a, b) => Number(a.isIntersecting) - Number(b.isIntersecting))
					.forEach((entry) => {
						const id = sectionIds.get(entry.target) ?? '';
						if (entry.isIntersecting) setActive(id);
						else if (id === activeId) setActive('');
					});
			},
			{ rootMargin: '-40% 0px -55% 0px' },
		);
		sectionIds.forEach((_, section) => observer.observe(section));
	}

	/* Menu */
	if (!toggle || !menu) return;

	const setMenu = (open: boolean, { restoreFocus = true, viaKeyboard = false } = {}) => {
		if (open === menuOpen) return;
		menuOpen = open;
		toggle.setAttribute('aria-expanded', String(open));
		menu.classList.toggle('is-open', open);
		menu.toggleAttribute('inert', !open);
		document.body.classList.toggle('menu-open', open);
		backgroundRegions.forEach((region) => region.toggleAttribute('inert', open));

		if (open) {
			lockScroll();
			if (viaKeyboard) {
				window.setTimeout(() => menu.querySelector<HTMLElement>('a')?.focus({ preventScroll: true }), 450);
			}
		} else {
			unlockScroll();
			if (restoreFocus && viaKeyboard) toggle.focus({ preventScroll: true });
		}
	};

	// A click's `detail` is 0 when it was triggered by Enter/Space rather than a pointer.
	toggle.addEventListener('click', (event) => setMenu(!menuOpen, { viaKeyboard: event.detail === 0 }));
	const closeQuietly = () => setMenu(false, { restoreFocus: false });
	menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeQuietly));
	header.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeQuietly));
	document.addEventListener('keydown', (event) => {
		if (event.key === 'Escape' && menuOpen) setMenu(false, { viaKeyboard: true });
	});
	window.matchMedia('(min-width: 1024px)').addEventListener('change', (event) => {
		if (event.matches) closeQuietly();
	});
}
