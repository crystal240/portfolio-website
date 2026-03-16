import React from 'react';

interface ImageGalleryProps {
  images?: string[];
  columns?: number;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images = [
    'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=600&h=800&fit=crop'
  ],
  columns = 2
}) => {
  console.log('ImageGallery rendered with', images.length, 'images');

  return (
    <div
      data-cmp="ImageGallery"
      className="grid gap-6"
      style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
    >
      {images.map((image, index) => (
        <div key={index} className="overflow-hidden bg-muted">
          <img
            src={image}
            alt={`Gallery image ${index + 1}`}
            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
            loading={index === 0 ? 'eager' : 'lazy'}
            fetchPriority={index === 0 ? 'high' : 'auto'}
            decoding="async"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;