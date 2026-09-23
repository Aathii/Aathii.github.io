import { onScroll } from './smooth-scroll';

/** Thin reading-progress line across the top of the viewport. */
export function initProgress() {
	const bar = document.getElementById('scroll-progress');
	if (!bar) return;

	let max = 1;
	const measure = () => {
		max = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
	};
	measure();
	window.addEventListener('resize', measure);
	if ('ResizeObserver' in window) new ResizeObserver(measure).observe(document.body);

	onScroll((y) => {
		bar.style.transform = `scaleX(${Math.min(Math.max(y / max, 0), 1).toFixed(4)})`;
	});
}
