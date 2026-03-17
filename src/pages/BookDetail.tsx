import React, { useCallback, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Book } from '@/types/portfolio';
import { Card, CardContent } from '@/components/ui/card';
import ImagePreview from '@/components/ImagePreview';
import MasonryGallery from '@/components/MasonryGallery';

const BookDetail: React.FC = () => {
  const location = useLocation();
  const book = location.state?.book as Book | undefined;

  console.log('BookDetail page rendered', book?.title);

  /**
   * 说明：
   * - 这个 defaultBook 仅用于“直接访问详情页但没有从 Books 传 state”时的兜底展示
   * - 真实项目里你可以改成从接口/本地 JSON 加载
   */
  const defaultBook: Book = {
    id: '1',
    title: 'The Art of Typography',
    year: '2024',
    coverImage: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=1200&h=1600&fit=crop',
    size: '210 × 297 mm',
    pages: 256,
    description: 'An exploration of modern typographic design principles and their application in contemporary editorial work.',
    interiorSpreads: [
      'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&h=600&fit=crop'
    ],
    mockups: [
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=800&h=600&fit=crop'
    ]
  };

  const displayBook = book || defaultBook;

  /**
   * 封面图：
   * - 如果详情页配置了 coverImages（多张），优先用 coverImages（例如 2 张左右并排）
   * - 否则回退为 coverImage 单张封面（单张时会自动更大一些）
   */
  const coverSources = useMemo(() => {
    const custom = displayBook.coverImages?.filter(Boolean) ?? [];
    return custom.length > 0 ? custom : [displayBook.coverImage];
  }, [displayBook.coverImage, displayBook.coverImages]);

  /**
   * 自适应网格布局（Interior / Mockups 通用）：
   * - 自动根据图片的横竖比决定是否“跨两格”（横版通常跨两格更舒服）
   * - 你也可以在数据里通过 displayBook.layout 手动覆盖 span（1 或 2）
   *
   * 为什么不用传统瀑布流 columns：
   * - columns 很适合“等宽瀑布流”，但无法做到“横图跨两格”
   * - 这里用 CSS Grid + dense，让横竖图混排更接近你想要的效果
   */
  const getMockupColSpan = useCallback(
    (src: string): 1 | 2 | 3 => {
      const manual = displayBook.layout?.mockups?.[src];
      if (manual === 1 || manual === 2 || manual === 3) return manual;
      return 1;
    },
    [displayBook.layout]
  );

  /** id 为 "2" 及之后：按图片数量决定列数（4→2列、6→3列、9→3列等），并支持单图跨多列 */
  const isId2OrLater = displayBook.id !== '1';
  const mockupCount = displayBook.mockups.length;
  const mockupColumns = (mockupCount === 3 ? 3 : Math.max(1, Math.min(4, Math.ceil(Math.sqrt(mockupCount))))) as 1 | 2 | 3 | 4;

  return (
    <div className="page-transition min-h-screen pt-10 md:pt-24 pb-16">
      <div className="page-container">
        <div className="text-center mb-10">
          {/* 标题缩小一些，让首屏能容纳更多图片内容 */}
          <h1 className="editorial-heading text-4xl md:text-5xl mb-2 vintage-text">
            {displayBook.title}
          </h1>
        </div>

        {/* 封面区 + 项目信息：container 始终 full，与 MerchDetail 一致，图片在容器内自适应缩放 */}
        <div className="mx-auto mb-12 w-full">
          {/* 封面：单张或多图均在 full 容器内，图片随容器放大缩小 */}
          <div
            className={
              coverSources.length >= 2
                ? 'grid gap-4 sm:gap-6 w-full grid-cols-1 md:grid-cols-2 items-stretch'
                : 'w-full flex justify-center'
            }
          >
            {coverSources.map((src, i) => (
              <div
                key={i}
                className={
                  coverSources.length >= 2
                    ? 'w-full min-w-0 overflow-hidden flex items-center justify-center'
                    : 'w-full max-w-full'
                }
              >
                <ImagePreview
                  src={src}
                  alt={`${displayBook.title} cover ${i + 1}`}
                  priority={i === 0}
                  className="w-full h-auto max-w-full object-contain block shadow-custom retro-border border-4 border-border"
                />
              </div>
            ))}
          </div>

          {/* 项目信息：无边框，宽度与上方封面 container 一致 */}
          <Card className="border-0 shadow-none bg-transparent mt-8">
            <CardContent className="p-0">
              <dl className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-3 text-sm">
                <div>
                  <dt className="text-muted-foreground uppercase tracking-wider font-bold">Year</dt>
                  <dd className="text-foreground font-medium">{displayBook.year}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground uppercase tracking-wider font-bold">Size</dt>
                  <dd className="text-foreground font-medium">{displayBook.size}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground uppercase tracking-wider font-bold">Pages</dt>
                  <dd className="text-foreground font-medium">{displayBook.pages}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground uppercase tracking-wider font-bold">Type</dt>
                  <dd className="text-foreground font-medium">书籍</dd>
                </div>
              </dl>
              <p className="mt-3 text-muted-foreground text-sm leading-tight whitespace-pre-line">
                {displayBook.description}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16">
          <div className="flex items-center mb-12">
            <div className="h-px flex-1 bg-border"></div>
            <h2 className="editorial-heading text-3xl mx-6 vintage-text">内页展示 Interior</h2>
            <div className="h-px flex-1 bg-border"></div>
          </div>
          {/* 内页：参考 helenjee.com 首页的紧凑瀑布流（masonry） */}
          <MasonryGallery
            images={displayBook.interiorSpreads}
            columns={{ default: 4, lg: 4, sm: 2, xs: 1 }}
            gutter={10}
          />
        </div>

        <div className="mb-16">
          <div className="flex items-center mb-12">
            <div className="h-px flex-1 bg-border"></div>
            <h2 className="editorial-heading text-3xl mx-6 vintage-text">实物展示 Mockups</h2>
            <div className="h-px flex-1 bg-border"></div>
          </div>
          {/* 实物：id 为 1 保持原 3 列 + col-span；id 为 2 及之后为 4→2×2、6→3×2、9→3×3 等数学网格，且支持跨列 */}
          {isId2OrLater ? (
            <div
              className={[
                'grid gap-1.5 sm:gap-2 items-stretch [grid-auto-flow:dense]',
                mockupColumns === 1 && 'grid-cols-1',
                mockupColumns === 2 && 'grid-cols-2',
                mockupColumns === 3 && 'grid-cols-3',
                mockupColumns === 4 && 'grid-cols-4',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              {displayBook.mockups.map((src, index) => {
                const span = Math.min(getMockupColSpan(src), mockupColumns) as 1 | 2 | 3 | 4;
                return (
                  <div
                    key={`${src}-${index}`}
                    className={[
                      'min-w-0',
                      span === 1 && 'col-span-1',
                      span === 2 && 'col-span-2',
                      span === 3 && 'col-span-3',
                      span === 4 && 'col-span-4',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                  >
                    <div className="w-full overflow-hidden bg-muted retro-border border-2 border-border">
                      <ImagePreview
                        src={src}
                        alt={`Book mockup ${index + 1}`}
                        className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500 block"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1.5 sm:gap-2 [grid-auto-flow:dense] items-start"
            >
              {displayBook.mockups.map((src, index) => {
                const span = getMockupColSpan(src);
                const smSpan: 1 | 2 = span === 3 ? 2 : span;
                return (
                  <div
                    key={src}
                    className={[
                      'min-w-0',
                      smSpan === 2 ? 'sm:col-span-2' : '',
                      span === 2 ? 'lg:col-span-2' : '',
                      span === 3 ? 'lg:col-span-3' : '',
                    ].join(' ')}
                  >
                    <div className="w-full overflow-hidden bg-muted retro-border border-2 border-border">
                      <ImagePreview
                        src={src}
                        alt={`Book mockup ${index + 1}`}
                        className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500 block"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookDetail;