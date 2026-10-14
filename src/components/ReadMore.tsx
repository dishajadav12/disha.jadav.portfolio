'use client';
import React, { useEffect, useRef, useState } from 'react';

// Collapses children to `lines` rows of text with a Read more / Show less toggle.
export default function ReadMore({
  children,
  lines = 4,
}: {
  children: React.ReactNode;
  lines?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [maxH, setMaxH] = useState<number | null>(null);
  const [overflows, setOverflows] = useState(true);

  useEffect(() => {
    const measure = () => {
      const el = ref.current;
      const p = el?.querySelector('p');
      if (!el || !p) return;
      const lh = parseFloat(getComputedStyle(p).lineHeight);
      if (Number.isNaN(lh)) return;
      const h = lh * lines;
      setMaxH(h);
      setOverflows(el.scrollHeight > h + 1);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [lines]);

  const collapsed = !expanded && overflows && maxH !== null;

  return (
    <div className="mb-8">
      <div
        ref={ref}
        className="overflow-hidden"
        style={collapsed ? { maxHeight: maxH! } : undefined}
      >
        {children}
      </div>
      {overflows && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-2 text-xs md:text-base text-[rgba(0,255,255,1)] hover:underline underline-offset-4"
        >
          {expanded ? 'Show less' : 'Read more'}
        </button>
      )}
    </div>
  );
}
