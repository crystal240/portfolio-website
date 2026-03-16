import React, { useState } from 'react';
import { Book } from '@/types/portfolio';

interface BookCardProps {
  book?: Book;
  onClick?: () => void;
  priority?: boolean;
}

const BookCard: React.FC<BookCardProps> = ({
  book = {
    id: '1',
    title: 'Sample Book',
    year: '2024',
    coverImage: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&h=800&fit=crop',
    size: '210 × 297 mm',
    pages: 128,
    description: 'A beautiful book design project',
    interiorSpreads: [],
    mockups: []
  },
  onClick = () => console.log('Book clicked:', book?.title),
  priority= false,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  console.log('BookCard rendered:', book.title);

  return (
    <div
      data-cmp="BookCard"
      className="masonry-item cursor-pointer group"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden bg-muted">
        <img
          src={book.coverImage}
          alt={book.title}
          className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding="async"
        />

        <div
          className={`absolute inset-0 bg-primary/90 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="text-center px-6">
            <h3 className="editorial-heading text-2xl text-primary-foreground mb-2">
              {book.title}
            </h3>
            <p className="text-primary-foreground/80 text-sm">
              {book.year}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;