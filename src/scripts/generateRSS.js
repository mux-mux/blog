import fs from 'fs';
import path from 'path';
import RSS from 'rss';
import { getBlogPostList } from '../helpers/file-helpers';

async function generateRSSFeed() {
  const feedOptions = {
    title: 'My JavaScript Blog',
    description: 'A blog about JavaScript tips and tricks.',
    feed_url: 'http://localhost:3000/rss.xml',
    site_url: 'http://localhost:3000',
    language: 'en',
    pubDate: new Date().toUTCString(),
  };

  const feed = new RSS(feedOptions);

  const blogPosts = await getBlogPostList();

  console.log(blogPosts);
  blogPosts.forEach(({ slug, title, abstract, publishedOn }) => {
    feed.item({
      title,
      description: abstract,
      url: `http://localhost:3000/${slug}`,
      date: publishedOn,
    });
  });

  const rssXml = feed.xml({ indent: true });

  const rssPath = path.join(process.cwd(), 'public', 'rss.xml');
  fs.writeFileSync(rssPath, rssXml);
}

generateRSSFeed();
