'use client';
import React, { useState } from 'react';
import VisuallyHidden from '@/components/VisuallyHidden';
import { Sun, Moon } from 'react-feather';
import Cookie from 'js-cookie';

import {
  COLOR_THEME_COOKIE_NAME,
  LIGHT_TOKENS,
  DARK_TOKENS,
} from '@/constants';

import styles from './DarkLightToggle.module.css';

function DarkLightToggle({ initialTheme }) {
  const [theme, setTheme] = useState(initialTheme);

  function handleClick() {
    const nextTheme = theme === 'light' ? 'dark' : 'light';

    setTheme(nextTheme);

    Cookie.set(COLOR_THEME_COOKIE_NAME, nextTheme, { expires: 1000 });

    const COLORS = nextTheme === 'light' ? LIGHT_TOKENS : DARK_TOKENS;

    const root = document.documentElement;
    root.setAttribute('data-color-theme', nextTheme);

    Object.entries(COLORS).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }

  return (
    <button className={styles.action} onClick={handleClick}>
      {theme === 'light' ? (
        <>
          <Sun size="1.5rem" />
          <VisuallyHidden>Switch to dark mode</VisuallyHidden>
        </>
      ) : (
        <>
          <Moon size="1.5rem" />
          <VisuallyHidden>Switch to light mode</VisuallyHidden>
        </>
      )}
    </button>
  );
}

export default DarkLightToggle;
