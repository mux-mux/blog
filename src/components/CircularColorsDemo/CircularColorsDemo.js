'use client';
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { Play, Pause, RotateCcw } from 'react-feather';
import { motion } from 'framer-motion';

import Card from '@/components/Card';
import VisuallyHidden from '@/components/VisuallyHidden';

import styles from './CircularColorsDemo.module.css';

const COLORS = [
  { label: 'red', value: 'hsl(348deg 100% 60%)' },
  { label: 'yellow', value: 'hsl(50deg 100% 55%)' },
  { label: 'blue', value: 'hsl(235deg 100% 65%)' },
];

function CircularColorsDemo() {
  const [animationState, setAnimationState] = useState('reseted');
  const [timeElapsed, setTimeElapsed] = useState(0);
  // TODO: This value should increase by 1 every second:

  function getColor({ timeElapsed }) {
    const colorIndex = timeElapsed % COLORS.length;

    return COLORS[colorIndex];
  }

  useEffect(() => {
    if (animationState !== 'playing') return;

    const intervalId = window.setInterval(() => {
      setTimeElapsed((currentElepased) => currentElepased + 1);
    }, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [animationState]);

  // TODO: This value should cycle through the colors in the
  // COLORS array:
  const selectedColor = getColor({ timeElapsed });

  return (
    <Card as="section" className={styles.wrapper}>
      <ul className={styles.colorsWrapper}>
        {COLORS.map((color, index) => {
          const isSelected = color.value === selectedColor.value;

          return (
            <li className={styles.color} key={index}>
              {isSelected && (
                <motion.div
                  className={styles.selectedColorOutline}
                  layout="position"
                />
              )}
              <div
                className={clsx(
                  styles.colorBox,
                  isSelected && styles.selectedColorBox
                )}
                style={{
                  backgroundColor: color.value,
                }}
              >
                <VisuallyHidden>{color.label}</VisuallyHidden>
              </div>
            </li>
          );
        })}
      </ul>

      <div className={styles.timeWrapper}>
        <dl className={styles.timeDisplay}>
          <dt>Time Elapsed</dt>
          <dd>{timeElapsed}</dd>
        </dl>
        <div className={styles.actions}>
          <button>
            <Play onClick={() => setAnimationState('playing')} />
            <VisuallyHidden>Play</VisuallyHidden>
          </button>
          <button>
            <RotateCcw
              onClick={() => {
                setAnimationState('reseted');
                setTimeElapsed(0);
              }}
            />
            <VisuallyHidden>Reset</VisuallyHidden>
          </button>
        </div>
      </div>
    </Card>
  );
}

export default CircularColorsDemo;
