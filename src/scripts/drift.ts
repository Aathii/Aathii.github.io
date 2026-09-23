import { reduceMotion } from './smooth-scroll';

/**
 * Decorative layers marked `data-drift="x y"` shift up to x/y pixels against the pointer. The CSS
 * transition (1.5s ease-out) does the smoothing, so this only writes two custom properties per frame.
 * Decoration only, never text; skipped on touch devices and under reduced motion.
 */
export function initDrift() {
	if (reduceMotion || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

	const layers = Array.from(document.querySelectorAll<HTMLElement>('[data-drift]')).map((el) => {
		const [x = 6, y = 6] = (el.dataset.drift ?? '').split(/\s+/).map(Number);
		return { el, x, y };
	});
	// Buttons carry a hatched inset that drifts a little too.
	document.querySelectorAll<HTMLElement>('[data-btn]').forEach((el) => layers.push({ el, x: 3, y: 3 }));
	if (!layers.length) return;

	let nx = 0;
	let ny = 0;
	let queued = false;

	const apply = () => {
		queued = false;
		for (const { el, x, y } of layers) {
			el.style.setProperty('--dx', `${(-nx * x).toFixed(1)}px`);
			el.style.setProperty('--dy', `${(-ny * y).toFixed(1)}px`);
		}
	};

	window.addEventListener(
		'pointermove',
		(event) => {
			nx = (event.clientX / window.innerWidth) * 2 - 1;
			ny = (event.clientY / window.innerHeight) * 2 - 1;
			if (!queued) {
				queued = true;
				requestAnimationFrame(apply);
			}
		},
		{ passive: true },
	);
}
