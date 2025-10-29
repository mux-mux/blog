'use client';
import { motion } from 'framer-motion';
import styles from './loading.module.css';

export default function Loading() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.loadingContainer}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
        className={styles.loading}
      />
    </motion.div>
  );
}
