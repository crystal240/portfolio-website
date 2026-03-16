import React from 'react';
import { MerchItem } from '@/types/portfolio';

interface MerchCardProps {
  item?: MerchItem;
  onClick?: () => void;
  /** 首屏优先：列表第一项时传 true */
  priority?: boolean;
}

const MerchCard: React.FC<MerchCardProps> = ({
  item = {
    id: '1',
    title: 'Sample Merch',
    category: 'design',
    thumbnail: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=600&fit=crop',
    description: 'A merch design project'
  },
  onClick = () => console.log('Merch clicked:', item?.title),
  priority = false,
}) => {
  return (
    <div
      data-cmp="MerchCard"
      className="masonry-item cursor-pointer group"
      onClick={onClick}
    >
      <div className="relative overflow-hidden bg-muted w-fit max-w-full">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105 block"
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding="async"
        />
      </div>
    </div>
  );
};

export default MerchCard;