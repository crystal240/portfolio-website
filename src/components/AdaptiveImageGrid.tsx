import React from 'react';
import ImagePreview from '@/components/ImagePreview';

export interface AdaptiveImageGridItem {
  src: string;
  alt: string;
  /** 横图可占两格，默认 1 */
  span?: 1 | 2;
}

interface AdaptiveImageGridProps {
  items: AdaptiveImageGridItem[];
  /** 桌面端列数（影响 span 2 的宽度） */
  columns?: number;
  itemClassName?: string;
  imageClassName?: string;
}

const AdaptiveImageGrid: React.FC<AdaptiveImageGridProps> = ({
  items,
  columns = 2,
  itemClassName = '',
  imageClassName = 'w-full h-auto object-cover block',
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 w-full">
      {items.map((item, index) => (
        <div
          key={index}
          className={`${item.span === 2 ? 'sm:col-span-2' : ''} min-w-0 w-full`}
        >
          <div className="overflow-hidden retro-border border-2 border-border bg-muted w-fit max-w-full">
            <ImagePreview
              src={item.src}
              alt={item.alt}
              priority={index === 0}
              className={`${imageClassName} hover:scale-105 transition-transform duration-500`}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdaptiveImageGrid;
