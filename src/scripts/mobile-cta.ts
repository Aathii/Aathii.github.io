import { onScroll } from './smooth-scroll';

/** Sticky bottom bar on phones: appears after the hero, hides over the contact section and footer. */
export function initMobileCta() {
	const bar = document.getElementById('mobile-cta');
	if (!bar) return;

	const hero = document.getElementById('top-hero');
	const visibleZones = new Set<Element>();
	let pastHero = false;

	const sync = () => {
		const show = pastHero && visibleZones.size === 0;
		bar.classList.toggle('is-visible', show);
		bar.toggleAttribute('inert', !show);
	};

	onScroll((y) => {
		pastHero = y > (hero ? hero.offsetHeight * 0.7 : window.innerHeight);
		sync();
	});

	if ('IntersectionObserver' in window) {
		const observer = new IntersectionObserver((entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) visibleZones.add(entry.target);
				else visibleZones.delete(entry.target);
			}
			sync();
		});
		document.querySelectorAll('[data-hide-mobile-cta]').forEach((zone) => observer.observe(zone));
	}
}
