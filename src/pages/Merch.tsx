import React from 'react';
import { useNavigate } from 'react-router-dom';
import MasonryGrid from '@/components/MasonryGrid';
import MerchCard from '@/components/MerchCard';
import { MerchItem, CampusMerchItem } from '@/types/portfolio';

const Merch: React.FC = () => {
  const navigate = useNavigate();

  console.log('Merch page rendered');

  const merchDesignItems: MerchItem[] = [
    {
      id: '1',
      title: '票根&金属书签设计',
      category: '周边设计',
      thumbnail: 'https://img.crystaljupiter.com/merch/lotr/1.png',
      designSheet: ['https://img.crystaljupiter.com/merch/lotr/1-1.png'],
      mockups: [
        'https://img.crystaljupiter.com/merch/lotr/1 (1).jpg',
        'https://img.crystaljupiter.com/merch/lotr/1 (2).jpg',
      ],
      description: '为2021年北京指环王重映观影会设计的纪念票根以及金属书签',
      details: {
        materials: '木质票根，金属书签',
        dimensions: '票根：18cm × 6cm；书签：3cm × 12cm'
      }
    },
    {
      id: '2',
      title: '印章套组',
      category: '周边设计',
      thumbnail: 'https://img.crystaljupiter.com/merch/lotr/2.png',
      mainImageColumns: 3,
      designSheet: ['https://img.crystaljupiter.com/merch/lotr/2-1.png','https://img.crystaljupiter.com/merch/lotr/2-2.png','https://img.crystaljupiter.com/merch/lotr/2-3.png'],
      mockups: [
        'https://img.crystaljupiter.com/merch/lotr/2 (1).jpg',
        'https://img.crystaljupiter.com/merch/lotr/2 (2).jpg',
        'https://img.crystaljupiter.com/merch/lotr/2 (3).jpg',
        'https://img.crystaljupiter.com/merch/lotr/2 (4).jpg',
        'https://img.crystaljupiter.com/merch/lotr/2 (5).jpg',
        'https://img.crystaljupiter.com/merch/lotr/2 (6).jpg',
      ],
      description: '指环王夏尔、洛汗以及刚铎扁平线条设计',
      details: {
        materials: '印章&烫金方卡',
        dimensions: '10cm × 10cm'
      }
    },
    {
      id: '3',
      title: '邀请函',
      category: '周边设计',
      thumbnail: 'https://img.crystaljupiter.com/merch/lotr/3.png',
      designSheet: ['https://img.crystaljupiter.com/merch/lotr/3-1.png','https://img.crystaljupiter.com/merch/lotr/3-2.png'],
      mockups: [
        'https://img.crystaljupiter.com/merch/lotr/3 (1).jpg',
        'https://img.crystaljupiter.com/merch/lotr/3 (2).jpg',
        'https://img.crystaljupiter.com/merch/lotr/3 (3).jpg',
      ],
      description: '为2021年霍比特人观影会设计的音乐CD邀请函',
      details: {
        materials: '烫金封套、CD光盘',
        dimensions: '烫金封套：13cm × 13cm；CD光盘：12cm × 12cm'
      }
    },
    {
      id: '4',
      title: '套组',
      category: '周边设计',
      thumbnail: 'https://img.crystaljupiter.com/merch/lotr/4.png',
      designSheet: ['https://img.crystaljupiter.com/merch/lotr/4-1.png'],
      mockups: [
        'https://img.crystaljupiter.com/merch/lotr/4 (1).jpg',
        'https://img.crystaljupiter.com/merch/lotr/4 (2).jpg',
        'https://img.crystaljupiter.com/merch/lotr/4 (3).jpg',
        'https://img.crystaljupiter.com/merch/lotr/4 (4).jpg',
      ],
      description: '以指环王Frodo和Sam设计的周边套组',
      details: {
        materials: '烫金方卡、镭射亚克力钥匙扣、双闪拉丝银葱吧唧',
        dimensions: '烫金方卡：10cm × 10cm；亚克力钥匙扣：4m × 6cm；吧唧：5.8cm × 5.8cm'
      }
    }
  ];

  const campusItems: CampusMerchItem[] = [
    {
      id: 'item1',
      designImage: 'https://img.crystaljupiter.com/merch/campus/design/1.jpg',
      productImage: 'https://img.crystaljupiter.com/merch/campus/product/1.jpg',
      title: 'Campus Tote Bag'
    },
    {
      id: 'item2',
      designImage: 'https://img.crystaljupiter.com/merch/campus/design/2.jpg',
      productImage: '',
      title: 'Campus Notebook'
    },
    {
      id: 'item3',
      designImage: 'https://img.crystaljupiter.com/merch/campus/design/3.jpg',
      productImage: 'https://img.crystaljupiter.com/merch/campus/product/3.jpg',
      title: 'Campus Water Bottle'
    },
    {
      id: 'item4',
      designImage: 'https://img.crystaljupiter.com/merch/campus/design/4.jpg',
      productImage: 'https://img.crystaljupiter.com/merch/campus/product/4.jpg',
      title: 'Campus Poster'
    },
    {
      id: 'item5',
      designImage: 'https://img.crystaljupiter.com/merch/campus/design/5.jpg',
      productImage: 'https://img.crystaljupiter.com/merch/campus/product/5.jpg',
      title: 'Campus T-Shirt'
    },
    {
      id: 'item6',
      designImage: 'https://img.crystaljupiter.com/merch/campus/design/6.jpg',
      productImage: 'https://img.crystaljupiter.com/merch/campus/product/6.jpg',
      title: 'Campus Cap'
    },
    {
      id: 'item7',
      designImage: 'https://img.crystaljupiter.com/merch/campus/design/7.jpg',
      productImage: 'https://img.crystaljupiter.com/merch/campus/product/7.jpg',
      title: 'Campus Cap'
    }
  ];

  const campusMerchItem: MerchItem = {
    id: 'campus-1',
    title: 'Campus Merchandise Collection',
    category: '校园文创',
    thumbnail: 'https://img.crystaljupiter.com/merch/campus/campuscollection.jpg',
    description: 'University merchandise collection featuring apparel, stationery, and accessories.',
    campusItems: campusItems
  };

  const handleMerchClick = (item: MerchItem) => {
    console.log('Navigating to merch detail:', item.title);
    navigate('/merch-detail', { state: { item } });
  };

  const handleCampusMerchClick = () => {
    console.log('Navigating to campus merch detail');
    navigate('/campus-merch-detail', { state: { item: campusMerchItem } });
  };

  return (
    <div className="page-transition min-h-screen pt-24 pb-16">
      <div className="page-container">
        <div className="mb-12">
          <h1 className="editorial-heading text-6xl mb-4 vintage-text">Merch</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            IP周边设计&校园文创设计
            <br />
            Product design and IP merchandise collections.
          </p>
        </div>

        <section className="mb-20">
          <div className="flex items-center mb-8">
            <div className="h-px flex-1 bg-border"></div>
            <h2 className="editorial-heading text-3xl mx-6 vintage-text">周边设计 · IP Merch Design</h2>
            <div className="h-px flex-1 bg-border"></div>
          </div>
          <MasonryGrid columns={4}>
            {merchDesignItems.map((item, index) => (
              <MerchCard
                key={item.id}
                item={item}
                priority={index === 0}
                onClick={() => handleMerchClick(item)}
              />
            ))}
          </MasonryGrid>
        </section>

        <section>
          <div className="flex items-center mb-8">
            <div className="h-px flex-1 bg-border"></div>
            <h2 className="editorial-heading text-3xl mx-6 vintage-text">校园文创 · Campus Merch</h2>
            <div className="h-px flex-1 bg-border"></div>
          </div>
          <div className="cursor-pointer group w-fit max-w-full" onClick={handleCampusMerchClick}>
            <div className="retro-border border-4 border-border overflow-hidden w-fit max-w-2xl">
              <img
                src="https://img.crystaljupiter.com/merch/campus/campuscollection.jpg"
                alt="Campus Merch Collection"
                className="w-full h-auto shadow-custom group-hover:scale-105 transition-transform duration-500 block"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="text-muted-foreground mt-4 text-sm">
              校园文创，涵盖服帆布包、文具及明信片
              <br />
              University merchandise collection featuring bag, stationery, and postcards.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Merch;