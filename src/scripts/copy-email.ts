/** "Copy email" buttons: copies the address, flips the label for a moment, announces it politely. */
export function initCopyEmail() {
	document.querySelectorAll<HTMLButtonElement>('[data-copy]').forEach((button) => {
		const value = button.dataset.copy ?? '';
		const label = button.querySelector<HTMLElement>('[data-copy-label]');
		const live = document.getElementById('copy-status');
		const original = label?.textContent ?? '';
		let timer = 0;

		const done = (ok: boolean) => {
			const message = ok ? 'Email address copied' : 'Copy failed, please select the address manually';
			if (label) label.textContent = ok ? 'Copied' : 'Copy failed';
			button.dataset.state = ok ? 'copied' : 'failed';
			if (live) live.textContent = message;
			window.clearTimeout(timer);
			timer = window.setTimeout(() => {
				if (label) label.textContent = original;
				delete button.dataset.state;
			}, 2200);
		};

		button.addEventListener('click', async () => {
			try {
				await navigator.clipboard.writeText(value);
				done(true);
			} catch {
				// Clipboard API needs a secure context; fall back to a temporary textarea.
				const area = document.createElement('textarea');
				area.value = value;
				area.setAttribute('readonly', '');
				area.style.cssText = 'position:fixed;top:0;left:0;opacity:0;';
				document.body.appendChild(area);
				area.select();
				let ok = false;
				try {
					ok = document.execCommand('copy');
				} catch {
					ok = false;
				}
				area.remove();
				done(ok);
			}
		});
	});
}
