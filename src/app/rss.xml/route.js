import RSS from 'rss';
import { getBlogPostList } from '@/helpers/file-helpers';

import { BLOG_TITLE, BLOG_DESCRIPTION } from '@/constants';

export async function GET() {
  const feed = new RSS({
    title: BLOG_TITLE,
    description: BLOG_DESCRIPTION,
  });

  const blogPosts = await getBlogPostList();

  blogPosts.forEach(({ slug, title, abstract, publishedOn }) => {
    feed.item({
      title,
      description: abstract,
      date: publishedOn,
      url: `http://localhost:3000/${slug}`,
    });
  });

  return new Response(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
