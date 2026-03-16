import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MerchItem, CampusMerchItem } from '@/types/portfolio';
import MasonryGrid from '@/components/MasonryGrid';
import ImagePreview from '@/components/ImagePreview';

const CampusMerchDetail: React.FC = () => {
  const location = useLocation();
  const item = location.state?.item as MerchItem | undefined;
  const [hoveredItemId, setHoveredItemId] = useState<string | null>(null);

  console.log('CampusMerchDetail page rendered', item?.title);

  const defaultCampusItems: CampusMerchItem[] = [
    {
      id: 'item1',
      designImage: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&h=800&fit=crop',
      productImage: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&h=800&fit=crop',
      title: 'Campus Tote Bag'
    },
    {
      id: 'item2',
      designImage: 'https://images.unsplash.com/photo-1562887284-5a8e0c8a2e0f?w=600&h=700&fit=crop',
      productImage: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&h=700&fit=crop',
      title: 'Campus Notebook'
    },
    {
      id: 'item3',
      designImage: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&h=900&fit=crop',
      productImage: 'https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?w=600&h=900&fit=crop',
      title: 'Campus Water Bottle'
    },
    {
      id: 'item4',
      designImage: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=600&h=600&fit=crop',
      productImage: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600&h=600&fit=crop',
      title: 'Campus Poster'
    },
    {
      id: 'item5',
      designImage: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=750&fit=crop',
      productImage: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&h=750&fit=crop',
      title: 'Campus T-Shirt'
    },
    {
      id: 'item6',
      designImage: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=850&fit=crop',
      productImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=850&fit=crop',
      title: 'Campus Cap'
    }
  ];

  const displayItem: MerchItem = item || {
    id: '1',
    title: 'Campus Merchandise Collection',
    category: '校园文创',
    thumbnail: 'https://img.crystaljupiter.com/merch/campus/campuscollection.jpg',
    description: 'University branded merchandise featuring retro collegiate aesthetics',
    campusItems: defaultCampusItems
  };

  const campusItems = displayItem.campusItems || defaultCampusItems;

  return (
    <div className="page-transition min-h-screen pt-24 pb-16">
      <div className="page-container">
        <div className="text-center mb-16">
          <h1 className="editorial-heading text-6xl mb-4 vintage-text">{displayItem.title}</h1>
          {displayItem.description && (
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
              {displayItem.description}
            </p>
          )}
        </div>

        <MasonryGrid columns={3}>
          {campusItems.map((campusItem, index) => {
            const hasProductImage = Boolean(campusItem.productImage);
            const isHovered = hoveredItemId === campusItem.id && hasProductImage;
            const displayImage =
              isHovered && hasProductImage ? campusItem.productImage : campusItem.designImage;
            const currentLabel = isHovered && hasProductImage ? 'Product' : 'Design';

            const handleMouseEnter = hasProductImage
              ? () => setHoveredItemId(campusItem.id)
              : undefined;
            const handleMouseLeave = hasProductImage
              ? () => setHoveredItemId(null)
              : undefined;

            return (
              <div
                key={campusItem.id}
                className="masonry-item"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="relative overflow-hidden bg-muted border-4 retro-border border-border w-fit max-w-full">
                  <span
                    className="absolute left-2 top-2 z-10 rounded-sm bg-background/90 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-foreground border border-border"
                  >
                    {currentLabel}
                  </span>
                  <ImagePreview
                    src={displayImage}
                    alt={campusItem.title}
                    priority={index === 0}
                    className="w-full h-auto transition-all duration-500 block"
                  />
                </div>
              </div>
            );
          })}
        </MasonryGrid>
      </div>
    </div>
  );
};

export default CampusMerchDetail;