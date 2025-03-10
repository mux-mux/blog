import React from 'react';
import BlogHero from '@/components/BlogHero';

import { MDXRemote } from 'next-mdx-remote/rsc';
import { loadBlogPost } from '@/helpers/file-helpers';

import styles from './postSlug.module.css';

async function BlogPost({ params }) {
  const postData = await loadBlogPost(params.postSlug);
  const { title, publishedOn } = postData.frontmatter;

  return (
    <article className={styles.wrapper}>
      <BlogHero title={title} publishedOn={publishedOn} />
      <div className={styles.page}>
        <MDXRemote source={postData.content} />
      </div>
    </article>
  );
}

export default BlogPost;
