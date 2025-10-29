import Link from 'next/link';

import { BLOG_TITLE } from '@/constants';

import styles from './not-found.module.css';

export const metadata = {
  title: `404 Not found • ${BLOG_TITLE}`,
};

export default function NotFound() {
  return (
    <div className={styles.wrapper}>
      <h2>404 Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
