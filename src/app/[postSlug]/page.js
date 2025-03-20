import React from 'react';
import BlogHero from '@/components/BlogHero';
import { BLOG_TITLE } from '@/constants';
import { MDXRemote } from 'next-mdx-remote/rsc';
import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';
import CodeSnippet from '@/components/CodeSnippet';

import { loadBlogPost } from '@/helpers/file-helpers';

import styles from './postSlug.module.css';

const DivisionGroupsDemo = dynamic(() =>
  import('@/components/DivisionGroupsDemo')
);
const CircularColorsDemo = dynamic(() =>
  import('@/components/CircularColorsDemo')
);

export async function generateMetadata({ params }) {
  try {
    const postData = await loadBlogPost(params.postSlug);
    const { title, abstract } = postData.frontmatter;

    return {
      title: `${title} • ${BLOG_TITLE}`,
      description: abstract,
    };
  } catch (error) {
    return {
      title: `Post ${params.postSlug} Not Found`,
      description: 'The requested blog post does not exist.',
    };
  }
}

async function BlogPost({ params }) {
  let postData;
  try {
    postData = await loadBlogPost(params.postSlug);
  } catch (error) {
    return notFound();
  }
  const { title, publishedOn } = postData.frontmatter;

  if (!postData) {
    notFound();
  }

  return (
    <article className={styles.wrapper}>
      <BlogHero title={title} publishedOn={publishedOn} />
      <div className={styles.page}>
        <MDXRemote
          source={postData.content}
          components={{
            pre: CodeSnippet,
            DivisionGroupsDemo,
            CircularColorsDemo,
          }}
        />
      </div>
    </article>
  );
}

export default BlogPost;
