import React from 'react';
import BlogHero from '@/components/BlogHero';
import { BLOG_TITLE } from '@/constants';
import { MDXRemote } from 'next-mdx-remote/rsc';
import CodeSnippet from '@/components/CodeSnippet';
import { loadBlogPost } from '@/helpers/file-helpers';

import styles from './postSlug.module.css';

export async function generateMetadata({ params }) {
  const postData = await loadBlogPost(params.postSlug);
  const { title, abstract } = postData.frontmatter;

  return {
    title: `${title} • ${BLOG_TITLE}`,
    description: abstract,
  };
}

async function BlogPost({ params }) {
  const postData = await loadBlogPost(params.postSlug);
  const { title, publishedOn } = postData.frontmatter;

  return (
    <article className={styles.wrapper}>
      <BlogHero title={title} publishedOn={publishedOn} />
      <div className={styles.page}>
        <MDXRemote
          source={postData.content}
          components={{ pre: CodeSnippet }}
        />
      </div>
    </article>
  );
}

export default BlogPost;
