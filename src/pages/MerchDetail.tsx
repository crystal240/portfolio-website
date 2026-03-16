import React from 'react';
import { useLocation } from 'react-router-dom';
import { MerchItem } from '@/types/portfolio';
import { Card, CardContent } from '@/components/ui/card';
import ImagePreview from '@/components/ImagePreview';
import MasonryGallery from '@/components/MasonryGallery';

const MerchDetail: React.FC = () => {
  const location = useLocation();
  const item = location.state?.item as MerchItem | undefined;

  console.log('MerchDetail page rendered', item?.title);

  const defaultItem: MerchItem = {
    id: '1',
    title: 'Retro Tote Bag Collection',
    category: '周边设计',
    thumbnail: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=600&fit=crop',
    designSheet:['https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=1200&h=800&fit=crop'],
    mockups: [
      'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1590739225048-2d6b6c79c6d8?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&h=600&fit=crop'
    ],
    description: 'A vintage-inspired tote bag collection featuring bold typography and retro color palettes.',
    details: {
      materials: 'Canvas, Cotton, Leather trim',
      dimensions: '38cm × 42cm × 10cm'
    }
  };

  const displayItem = item || defaultItem;

  /** 主图：单张 designSheet，与 BookDetail 单封面一致 */
  const mainImageSrc = (Array.isArray(displayItem.designSheet) && displayItem.designSheet.length > 0)
  ? displayItem.designSheet
  : [displayItem.thumbnail];

    /** 多图时主图列数：优先用数据里的 mainImageColumns，否则默认 2 */
    const mainImageCols = displayItem.mainImageColumns ?? 2;

  return (
    <div className="page-transition min-h-screen pt-24 pb-16">
      <div className="page-container">
        <div className="text-center mb-10">
          <h1 className="editorial-heading text-4xl md:text-5xl mb-2 vintage-text">
            {displayItem.title}
          </h1>
        </div>

         {/* 主图区 + 项目信息：container 始终 full，图片在容器内自适应缩放 */}
         <div className="mx-auto mb-12 w-full">
          {/* 主图：单张或多图均在 full 容器内，图片随容器放大缩小 */}
          <div
            className={
              mainImageSrc.length >= 2
                ? `grid gap-4 sm:gap-6 w-full grid-cols-1 ${
                    mainImageCols === 3 ? 'sm:grid-cols-2 md:grid-cols-3' : 'md:grid-cols-2'
                  } items-stretch`
                : 'w-full flex justify-center'
            }
          >
            {mainImageSrc.map((src, i) => (
              <div
                key={i}
                className={
                  mainImageSrc.length >= 2
                    ? 'w-full min-w-0 overflow-hidden flex items-center justify-center'
                    : 'w-full max-w-full'
                }
              >
                <ImagePreview
                  src={src}
                  alt={displayItem.title + (mainImageSrc.length > 1 ? ` ${i + 1}` : '')}
                  priority={i === 0}
                  className="w-full h-auto max-w-full object-contain block shadow-custom retro-border border-4 border-border"
                />
              </div>
            ))}
          </div>

          {/* 项目信息：无边框、透明，与 BookDetail 一致 */}
          <Card className="border-0 shadow-none bg-transparent mt-8">
            <CardContent className="p-0">
              <dl className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-3 text-sm">
                <div>
                  <dt className="text-muted-foreground uppercase tracking-wider font-bold">Title</dt>
                  <dd className="text-foreground font-medium">{displayItem.title}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground uppercase tracking-wider font-bold">Category</dt>
                  <dd className="text-foreground font-medium capitalize">{displayItem.category}</dd>
                </div>
                {displayItem.details?.materials != null && (
                  <div>
                    <dt className="text-muted-foreground uppercase tracking-wider font-bold">Materials</dt>
                    <dd className="text-foreground font-medium">{displayItem.details.materials}</dd>
                  </div>
                )}
                {displayItem.details?.dimensions != null && (
                  <div>
                    <dt className="text-muted-foreground uppercase tracking-wider font-bold">Dimensions</dt>
                    <dd className="text-foreground font-medium">{displayItem.details.dimensions}</dd>
                  </div>
                )}
              </dl>
              {displayItem.description && (
                <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                  {displayItem.description}
                </p>
              )}
            </CardContent>
          </Card>
        </div>

        {/* 实物展示 Mockups：瀑布流自适应布局 */}
        {displayItem.mockups && displayItem.mockups.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center mb-12">
              <div className="h-px flex-1 bg-border"></div>
              <h2 className="editorial-heading text-3xl mx-6 vintage-text">Product Mockups</h2>
              <div className="h-px flex-1 bg-border"></div>
            </div>
            <MasonryGallery
              images={displayItem.mockups}
              columns={{
                default: Math.min(3, displayItem.mockups.length),
                lg: Math.min(3, displayItem.mockups.length),
                sm: 2,
                xs: 1,
              }}
              gutter={8}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MerchDetail;
