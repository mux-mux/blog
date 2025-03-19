import RSS from 'rss';
import { getBlogPostList } from '@/helpers/file-helpers';

import { BLOG_TITLE, BLOG_DESCRIPTION } from '@/constants';

export async function GET() {
  const feed = new RSS({
    title: BLOG_TITLE,
    description: BLOG_DESCRIPTION,
  });

  const blogPosts = await getBlogPostList();

  blogPosts.forEach((post) => {
    feed.item({
      title: post.title,
      description: post.abstract,
      date: post.publishedOn,
      url: `http://some-website.com/${post.slug}`,
    });
  });

  return new Response(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
