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
**Ok:** The `Bright package` documentation was helpful.

## Task 5.1 - Rendering embedded components inside mdx file

//TODO Fix the error when rendering `<DivisionGroupsDemo />` inside `.mdx` file<br />
**Problem:** Do not know how to use custom components inside an `.mdx` file <br />
**Solution:** Inside dynamic `[postSlug] page.js` file add lazy loading for `<DivisionGroupsDemo />` component and pass it to the `<MDXRemote components />` prop

## Task 5.2 - Animate circles with Framer Motion

//TODO Apply **layout animation** for a smooth transition when circles divide into groups<br />
**Ok:** The `Layout Animations` lesson was helpful.<br />
**Improvments:** apply `LayoutGroup` animation, respect `ReduceMotions` preferences

## Task 5.3 - Animate Reminder Area circles with Framer Motion

//TODO Uncomment another instance of `DivisionGroupDemo` and animate elements to smoothly transition into the Reminder Area, ensuring new elements are positioned correctly to the right of existing ones<br />
**Ok:** `Marking element IDs` was helpful.<br />
**Another approach:** To modify `range` function inputs `(totalInGroup, numOfItems)` to generate an array with apropriate indexes

## 6 - Implement the logic for the CircularColorsDemo component

//TODO Implement color-switching logic and create a player with **Play** and **Reset Animation** buttons. Additionally, apply Framer Motion animations to the selected element rectangle<br />
**Ok:** with create logic. `Side Effects` lesson was helpful.<br />
**Problem:** Framer Motion `layout="position"` and `layoutId={index}` are not working in this situation<br />
**Solution:** use `useId` hook an mix it with a static text `layoutId=${id}-text` value<br />
**Improvments:** Display either the Play or Pause button based on the `animationState`

## 7 - Implement theme toggle functionality

//TODO Inside `layout.js` file we have a hardcoded `light` theme. Our goal is to implement theme toggle feature that switches themes when clicking on the Sun/Moon icon<br />
**Ok:** The `Dark Mode` lesson was helpful.

## 8 - Implement RSS feed functionality

//TODO use the npm `rss` package to generate an RSS feed. Also, utilize `getBlogPostList` to retrieve the list of blog posts<br />
**Problem:** "Cannot use import statement outside a module" error. Adding `"type": "module"` leads to multiple other errors<br />
**Solution:** Generate the RSS feed dynamically using the `app/rss.xml/route.js` path instead of the `prebuild` script<br />
**Small improvments:** Create a `BLOG_DESCRIPTION` constant and reuse it in both metadata and RSS feed generation

## 9 - Implement handling invalid URLs

// TODO: Create a `not-found.js` file inside the app folder. Refer to the `Next.js docs` for further steps and apply custom styles<br />
