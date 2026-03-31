import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog', ({ data }) => !data.draft);

  posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  return rss({
    title: 'Logicmath Blogg',
    description: 'Artikler, ressurser og tips om mattelæring fra Logicmath.',
    site: context.site ?? 'https://logiq.halisonworks.com',
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/blogg/${post.id}/`,
    })),
    customData: '<language>nb</language>',
  });
}
