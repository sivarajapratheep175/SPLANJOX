import React, { useEffect, useState } from 'react';

export const ScrollProgressBar: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateScrollProgress = () => {
      const docEl = document.documentElement;
      const totalHeight = docEl.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) {
        setProgress(0);
        return;
      }
      const currentScroll = window.scrollY || docEl.scrollTop;
      const progressRatio = Math.min(1, Math.max(0, currentScroll / totalHeight));
      setProgress(progressRatio);
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateScrollProgress();
          ticking = false;
        });
        ticking = true;
      }
    };

    updateScrollProgress();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateScrollProgress, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateScrollProgress);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-transparent pointer-events-none"
      role="progressbar"
      aria-valuenow={Math.round(progress * 100)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Page scroll progress"
    >
      <div
        className="h-full bg-[#2563EB] transition-transform duration-75 ease-out will-change-transform"
        style={{
          transform: `scaleX(${progress})`,
          transformOrigin: 'left',
        }}
      />
    </div>
  );
};
