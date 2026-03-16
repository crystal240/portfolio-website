import React from 'react';
import Masonry from 'react-masonry-css';
import ImagePreview from '@/components/ImagePreview';

interface MasonryGalleryProps {
  images: string[];
  /**
   * desktop/tablet/mobile 的列数配置
   */
  columns?: { default: number; lg?: number; sm?: number; xs?: number };
  gutter?: number; // px
  onImageLoad?: (src: string) => React.ReactEventHandler<HTMLImageElement>;
}

const MasonryGallery: React.FC<MasonryGalleryProps> = ({
  images,
  columns = { default: 4, lg: 4, sm: 2, xs: 1 },
  gutter = 10,
  onImageLoad,
}) => {
  if (!images || images.length === 0) return null;

  const bp = {
    default: columns.default,
    1024: columns.lg ?? Math.min(4, columns.default),
    640: columns.sm ?? 2,
    0: columns.xs ?? 1,
  };

  // react-masonry-css 的推荐写法：容器用负 margin 抵消列 padding
  const pad = `${gutter}px`;
  const half = `${gutter}px`;

  return (
    <Masonry
      breakpointCols={bp}
      className="flex w-auto"
      columnClassName="bg-clip-padding"
      style={{ marginLeft: `-${half}` }}
    >
      {images.map((src, index) => (
        <div key={src} style={{ paddingLeft: pad, marginBottom: pad }}>
          <div className="w-full overflow-hidden bg-muted retro-border border-2 border-border">
            <ImagePreview
              src={src}
              alt={`Masonry image ${index + 1}`}
              priority={index === 0}
              onLoad={onImageLoad?.(src)}
              className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500 block"
            />
          </div>
        </div>
      ))}
    </Masonry>
  );
};

export default MasonryGallery;

