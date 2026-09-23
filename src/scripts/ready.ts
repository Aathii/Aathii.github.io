/**
 * Starts the hero choreography (`html.is-ready`) as soon as the display font (the one the big name is set in)
 * is usable, and never later than a short ceiling, so a slow font can't hold the page. The hero text itself is
 * always in the DOM (only its transform animates), which keeps LCP fast, and waiting on that one font avoids
 * the big name flashing in a fallback face.
 */
const MAX_MS = 400;

export function initReady() {
	const root = document.documentElement;
	let done = false;

	const ready = () => {
		if (done) return;
		done = true;
		// One frame so the initial (hidden) transform state is committed before it animates away.
		requestAnimationFrame(() => root.classList.add('is-ready'));
	};

	const heroFont = document.fonts?.load?.('700 1em "Bricolage Grotesque Variable"') ?? Promise.resolve();
	Promise.race([heroFont, new Promise((resolve) => setTimeout(resolve, MAX_MS))]).then(ready, ready);
	setTimeout(ready, MAX_MS + 100);
}
