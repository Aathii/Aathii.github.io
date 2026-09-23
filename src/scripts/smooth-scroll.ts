/**
 * Native scrolling (no smooth-scroll library): one shared, frame-batched scroll listener, scroll
 * locking for the menu, and in-page anchor jumps that also move keyboard focus.
 */
export const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const scrollListeners: ((y: number) => void)[] = [];
let scrollQueued = false;

window.addEventListener(
	'scroll',
	() => {
		if (scrollQueued) return;
		scrollQueued = true;
		requestAnimationFrame(() => {
			scrollQueued = false;
			const y = window.scrollY;
			for (const cb of scrollListeners) cb(y);
		});
	},
	{ passive: true },
);

export function onScroll(cb: (y: number) => void) {
	scrollListeners.push(cb);
	cb(window.scrollY);
}

export function lockScroll() {
	document.documentElement.classList.add('scroll-locked');
}

export function unlockScroll() {
	document.documentElement.classList.remove('scroll-locked');
}

function initAnchorLinks() {
	document.addEventListener('click', (event) => {
		if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
			return;
		}
		const link = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[href^="#"]');
		if (!link) return;

		const hash = link.getAttribute('href') ?? '';
		const target = hash.length > 1 ? document.getElementById(hash.slice(1)) : null;
		if (!target) return;

		event.preventDefault();
		const behavior: ScrollBehavior = reduceMotion ? 'auto' : 'smooth';
		// The menu may still be releasing its scroll lock; wait a frame so the jump isn't swallowed.
		requestAnimationFrame(() => {
			if (hash === '#top') window.scrollTo({ top: 0, behavior });
			else target.scrollIntoView({ block: 'start', behavior });
		});
		history.replaceState(null, '', hash === '#top' ? location.pathname + location.search : hash);

		// Move focus for keyboard and screen-reader users without a second jump.
		if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
		target.focus({ preventScroll: true });
	});
}

export function initSmoothScroll() {
	initAnchorLinks();
}
