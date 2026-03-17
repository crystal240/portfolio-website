import React, { useEffect, useRef, useState } from 'react';
import AdaptiveImageGrid, { AdaptiveImageGridItem } from '@/components/AdaptiveImageGrid';
import MasonryGrid from '@/components/MasonryGrid';

/** 仅当进入视口时才挂载视频；preload="none" 在真正进视口并 play() 时再加载 */
const LazyVideo: React.FC<{
  src: string;
  title: string;
  /** 封面图 URL（上传到 Cloudflare 的某一帧截图），先显示再播视频 */
  poster?: string;
  className?: string;
}> = ({ src, title, poster, className = '' }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setShouldLoad(true);
        });
      },
      { rootMargin: '100px', threshold: 0.01 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldLoad) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target !== video) return;
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { rootMargin: '-20px', threshold: 0 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [shouldLoad]);

  return (
    <div ref={containerRef} className="w-full min-h-[120px] bg-muted flex items-center justify-center">
      {shouldLoad ? (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          className={className}
          muted
          loop
          playsInline
          autoPlay
          preload="none"
          title={title}
        />
      ) : (
        <div className="w-full aspect-video bg-muted/80 animate-pulse" aria-hidden />
      )}
    </div>
  );
};

const ThreeD: React.FC = () => {

  const staticItems: AdaptiveImageGridItem[] = [
    { src: 'https://img.crystaljupiter.com/threed/static/000.png', alt: '3D work 1', span: 1 },
    { src: 'https://img.crystaljupiter.com/threed/static/0000.png', alt: '3D work 2', span: 1 },
    { src: 'https://img.crystaljupiter.com/threed/static/3.png', alt: '3D work 4', span: 2 },
    { src: 'https://img.crystaljupiter.com/threed/static/6.png', alt: '3D work 3', span: 1 },
    { src: 'https://img.crystaljupiter.com/threed/static/7.png', alt: '3D work 5', span: 1 },
    { src: 'https://img.crystaljupiter.com/threed/static/4.png', alt: '3D work 6', span: 1 },
    { src: 'https://img.crystaljupiter.com/threed/static/5.png', alt: '3D work 7', span: 1 },
    { src: 'https://img.crystaljupiter.com/threed/static/2.png', alt: '3D work 8', span: 1 },
    { src: 'https://img.crystaljupiter.com/threed/static/1.png', alt: '3D work 9', span: 1 },
  ];

  // poster: 封面图 URL（上传到 Cloudflare 的某一帧截图），先显示封面，进视口后视频再加载并播放
  const animationItems: { src: string; title: string; poster?: string }[] = [
    { src: 'https://img.crystaljupiter.com/threed/animation/loop-1.mp4', title: 'Loop 1', poster: 'https://img.crystaljupiter.com/threed/posters/loop-1.jpg' },
    { src: 'https://img.crystaljupiter.com/threed/animation/loop-2.mp4', title: 'Loop 2', poster: 'https://img.crystaljupiter.com/threed/posters/loop-2.jpg' },
    { src: 'https://img.crystaljupiter.com/threed/animation/loop-3.mp4', title: 'Loop 3', poster: 'https://img.crystaljupiter.com/threed/posters/loop-3.jpg' },
    { src: 'https://img.crystaljupiter.com/threed/animation/loop-4.mp4', title: 'Loop 4', poster: 'https://img.crystaljupiter.com/threed/posters/loop-4.jpg' },
    { src: 'https://img.crystaljupiter.com/threed/animation/loop-5.mp4', title: 'Loop 5', poster: 'https://img.crystaljupiter.com/threed/posters/loop-5.jpg' },
    { src: 'https://img.crystaljupiter.com/threed/animation/loop-6.mp4', title: 'Loop 6', poster: 'https://img.crystaljupiter.com/threed/posters/loop-6.jpg' },
    { src: 'https://img.crystaljupiter.com/threed/animation/loop-7.mp4', title: 'Loop 7', poster: 'https://img.crystaljupiter.com/threed/posters/loop-7.jpg' },
    { src: 'https://img.crystaljupiter.com/threed/animation/loop-8.mp4', title: 'Loop 8', poster: 'https://img.crystaljupiter.com/threed/posters/loop-8.jpg' },
    { src: 'https://img.crystaljupiter.com/threed/animation/loop-9.mp4', title: 'Loop 9', poster: 'https://img.crystaljupiter.com/threed/posters/loop-9.jpg' },
    { src: 'https://img.crystaljupiter.com/threed/animation/loop-10.mp4', title: 'Loop 10', poster: 'https://img.crystaljupiter.com/threed/posters/loop-10.jpg' },
    { src: 'https://img.crystaljupiter.com/threed/animation/loop-11.mp4', title: 'Loop 11', poster: 'https://img.crystaljupiter.com/threed/posters/loop-11.jpg' },
    { src: 'https://img.crystaljupiter.com/threed/animation/loop-12.mp4', title: 'Loop 12', poster: 'https://img.crystaljupiter.com/threed/posters/loop-12.jpg' },
  ];

  return (
    <div className="page-transition min-h-screen pt-10 md:pt-24 pb-16">
      <div className="page-container">
        <div className="mb-12">
          <h1 className="editorial-heading text-6xl mb-4">3D</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            3D设计作品集
            <br />
            3D design works.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <section>
            <h2 className="editorial-heading text-2xl mb-6">静态设计 · Static Gallery</h2>
            <AdaptiveImageGrid items={staticItems} columns={2} />
          </section>

          <section>
            <h2 className="editorial-heading text-2xl mb-6">动态设计 · Animation</h2>
            <MasonryGrid columns={2}>
              {animationItems.map((item, index) => (
                <div
                  key={item.src}
                  className="masonry-item w-fit max-w-full overflow-hidden bg-muted retro-border border-2 border-border"
                >
                  {item.src.endsWith('.mp4') || item.src.endsWith('.webm') ? (
                    <LazyVideo
                      src={item.src}
                      title={item.title}
                      poster={item.poster}
                      className="w-full h-auto block"
                    />
                  ) : (
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-auto object-cover block"
                      loading={index === 0 ? 'eager' : 'lazy'}
                      fetchPriority={index === 0 ? 'high' : 'auto'}
                      decoding="async"
                    />
                  )}
                </div>
              ))}
            </MasonryGrid>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ThreeD;
