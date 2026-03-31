/**
 * AnimateOnScroll
 * Lightweight IntersectionObserver-based reveal animation.
 * Uses inline style transitions — no external animation library needed.
 *
 * Props:
 *   delay     (ms)  — stagger offset before the transition begins
 *   direction       — 'up' | 'left' | 'right' | 'fade'
 *   distance  (px)  — how far the element travels (default 28)
 *   duration  (ms)  — transition duration (default 650)
 *   threshold       — IntersectionObserver threshold (default 0.12)
 *   className       — additional CSS classes on the wrapper div
 *   as              — element tag to render (default 'div')
 */

import { useRef, useEffect, useState } from 'react';

const AnimateOnScroll = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  distance = 28,
  duration = 650,
  threshold = 0.12,
  as: Tag = 'div',
}) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const hiddenTransform = {
    up: `translateY(${distance}px)`,
    left: `translateX(-${distance}px)`,
    right: `translateX(${distance}px)`,
    fade: 'scale(0.97)',
  }[direction] ?? `translateY(${distance}px)`;

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : hiddenTransform,
        transition: `opacity ${duration}ms cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </Tag>
  );
};

export default AnimateOnScroll;
