/**
 * Starts the hero entrance (`html.is-ready`) as soon as the heading font is usable, and never later
 * than a short ceiling, so the greeting never flashes in a fallback face and a slow font can't hold
 * the page. There is no loading screen and no artificial delay.
 */
const MAX_MS = 400;

export function initReady() {
	const root = document.documentElement;
	let done = false;

	const ready = () => {
		if (done) return;
		done = true;
		// One frame so the paused first state is committed before it plays.
		requestAnimationFrame(() => root.classList.add('is-ready'));
	};

	const headingFont = document.fonts?.load?.('700 1em "Newsreader Variable"') ?? Promise.resolve();
	Promise.race([headingFont, new Promise((resolve) => setTimeout(resolve, MAX_MS))]).then(ready, ready);
	setTimeout(ready, MAX_MS + 100);
}
