import React from 'react';
import Typography from './Typography';
import Button from './Button';

interface HeroSectionProps {
  className?: string;
}

/**
 * Hero section with Apple-level visual impact and sophistication
 * Features refined typography, elegant spacing, and premium aesthetics
 */
const HeroSection: React.FC<HeroSectionProps> = ({ className = '' }) => {
  return (
    <section className={`relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden ${className}`}>
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-cursor-orange/5 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-cursor-orange/3 via-transparent to-transparent rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <Typography variant="h1" className="text-foreground mb-8 animate-fade-in">
            Full-time you, extraordinarily productive.
          </Typography>
          <Typography variant="large" className="mb-12 max-w-4xl mx-auto animate-slide-up">
            Cursor is the best way to code with AI.
          </Typography>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
            <Button variant="primary" size="xl">
              Get started for free
            </Button>
            <Button variant="outline" size="xl">
              Watch demo
            </Button>
          </div>
        </div>
        
        {/* Product Screenshot */}
        <div className="relative mb-20 animate-fade-in">
          <div className="relative bg-gradient-to-br from-cursor-gray-light to-cursor-gray rounded-3xl p-2 shadow-2xl shadow-black/50">
            <div className="bg-cursor-gray rounded-2xl p-8">
              <div className="flex h-[500px] rounded-xl overflow-hidden">
                {/* File Explorer */}
                <div className="w-72 bg-cursor-gray-medium rounded-l-xl p-6 border-r border-border/50">
                  <div className="space-y-3">
                    <div className="h-3 bg-muted-foreground/30 rounded w-3/4 animate-pulse"></div>
                    <div className="h-3 bg-muted-foreground/20 rounded w-1/2"></div>
                    <div className="h-3 bg-muted-foreground/20 rounded w-2/3"></div>
                    <div className="h-3 bg-cursor-orange/60 rounded w-1/3"></div>
                    <div className="h-3 bg-muted-foreground/20 rounded w-4/5"></div>
                  </div>
                </div>
                
                {/* Code Editor */}
                <div className="flex-1 bg-cursor-gray rounded-r-xl p-6">
                  <div className="space-y-4">
                    <div className="h-4 bg-muted-foreground/20 rounded w-full"></div>
                    <div className="h-4 bg-muted-foreground/20 rounded w-5/6"></div>
                    <div className="h-4 bg-cursor-orange/60 rounded w-3/4"></div>
                    <div className="h-4 bg-muted-foreground/20 rounded w-4/5"></div>
                    <div className="h-4 bg-muted-foreground/20 rounded w-2/3"></div>
                    <div className="h-4 bg-muted-foreground/20 rounded w-3/5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-cursor-orange/20 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-cursor-orange/30 rounded-full animate-pulse delay-1000"></div>
        </div>
        
        {/* Partner Logos */}
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 animate-fade-in">
          <div className="text-muted-foreground font-medium text-sm tracking-wide">Stripe</div>
          <div className="text-muted-foreground font-medium text-sm tracking-wide">OpenAI</div>
          <div className="text-muted-foreground font-medium text-sm tracking-wide">Linear</div>
          <div className="text-muted-foreground font-medium text-sm tracking-wide">Adobe</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
