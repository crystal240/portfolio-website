import React, { useMemo, useRef, useState } from 'react';
import MasonryGrid from '@/components/MasonryGrid';
import ImagePreview from '@/components/ImagePreview';
import { AIGCProject } from '@/types/portfolio';

type BeforeAfterSliderProps = {
  beforeSrc: string;
  afterSrc: string;
  alt: string;
  priority?: boolean;
  className?: string;
};

const clamp01 = (n: number) => Math.max(0, Math.min(1, n));

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeSrc,
  afterSrc,
  alt,
  priority = false,
  className = '',
}) => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [ratio, setRatio] = useState(0.5); // 0..1
  const [dragging, setDragging] = useState(false);

  const pct = useMemo(() => Math.round(ratio * 1000) / 10, [ratio]); // 0.0 - 100.0
  const styleVars = useMemo(() => {
    return { ['--ba-pct' as `--${string}`]: `${pct}%` } as React.CSSProperties;
  }, [pct]);

  const updateFromClientX = (clientX: number) => {
    const el = rootRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = clamp01((clientX - rect.left) / rect.width);
    setRatio(next);
  };

  return (
    <div
      ref={rootRef}
      className={`relative w-full select-none touch-none overflow-hidden ${className}`}
      onPointerDown={(e) => {
        (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
        setDragging(true);
        updateFromClientX(e.clientX);
      }}
      onPointerMove={(e) => {
        if (!dragging) return;
        updateFromClientX(e.clientX);
      }}
      onPointerUp={() => setDragging(false)}
      onPointerCancel={() => setDragging(false)}
      role="group"
      aria-label={`${alt} before after comparison`}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          setRatio((r) => clamp01(r - 0.02));
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          setRatio((r) => clamp01(r + 0.02));
        } else if (e.key === 'Home') {
          e.preventDefault();
          setRatio(0);
        } else if (e.key === 'End') {
          e.preventDefault();
          setRatio(1);
        }
      }}
      style={styleVars}
    >
      {/* before */}
      <img
        src={beforeSrc}
        alt={`${alt} - AI素材`}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
        className="w-full h-auto object-contain block"
        draggable={false}
      />

      {/* after */}
      <div
        className="absolute inset-0"
        style={{
          clipPath: `inset(0 ${100 - pct}% 0 0)`,
        }}
        aria-hidden="true"
      >
        <img
          src={afterSrc}
          alt={`${alt} - 海报应用`}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-contain block"
          draggable={false}
        />
      </div>

      {/* handle */}
      <div
        className="absolute top-0 bottom-0"
        style={{ left: `calc(var(--ba-pct) - 1px)` }}
        aria-hidden="true"
      >
        <div className="h-full w-[2px] bg-[#00B4DE]/80 shadow-[0_0_0_1px_rgba(0,0,0,0.15)]" />

        {/* draggable knob (visual only; dragging is handled by pointer events on root) */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -left-6 h-10 w-12 rounded-full bg-[#00B4DE] shadow-lg border border-white/40 flex items-center justify-center"
          style={{ cursor: dragging ? 'grabbing' : 'grab' }}
        >
          <div className="flex items-center gap-2 text-[11px] font-semibold text-white">
            <span aria-hidden="true">←</span>
            <span aria-hidden="true">→</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const AIGC: React.FC = () => {
  console.log('AIGC page rendered');

  const applicationProjects = [
    {
      id: 'app1',
      title: 'AI Brand Design System',
      designImage: 'https://img.crystaljupiter.com/aigc/practical/practical (1).png',
      posterImage: 'https://img.crystaljupiter.com/aigc/practical/practicaldone (1).jpg',
      description: 'Complete brand identity generated with AI'
    },
    {
      id: 'app2',
      title: 'Product Visualization AI',
      designImage: 'https://img.crystaljupiter.com/aigc/practical/practical (2).png',
      posterImage: 'https://img.crystaljupiter.com/aigc/practical/practicaldone (2).jpg',
      description: '3D product renders from AI prompts'
    }
  ];

  const staticProjects: AIGCProject[] = [
    {
      id: '1',
      title: 'Surreal Landscape',
      image: 'https://img.crystaljupiter.com/aigc/generated/aigc (1).jpg',  // 
      description: 'AI-generated dreamscape'
    },
    {
      id: '2',
      title: 'Abstract Forms',
      image: 'https://img.crystaljupiter.com/aigc/generated/aigc (2).jpg',  // 
      description: 'Geometric abstraction'
    },
    {
      id: '3',
      title: 'Digital Nature',
      image: 'https://img.crystaljupiter.com/aigc/generated/aigc (3).jpg',  // 
      description: 'Natural forms reimagined'
    },
    {
      id: '4',
      title: 'Color Study',
      image: 'https://img.crystaljupiter.com/aigc/generated/aigc (4).jpg',  // 
      description: 'Chromatic exploration'
    },
    {
      id: '5',
      title: 'Texture Synthesis',
      image: 'https://img.crystaljupiter.com/aigc/generated/aigc (5).jpg',  // 
      description: 'Material studies'
    },
    {
      id: '6',
      title: 'Pattern Generation',
      image: 'https://img.crystaljupiter.com/aigc/generated/aigc (6).jpg',  // 
      description: 'Algorithmic patterns'
    },
    {
      id: '7',
      title: 'AI-generated Image',
      image: 'https://img.crystaljupiter.com/aigc/generated/aigc (7).jpg',  // 
      description: 'AI-generated image'
    },
    {
      id: '8',
      title: 'AI-generated Image',
      image: 'https://img.crystaljupiter.com/aigc/generated/aigc (8).jpg',  // 
      description: 'AI-generated image'
    },
  ];

  return (
    <div className="page-transition min-h-screen pt-10 md:pt-24 pb-16">
      <div className="page-container">
        <div className="mb-12">
          <h1 className="editorial-heading text-6xl mb-4 vintage-text">AIGC</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            AIGC探索与应用
            <br />
            AI-generated content and experimental digital art explorations.
          </p>
        </div>

        <section className="mb-20">
          <div className="mb-8 flex items-center">
            <div className="h-px flex-1 bg-border"></div>
            <h2 className="editorial-heading text-3xl mx-6 vintage-text">实践应用 · Practical Applications</h2>
            <div className="h-px flex-1 bg-border"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {applicationProjects.map((project, index) => {
              return (
                <div
                  key={project.id}
                  className="group relative overflow-hidden bg-muted retro-border border-2 border-border w-fit max-w-full"
                >
                  <BeforeAfterSlider
                    beforeSrc={project.designImage}
                    afterSrc={project.posterImage}
                    alt={project.title}
                    priority={index === 0}
                    className="w-full h-auto"
                  />
                </div>
              );
            })}
          </div>
        </section>

        <section>
          <div className="mb-8 flex items-center">
            <div className="h-px flex-1 bg-border"></div>
            <h2 className="editorial-heading text-3xl mx-6 vintage-text">LibLib & Midjourney</h2>
            <div className="h-px flex-1 bg-border"></div>
          </div>

          <MasonryGrid columns={5}>
            {staticProjects.map((project, index) => (
              <div key={project.id} className="masonry-item group">
                <div className="relative overflow-hidden bg-muted retro-border border-2 border-border w-fit max-w-full">
                  <ImagePreview
                    src={project.image}
                    alt={project.title}
                    priority={index === 0}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105 block"
                  />
                </div>
              </div>
            ))}
          </MasonryGrid>
        </section>
      </div>
    </div>
  );
};

export default AIGC;