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
    <div className={`bg-gray-800/50 rounded-lg p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-200 ${className}`}>
      {/* Version Badge with Date */}
      <div className="flex items-center justify-between mb-4">
        <span className="bg-gray-600 text-white text-sm font-medium px-3 py-1 rounded-full">
          {version}
        </span>
        <Typography variant="small" className="text-gray-400">
          {releaseDate}
        </Typography>
      </div>
      
      {/* Features List */}
      <div className="space-y-2">
        {features.map((feature, index) => (
          <Typography key={index} variant="small" className="text-gray-300">
            {feature}
          </Typography>
        ))}
      </div>
    </div>
  );
};

export default ChangelogCard;
