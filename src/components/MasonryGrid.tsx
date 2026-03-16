import React, { useEffect, useState } from 'react';

interface MasonryGridProps {
  children?: React.ReactNode;
  /**
   * 最大列数（桌面端），实际列数会根据屏幕宽度自适应调整
   */
  columns?: number;
  gap?: string;
}

const MasonryGrid: React.FC<MasonryGridProps> = ({
  children = <div className="bg-muted h-64 rounded">Sample Item</div>,
  columns = 3,
  gap = '1rem'
}) => {
  const [columnCount, setColumnCount] = useState<number>(columns);

  useEffect(() => {
    const calculateColumns = () => {
      if (typeof window === 'undefined') return;

      const width = window.innerWidth;
      let nextColumns = 1;

      if (width >= 1280) {
        nextColumns = columns;
      } else if (width >= 1024) {
        nextColumns = Math.min(4, columns);
      } else if (width >= 768) {
        nextColumns = Math.min(3, columns);
      } else {
        nextColumns = 1;
      }

      setColumnCount(nextColumns);
    };

    calculateColumns();
    window.addEventListener('resize', calculateColumns);

    return () => {
      window.removeEventListener('resize', calculateColumns);
    };
  }, [columns]);

  return (
    <div
      data-cmp="MasonryGrid"
      className="masonry-grid"
      style={{
        columnCount,
        columnGap: gap,
      }}
    >
      {children}
    </div>
  );
};

export default MasonryGrid;