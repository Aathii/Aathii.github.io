import { reduceMotion } from './smooth-scroll';

/** Desktop-only pointer effects: card spotlights, gently magnetic CTAs, and the hero glow. */
export function initPointerFx() {
	if (reduceMotion || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

	document.querySelectorAll<HTMLElement>('.spotlight').forEach((card) => {
		card.addEventListener('pointermove', (event) => {
			const rect = card.getBoundingClientRect();
			card.style.setProperty('--sx', `${event.clientX - rect.left}px`);
			card.style.setProperty('--sy', `${event.clientY - rect.top}px`);
		});
	});

	document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((button) => {
		const strength = 0.25;
		button.addEventListener('pointermove', (event) => {
			const rect = button.getBoundingClientRect();
			const x = event.clientX - (rect.left + rect.width / 2);
			const y = event.clientY - (rect.top + rect.height / 2);
			button.style.setProperty('--mx', `${(x * strength).toFixed(1)}px`);
			button.style.setProperty('--my', `${(y * strength).toFixed(1)}px`);
		});
		button.addEventListener('pointerleave', () => {
			button.style.setProperty('--mx', '0px');
			button.style.setProperty('--my', '0px');
		});
	});

	/* Hero glow trails the pointer with a soft lag. */
	const hero = document.querySelector<HTMLElement>('[data-hero-glow]');
	if (hero) {
		let tx = 0.7;
		let ty = 0.3;
		let cx = tx;
		let cy = ty;
		let running = false;

		const frame = () => {
			cx += (tx - cx) * 0.06;
			cy += (ty - cy) * 0.06;
			hero.style.setProperty('--gx', `${(cx * 100).toFixed(2)}%`);
			hero.style.setProperty('--gy', `${(cy * 100).toFixed(2)}%`);
			if (Math.abs(tx - cx) > 0.001 || Math.abs(ty - cy) > 0.001) requestAnimationFrame(frame);
			else running = false;
		};

		hero.addEventListener('pointermove', (event) => {
			const rect = hero.getBoundingClientRect();
			tx = (event.clientX - rect.left) / rect.width;
			ty = (event.clientY - rect.top) / rect.height;
			if (!running) {
				running = true;
				requestAnimationFrame(frame);
			}
		});
	}
}
