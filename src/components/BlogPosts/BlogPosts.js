import React from 'react';

function BlogPosts() {
  const getData = async () => {
    const data = await getBlogPostList();
    setBlogPosts(data);
  };
  return getData();
}

export default BlogPosts;
