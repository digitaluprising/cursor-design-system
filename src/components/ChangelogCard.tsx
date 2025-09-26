'use client';

import React from 'react';
import Typography from './Typography';

interface ChangelogCardProps {
  version: string;
  releaseDate: string;
  features: string[];
  className?: string;
}

/**
 * Changelog card component for displaying version updates
 * Shows version number, release date, and feature list
 */
const ChangelogCard: React.FC<ChangelogCardProps> = ({
  version,
  releaseDate,
  features,
  className = '',
}) => {
  return (
    <div className={`bg-muted/30 rounded-lg p-6 border border-border/50 hover:border-border transition-all duration-200 ${className}`}>
      {/* Version Badge with Date */}
      <div className="flex items-center justify-between mb-4">
        <span className="bg-muted-foreground text-background text-sm font-medium px-3 py-1 rounded-full">
          {version}
        </span>
        <Typography variant="small" className="text-muted-foreground">
          {releaseDate}
        </Typography>
      </div>
      
      {/* Features List */}
      <div className="space-y-2">
        {features.map((feature, index) => (
          <Typography key={index} variant="small" className="text-foreground">
            {feature}
          </Typography>
        ))}
      </div>
    </div>
  );
};

export default ChangelogCard;
