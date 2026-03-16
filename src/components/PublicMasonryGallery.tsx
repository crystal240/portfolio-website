import React from 'react';
import MasonryGrid from '@/components/MasonryGrid';

interface PublicMasonryGalleryProps {
  /**
   * public/images 下的文件名，例如 ['work1.jpg', 'work2.png']
   */
  filenames: string[];
  /**
   * 最大列数（桌面端）
   */
  columns?: number;
}

const PublicMasonryGallery: React.FC<PublicMasonryGalleryProps> = ({
  filenames,
  columns = 4,
}) => {
  if (!filenames || filenames.length === 0) {
    return null;
  }

  return (
    <MasonryGrid columns={columns}>
      {filenames.map((name, index) => (
        <div key={name} className="masonry-item overflow-hidden bg-muted retro-border border-2 border-border w-fit max-w-full">
          <img
            src={`/images/${name}`}
            alt={name}
            loading={index === 0 ? 'eager' : 'lazy'}
            fetchPriority={index === 0 ? 'high' : 'auto'}
            decoding="async"
            className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105 block"
          />
        </div>
      ))}
    </MasonryGrid>
  );
};

export default PublicMasonryGallery;

