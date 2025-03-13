## About This Project

This project was created as part of the **Joy of React** course by Josh W. Comeau. It was built to practice and apply key **React.js** and **Next.js** concepts.

## Getting Started

We begin with pre-built components and styles, but without functionality. The goal is to bring this project to life.

## Prerequiremnts

1️⃣ First, I attempt to solve each task on my own.<br />
2️⃣ Then, I review Josh’s approach to see how he would tackle it.<br />
3️⃣ Finally, I take notes on what can be improved.

## Task 1 - update the homepage so that it shows a list of blog posts

//TODO Iterate over the data read from the file system!<br />
**Problem:** `"fs" module not found` error when using `setState`<br />
**Solution:** Remove `setState` and assign `blogPost` directly to a variable.

## Task 2 - display the full blog post content when clicking on a post from the homepage

//TODO for example inside MDXRemote component render /content/javascript-modulo-operator.mdx <br />
**Ok:** The `MDXRemote` docs and the `Next.js {params}` lesson were helpful.

## Task 3 - Adding metadata (`<title>` & `<meta>` description)

//TODO Generate metadata for dynamic pages and the homepage, leveraging the _React Cache API_ for optimization<br />
**Ok:** The `Next's Metadata API` and `React Cache API` lessons were helpful.<br />
**Small improvments:** Move homepage metadata to `layout.js`, append `• ${BLOG_TITLE}` to the title to include the blog name

## Task 4 - Apply code snippets syntax-highlighting inside blog posts

//TODO Apply code snippets syntax-highlighting using Bright package<br />
**Ok:** The `Bright package` documentation were helpful.
