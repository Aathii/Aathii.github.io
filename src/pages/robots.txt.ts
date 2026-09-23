import type { APIRoute } from 'astro';
import { site } from '../config/site';

/** Blocks crawlers until `site.live` is true, then points them at the sitemap. */
export const GET: APIRoute = ({ site: siteUrl }) => {
	const lines = site.live
		? ['User-agent: *', 'Allow: /', '', `Sitemap: ${new URL('sitemap-index.xml', siteUrl).href}`]
		: ['User-agent: *', 'Disallow: /'];
	return new Response(lines.join('\n') + '\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
