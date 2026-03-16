import React from 'react';
import ImagePreview from '@/components/ImagePreview';

type Span = 1 | 2 | 3;
type EditorialType = 'full' | 'center' | 'half' | 'quarter';

interface ProjectGalleryProps {
  images: string[];
  /**
   * 1: 1×1（常规）
   * 2: 竖向强调（在 editorial flex 里主要影响 maxWidth，不做 row-span）
   * 3: 横向强调（占两列宽度）
   */
  getSpan?: (src: string) => Span;
  /**
   * Editorial type（优先级高于 getSpan）：
   * - full: 100% 宽，上下大留白
   * - center: 居中强调（约 60%）
   * - half: 半宽节奏（两张一行）
   * - quarter: 四分之一节奏（更小更紧凑）
   */
  getType?: (src: string) => EditorialType;
  onImageLoad?: (src: string) => React.ReactEventHandler<HTMLImageElement>;
  /**
   * 让布局更接近 editorial：基于 max-width 的多列 flex wrap
   */
  variant?: 'editorial' | 'editorialTypes';
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({
  images,
  getSpan,
  getType,
  onImageLoad,
  variant = 'editorialTypes',
}) => {
  if (!images || images.length === 0) return null;

  if (variant === 'editorial') {
    return (
      <div className="w-full">
        <div className="flex flex-wrap gap-1.5 sm:gap-2 items-start">
          {images.map((src, index) => {
            const span = getSpan?.(src) ?? 1;
            const isWide = span === 3;

            // editorial flex：
            // - mobile: 单列
            // - sm: 两列（wide 走满一行）
            // - lg: 四列（wide 约两列宽）
            const widthClass = isWide
              ? 'w-full sm:w-full lg:w-[calc(50%-0.5rem)]'
              : 'w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(25%-0.5rem)]';

            return (
              <div key={src} className={`${widthClass} min-w-0`}>
                <div className="w-full overflow-hidden bg-muted retro-border border-2 border-border">
                  <ImagePreview
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                    priority={index === 0}
                    onLoad={onImageLoad?.(src)}
                    className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500 block"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // editorialTypes：按 full / center / half / quarter 的 max-width 规则排版
  return (
    <div className="w-full">
      <div className="flex flex-wrap items-start">
        {images.map((src, index) => {
          const type: EditorialType =
            getType?.(src) ??
            (() => {
              const span = getSpan?.(src) ?? 1;
              if (span === 3) return 'center';
              return 'half';
            })();

          // 尺寸策略（更紧凑）：
          // - full：仍然 100% 宽，但减少上下留白
          // - center：缩到 62%，减少上下留白
          // - half：缩到 44%，减少上下留白
          // - quarter：缩到 22%，更紧凑
          const wrapperClass =
            type === 'full'
              ? 'w-full my-10'
              : type === 'center'
                ? 'w-[62%] my-8 mx-auto'
                : type === 'half'
                  ? 'w-[44%] my-5 mx-[1%]'
                  : 'w-[22%] my-4 mx-[1%]';

          return (
            <div key={src} className={`${wrapperClass} min-w-0`}>
              <div className="w-full overflow-hidden bg-muted retro-border border-2 border-border">
                <ImagePreview
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  priority={index === 0}
                  onLoad={onImageLoad?.(src)}
                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500 block"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectGallery;

