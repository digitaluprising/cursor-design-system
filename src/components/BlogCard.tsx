import React from 'react';
import Typography from './Typography';
import ImageWrapper from './ImageWrapper';

interface BlogCardProps {
  title: string;
  date: string;
  imageSrc?: string;
  imageAlt?: string;
  href?: string;
  className?: string;
}

/**
 * Blog card component with Apple-level design sophistication
 * Features refined layouts, elegant interactions, and premium aesthetics
 */
const BlogCard: React.FC<BlogCardProps> = ({
  title,
  date,
  imageSrc,
  imageAlt = '',
  href = '#',
  className = '',
}) => {
  return (
    <article className={`group cursor-pointer ${className}`}>
      <a href={href} className="block">
        <div className="space-y-6">
          {/* Image */}
          <div className="relative overflow-hidden rounded-2xl bg-cursor-gray-light">
            {imageSrc ? (
              <ImageWrapper
                src={imageSrc}
                alt={imageAlt}
                width={400}
                height={250}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="h-64 bg-gradient-to-br from-cursor-gray-light to-cursor-gray flex items-center justify-center">
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-gradient-to-br from-cursor-orange/20 to-cursor-orange/10 rounded-2xl mx-auto flex items-center justify-center">
                    <div className="w-8 h-8 bg-cursor-orange/40 rounded-lg"></div>
                  </div>
                  <Typography variant="small" className="text-muted-foreground">
                    Blog Preview
                  </Typography>
                </div>
              </div>
            )}
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Read more indicator */}
            <div className="absolute top-4 right-4 w-8 h-8 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <svg className="w-4 h-4 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
          
          {/* Content */}
          <div className="space-y-3">
            <Typography variant="h5" className="text-foreground group-hover:text-cursor-orange transition-colors duration-200 leading-tight">
              {title}
            </Typography>
            <div className="flex items-center space-x-2">
              <Typography variant="caption" className="text-muted-foreground">
                {date}
              </Typography>
              <div className="w-1 h-1 bg-muted-foreground/50 rounded-full"></div>
              <Typography variant="caption" className="text-cursor-orange font-medium">
                Read more
              </Typography>
            </div>
          </div>
        </div>
      </a>
    </article>
  );
};

export default BlogCard;
