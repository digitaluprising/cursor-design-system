import React from 'react';
import Typography from './Typography';
import ImageWrapper from './ImageWrapper';

interface TestimonialCardProps {
  quote: string;
  author: string;
  title: string;
  avatar?: string;
  className?: string;
}

/**
 * Testimonial card component with Apple-level design sophistication
 * Features refined layouts, elegant typography, and premium aesthetics
 */
const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  title,
  avatar,
  className = '',
}) => {
  return (
    <div className={`group relative bg-cursor-gray-light/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 flex flex-col justify-between h-full hover:bg-cursor-gray-light/70 transition-all duration-300 ${className}`}>
      {/* Quote */}
      <div className="relative">
        <Typography variant="body" className="text-foreground leading-relaxed text-lg">
          &ldquo;{quote}&rdquo;
        </Typography>
        
        {/* Quote decoration */}
        <div className="absolute -top-2 -left-2 w-8 h-8 bg-cursor-orange/10 rounded-full flex items-center justify-center">
          <div className="w-3 h-3 bg-cursor-orange/40 rounded-full"></div>
        </div>
      </div>
      
      {/* Author */}
      <div className="flex items-center space-x-4 mt-6">
        <div className="relative">
          <div className="w-12 h-12 bg-gradient-to-br from-cursor-orange/20 to-cursor-orange/10 rounded-full flex-shrink-0 flex items-center justify-center ring-2 ring-border/50">
            {avatar ? (
              <ImageWrapper
                src={avatar}
                alt={author}
                width={48}
                height={48}
                className="rounded-full"
              />
            ) : (
              <div className="w-8 h-8 bg-cursor-orange/60 rounded-full"></div>
            )}
          </div>
          
          {/* Status indicator */}
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background"></div>
        </div>
        
        <div className="flex-1 min-w-0">
          <Typography variant="body" className="text-foreground font-semibold truncate !mb-0">
            {author}
          </Typography>
          <Typography variant="small" className="text-muted-foreground !mb-0">
            {title}
          </Typography>
        </div>
      </div>
      
      {/* Hover effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cursor-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
};

export default TestimonialCard;
