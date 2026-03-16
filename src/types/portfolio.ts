export interface Book {
  id: string;
  title: string;
  year: string;
  /** 列表页用的封面图 */
  coverImage: string;
  /**
   * 详情页顶部自定义展示图：不传则用 coverImage 单图；
   * 传数组则在此位置展示多图（如两图并排），不强制使用 coverImage
   */
  coverImages?: string[];
  /**
   * 可选：手动覆盖某些图片的展示跨度（span）。
   *
   * 规则：
   * - 1: 正常占 1 格（1×1）
   * - 2: 竖图占 2 行高（row-span-2）
   * - 3: 长横图占 2 列（col-span-2）
   */
  layout?: {
    interior?: Record<string, 1 | 2 | 3>;
    mockups?: Record<string, 1 | 2 | 3>;
    /**
     * Editorial 版式手动指定（优先级最高）。
     * - full: 100% 宽
     * - half: 约 50% 宽（两张一行的节奏）
     * - center: 约 70% 宽居中
     */
    interiorTypes?: Record<string, 'full' | 'half' | 'center' | 'quarter'>;
    mockupsTypes?: Record<string, 'full' | 'half' | 'center' | 'quarter'>;
  };
  size: string;
  pages: number;
  description: string;
  interiorSpreads: string[];
  mockups: string[];
}

export interface MerchItem {
  id: string;
  title: string;
  category: '周边设计' | '校园文创';
  thumbnail: string;
  designSheet?: string[];
  mainImageColumns?: 1 | 2 | 3;
  mockups?: string[];
  description?: string;
  details?: {
    client?: string;
    year?: string;
    materials?: string;
    dimensions?: string;
  };
  campusItems?: CampusMerchItem[];
}

export interface CampusMerchItem {
  id: string;
  designImage: string;
  productImage: string;
  title: string;
}

export interface ThreeDProject {
  id: string;
  title: string;
  staticImages: string[];
  videoUrl?: string;
  animationUrl?: string;
}

export interface AIGCProject {
  id: string;
  title: string;
  image: string;
  description?: string;
}

export interface Designer {
  name: string;
  portrait: string;
  bio: string;
  education: string[];
  skills: string[];
  tools: string[];
  email: string;
  social: {
    instagram?: string;
    behance?: string;
    linkedin?: string;
  };
}