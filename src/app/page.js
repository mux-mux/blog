'use client';
import { useEffect, useState } from 'react';
import BlogSummaryCard from '@/components/BlogSummaryCard';
import { getBlogPostList } from '@/helpers/file-helpers';

import styles from './homepage.module.css';

function Home() {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const getBlogData = async () => {
      const data = await getBlogPostList();
      setBlogPosts(data);
    };
    getBlogData();
  }, [setBlogPosts]);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>Latest Content:</h1>

      {blogPosts.map(({ slug, title, abstract, publishedOn }) => (
        <BlogSummaryCard
          key={publishedOn}
          slug={slug}
          title={title}
          abstract={abstract}
          publishedOn={publishedOn}
        />
      ))}
    </div>
  );
}

export default Home;
