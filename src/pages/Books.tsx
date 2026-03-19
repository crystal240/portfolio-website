import React from 'react';
import { useNavigate } from 'react-router-dom';
import MasonryGrid from '@/components/MasonryGrid';
import BookCard from '@/components/BookCard';
import { Book } from '@/types/portfolio';

const Books: React.FC = () => {
  const navigate = useNavigate();

  console.log('Books page rendered');

  const books: Book[] = [
    {
      id: '1',
      title: '《千年古痕·沈阳留痕》',
      year: '2026年第二版',
      coverImage: 'https://img.crystaljupiter.com/books/shen_history/cover.jpg',
      coverImages: [
        'https://img.crystaljupiter.com/books/shen_history/cover (1).jpg',
        'https://img.crystaljupiter.com/books/shen_history/cover (2).jpg', 
      ],
      layout: {
        // 如果你希望某些图“强制更大”，就在这里把对应 src 映射为 2
        interior: {
          'https://img.crystaljupiter.com/books/shen_history/interior (4).png': 2,
        },
        mockups: {
          // 第三张图占两列（col-span-2）
          'https://img.crystaljupiter.com/books/shen_history/mockup (1).jpg': 2,
          'https://img.crystaljupiter.com/books/shen_history/mockup (2).jpg': 1,
          'https://img.crystaljupiter.com/books/shen_history/mockup (3).jpg': 1,
          'https://img.crystaljupiter.com/books/shen_history/mockup (4).jpg': 1,
          'https://img.crystaljupiter.com/books/shen_history/mockup (5).jpg': 1,
        },
        // mockupsTypes: {
        //   '/images/books/shen_history/mockup (1).jpg': 'full',
        //   '/images/books/shen_history/mockup (2).jpg': 'half',
        //   '/images/books/shen_history/mockup (3).jpg': 'half',
        //   '/images/books/shen_history/mockup (4).jpg': 'quarter',
        // },
      },
      size: '210 × 285 mm',
      pages: 305,
      // 说明：这里用 \u00A0（不换行空格）来实现“肉眼可见的多个空格”
      description: '收录千年历史之都——沈阳的城市文化古迹的历史图册\n\n●\u00A0\u00A0包括沈阳故宫、张氏帅府等著名景点\u00A0\u00A0●\u00A0\u00A0封面采用UV工艺\u00A0\u00A0●\u00A0\u00A0内页采用铜版纸印刷',
      interiorSpreads: [
        'https://img.crystaljupiter.com/books/shen_history/interior (1).png',
        'https://img.crystaljupiter.com/books/shen_history/interior (2).png',
        'https://img.crystaljupiter.com/books/shen_history/interior (3).png',
        'https://img.crystaljupiter.com/books/shen_history/interior (4).png',
        'https://img.crystaljupiter.com/books/shen_history/interior (5).png',
        'https://img.crystaljupiter.com/books/shen_history/interior (6).png',
        'https://img.crystaljupiter.com/books/shen_history/interior (7).png',
        'https://img.crystaljupiter.com/books/shen_history/interior (8).png',
      ],
      mockups: [
        'https://img.crystaljupiter.com/books/shen_history/mockup (1).jpg',
        'https://img.crystaljupiter.com/books/shen_history/mockup (2).jpg',
        'https://img.crystaljupiter.com/books/shen_history/mockup (3).jpg',
        'https://img.crystaljupiter.com/books/shen_history/mockup (4).jpg',
        'https://img.crystaljupiter.com/books/shen_history/mockup (5).jpg',
      ]
    },
    {
      id: '2',
      title: '《情满青山》',
      year: '2024',
      coverImage: 'https://img.crystaljupiter.com/books/feelingfillsmountain/cover.jpg',
      coverImages: [
        'https://img.crystaljupiter.com/books/feelingfillsmountain/cover (1).jpg',
      ],
      
      size: '170 × 240 mm',
      pages: 620,
      description: '作为地质学家的作者将内心的山河情怀与科考工作印记相融，编撰成人生的回忆录\n\n●\u00A0\u00A0封面以作者肖像为核心元素，低饱和绿色为主色调，风格化处理作者拍摄的山水，强化书籍整体风格\u00A0\u00A0●\u00A0\u00A0方脊精装带护封，珠光320g环衬',
      interiorSpreads: [
        'https://img.crystaljupiter.com/books/feelingfillsmountain/interior (1).png',
        'https://img.crystaljupiter.com/books/feelingfillsmountain/interior (2).png',
        'https://img.crystaljupiter.com/books/feelingfillsmountain/interior (3).png',
        'https://img.crystaljupiter.com/books/feelingfillsmountain/interior (4).png',
      ],
      mockups: [
        'https://img.crystaljupiter.com/books/feelingfillsmountain/mockup (1).jpg',
        'https://img.crystaljupiter.com/books/feelingfillsmountain/mockup (2).jpg',
        'https://img.crystaljupiter.com/books/feelingfillsmountain/mockup (3).jpg',
        'https://img.crystaljupiter.com/books/feelingfillsmountain/mockup (4).jpg',
      ]
    },
    {
      id: '3',
      title: '《果然和尚》',
      year: '2026',
      coverImage: 'https://img.crystaljupiter.com/books/guoran/cover.jpg',
      coverImages: [
        'https://img.crystaljupiter.com/books/guoran/cover (1).jpg',
      ],
      size: '170 × 240 mm',
      pages: 306,
      description: '一部关于一代高僧的生平的记述\n\n●\u00A0\u00A0结合高僧、佛教主题设计，强化书籍整体风格与视觉识别\u00A0\u00A0●\u00A0\u00A0山水画素材由AI生成',
      interiorSpreads: [
        'https://img.crystaljupiter.com/books/guoran/interior (1).png',
        'https://img.crystaljupiter.com/books/guoran/interior (2).png',
        'https://img.crystaljupiter.com/books/guoran/interior (3).png',
        'https://img.crystaljupiter.com/books/guoran/interior (4).png',
      ],
      mockups: [
        'https://img.crystaljupiter.com/books/guoran/mockup (1).jpg',
        'https://img.crystaljupiter.com/books/guoran/mockup (2).jpg',
        'https://img.crystaljupiter.com/books/guoran/mockup (3).jpg',
        'https://img.crystaljupiter.com/books/guoran/mockup (4).jpg',
      ]
    },
    {
      id: '4',
      title: '《云岭恩仇录》',
      year: '2025',
      coverImage: 'https://img.crystaljupiter.com/books/cloudmountain/cover.jpg',
      coverImages: [
        'https://img.crystaljupiter.com/books/cloudmountain/cover (1).jpg',
        'https://img.crystaljupiter.com/books/cloudmountain/cover (2).jpg',
      ],
      size: '170 × 240 mm',
      pages: 224,
      description: '一部章回体小说排版，叙写清朝辽东山村三户人家之间波澜起伏的生活\n\n●\u00A0\u00A0封面设计采用展示小山村的山水画作为主视觉语言，点明故事背景，增强视觉识别',
      interiorSpreads: [
        'https://img.crystaljupiter.com/books/cloudmountain/interior (1).png',
        'https://img.crystaljupiter.com/books/cloudmountain/interior (2).png',
        'https://img.crystaljupiter.com/books/cloudmountain/interior (3).png',
        'https://img.crystaljupiter.com/books/cloudmountain/interior (4).png',
      ],
      mockups: [
        'https://img.crystaljupiter.com/books/cloudmountain/mockup (1).jpg',
        'https://img.crystaljupiter.com/books/cloudmountain/mockup (2).jpg',
        'https://img.crystaljupiter.com/books/cloudmountain/mockup (3).jpg',
      ]
    },
    {
      id: '5',
      title: '《三清斋余墨》',
      year: '2023',
      coverImage: 'https://img.crystaljupiter.com/books/sanqingzhai/cover.jpg',
      coverImages: [
        'https://img.crystaljupiter.com/books/sanqingzhai/cover (1).jpg',
        'https://img.crystaljupiter.com/books/sanqingzhai/cover (2).jpg',
      ],
      size: '170 × 240 mm',
      pages: 140,
      description: '作者的自传文稿收录集印成册\n\n●\u00A0\u00A0以莲花和墨点作为主视觉元素，凸显作者对人生的从容淡泊',
      interiorSpreads: [
        'https://img.crystaljupiter.com/books/sanqingzhai/interior (1).png',
        'https://img.crystaljupiter.com/books/sanqingzhai/interior (2).png',
        'https://img.crystaljupiter.com/books/sanqingzhai/interior (3).png',
        'https://img.crystaljupiter.com/books/sanqingzhai/interior (4).png',
      ],
      mockups: [
        'https://img.crystaljupiter.com/books/sanqingzhai/mockup (1).jpg',
        'https://img.crystaljupiter.com/books/sanqingzhai/mockup (2).jpg',
        'https://img.crystaljupiter.com/books/sanqingzhai/mockup (3).jpg',
      ]
    },
    {
      id: '6',
      title: '《生命问答》',
      year: '2025',
      coverImage: 'https://img.crystaljupiter.com/books/asklivings/cover.jpg',
      coverImages: [
        'https://img.crystaljupiter.com/books/asklivings/cover (1).jpg',
      ],
      size: '170 × 240 mm',
      pages: 308,
      description: '作者以对话的形式，与AI探讨了对生命与医学之间关系的哲学思考与探索\n\n●\u00A0\u00A0封面以电路人形与 DNA 双螺旋为视觉符号，黄色和蓝色为主色系，直观突出 “与AI讨论生命” 的探索感',
      interiorSpreads: [
        'https://img.crystaljupiter.com/books/asklivings/interior (1).png',
        'https://img.crystaljupiter.com/books/asklivings/interior (2).png',
        'https://img.crystaljupiter.com/books/asklivings/interior (3).png',
        'https://img.crystaljupiter.com/books/asklivings/interior (4).png',
      ],
      mockups: [
        'https://img.crystaljupiter.com/books/asklivings/mockup (1).jpg',
        'https://img.crystaljupiter.com/books/asklivings/mockup (2).jpg',
        'https://img.crystaljupiter.com/books/asklivings/mockup (3).jpg',
        'https://img.crystaljupiter.com/books/asklivings/mockup (4).jpg',
      ]
    },
    {
      id: '7',
      title: '《军魂颂》系列丛书',
      year: '2023',
      coverImage: 'https://img.crystaljupiter.com/books/junhun/cover.jpg',
      coverImages: [
        'https://img.crystaljupiter.com/books/junhun/cover (1).jpg',
      ],
      size: '190 × 250 mm',
      pages: 144,
      description: '退伍老兵合编而成，以战争时期的回忆、战后对社会主义事业的建设工作和退休后对生活的追求三个阶段作为系列成书\n\n●\u00A0\u00A0封面以长城为主视觉元素，采用深蓝色为主色调，强化书籍整体风格与视觉识别\u00A0\u00A0●\u00A0\u00A0内页采用铜版纸印刷',
      interiorSpreads: [
        'https://img.crystaljupiter.com/books/junhun/interior (1).png',
        'https://img.crystaljupiter.com/books/junhun/interior (2).png',
        'https://img.crystaljupiter.com/books/junhun/interior (3).png',
        'https://img.crystaljupiter.com/books/junhun/interior (4).png',
      ],
      mockups: [
        'https://img.crystaljupiter.com/books/junhun/mockup (1).jpg',
        'https://img.crystaljupiter.com/books/junhun/mockup (2).jpg',
        'https://img.crystaljupiter.com/books/junhun/mockup (3).jpg',
        'https://img.crystaljupiter.com/books/junhun/mockup (4).jpg',
        'https://img.crystaljupiter.com/books/junhun/mockup (5).jpg',
        'https://img.crystaljupiter.com/books/junhun/mockup (6).jpg',
      ]
    }
  ];

  const handleBookClick = (book: Book) => {
    console.log('Navigating to book detail:', book.title);
    navigate('/book', { state: { book } });
  };

  return (
    <div className="page-transition min-h-screen pt-10 md:pt-24 pb-16">
      <div className="page-container">
        <div className="mb-12">
          <h1 className="editorial-heading text-6xl mb-4">Books</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
          书籍装帧设计
          <br />
          A collection of editorial design projects spanning various subjects and formats.
          </p>
        </div>

        <MasonryGrid columns={5}>
          {books.map((book, index) => (
            <BookCard
              key={book.id}
              book={book}
              priority={index === 0}
              onClick={() => handleBookClick(book)}
            />
          ))}
        </MasonryGrid>
      </div>
    </div>
  );
};

export default Books;