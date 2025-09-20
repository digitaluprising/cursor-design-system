import React from 'react';
import Typography from './Typography';
import Button from './Button';
import ImageWrapper from './ImageWrapper';

interface FeatureCardProps {
  title: string;
  description: string;
  linkText: string;
  linkHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  codeContent?: string;
  reverse?: boolean;
  className?: string;
}

/**
 * Feature card component with code editor mockup and descriptive text
 * Features a split layout with code on one side and content on the other
 */
const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  linkText,
  linkHref,
  imageSrc,
  imageAlt = '',
  codeContent,
  reverse = false,
  className = '',
}) => {
  const content = (
    <div className="w-full lg:w-1/3 space-y-8 lg:pl-16">
      <div className="space-y-6">
        <Typography variant="display" className="text-foreground !mb-4" size='xl'>
          {title}
        </Typography>
        <Typography variant="lead" className="text-muted max-w-2xl leading-relaxed" size="xl">
          {description}
        </Typography>
      </div>
      <Button variant="link" size="lg" className="p-0 h-auto text-left text-orange-500 hover:text-orange-400">
        {linkText} →
      </Button>
    </div>
  );
  
  const codeEditor = (
    <div className="w-full lg:w-2/3 relative">
      <div className="bg-gray-900 rounded-lg border border-gray-700 overflow-hidden shadow-2xl h-[66.67vh] lg:h-auto">
        {/* Code Editor Header */}
        <div className="bg-gray-800 border-b border-gray-700 px-4 py-3 flex items-center space-x-2">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-gray-700 px-3 py-1 rounded text-xs text-gray-300">
              Dashboard.tsx
            </div>
          </div>
        </div>
        
        {/* Code Content */}
        <div className="p-6 font-mono text-sm h-full overflow-auto">
          <pre className="text-gray-300 whitespace-pre-wrap">
{codeContent || `"use client";

import React, { useState } from 'react';
import Navigation from './Navigation';
import SupportChat from './SupportChat';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  
  return (
    <div className="flex h-[600px] border rounded-lg overflow-hidden">
      <div className="w-64 border-r">
        <Navigation />
      </div>
      <div className="flex-1">
        <SupportChat />
      </div>
    </div>
  );
}`}
          </pre>
        </div>
      </div>
    </div>
  );
  
  const image = (
    <div className="w-full lg:w-2/3 relative flex-1 h-[66.67vh] lg:h-full">
      {imageSrc ? (
        <ImageWrapper
          src={imageSrc}
          alt={imageAlt}
          fill={true}
          className="rounded-2xl shadow-2xl shadow-black/20 h-full"
          sizes="(max-width: 1024px) 100vw, 66vw"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-cursor-gray-light to-cursor-gray rounded-2xl p-12 flex items-center justify-center shadow-2xl shadow-black/20">
          <div className="text-center space-y-4">
            <div className="w-20 h-20 bg-gradient-to-br from-cursor-orange/20 to-cursor-orange/10 rounded-2xl mx-auto flex items-center justify-center">
              <div className="w-8 h-8 bg-cursor-orange/40 rounded-lg"></div>
            </div>
            <Typography variant="small" className="text-muted-foreground">
              Feature Preview
            </Typography>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-4 right-4 w-3 h-3 bg-cursor-orange/30 rounded-full"></div>
          <div className="absolute bottom-6 left-6 w-2 h-2 bg-cursor-orange/20 rounded-full"></div>
        </div>
      )}
    </div>
  );
  
  return (
    <section className={`h-[80vh] px-4 sm:px-6 lg:px-8 flex items-center transition-all duration-150 ease-out hover:bg-gray-700/20 hover:shadow-xl rounded-2xl ${className}`}>
      <div className="max-w-7xl mx-auto w-full h-full">
        <div className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-20 h-full ${
          reverse ? 'lg:flex-row-reverse' : ''
        }`}>
          {codeContent ? codeEditor : image}
          {content}
        </div>
      </div>
    </section>
  );
};

export default FeatureCard;
