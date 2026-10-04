import React, { useEffect, useRef, useState } from 'react';

export default function CountUp({ value, decimals = 0, suffix = '' }) {
  // Keep the final value in pre-rendered HTML and for assistive technology.
  const [display, setDisplay] = useState(value);
  const element = useRef(null);
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    let observer;
    let started = false;
    const finish = () => {
      cancelAnimationFrame(frame);
      observer?.disconnect();
      setDisplay(value);
    };
    const start = () => {
      if (started) return;
      started = true;
      if (preference.matches) { finish(); return; }
      let startTime;
      const tick = time => {
        startTime ??= time;
        const progress = Math.min((time - startTime) / 1500, 1);
        setDisplay(progress === 1 ? value : value * (1 - Math.pow(1 - progress, 3)));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };
    const onPreferenceChange = () => { if (preference.matches) finish(); };
    if (preference.matches) finish();
    else {
      setDisplay(0);
      if ('IntersectionObserver' in window) {
        observer = new IntersectionObserver(entries => {
          if (entries.some(entry => entry.isIntersecting)) { start(); observer.disconnect(); }
        }, { threshold: 0.2 });
        observer.observe(element.current);
      } else start();
    }
    preference.addEventListener('change', onPreferenceChange);
    return () => {
      cancelAnimationFrame(frame);
      observer?.disconnect();
      preference.removeEventListener('change', onPreferenceChange);
    };
  }, [value, decimals]);
  const shown = Math.floor(display * 10 ** decimals) / 10 ** decimals;
  return <b ref={element} className="counterValue" aria-label={value.toFixed(decimals) + suffix}>
    <span className="counterDigits" aria-hidden="true">{shown.toFixed(decimals)}{suffix}</span>
  </b>;
}
