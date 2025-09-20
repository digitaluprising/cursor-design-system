'use client';

import React from 'react';
import ChangelogCard from './ChangelogCard';
import TextLink from './TextLink';
import Typography from './Typography';

/**
 * Example component demonstrating the changelog layout
 * Shows multiple version cards in a grid layout
 */
const ChangelogExample: React.FC = () => {
  const changelogData = [
    {
      version: '1.6',
      releaseDate: 'September 11, 2025',
      features: [
        'Slash commands, summarization, and improved Agent terminal.'
      ]
    },
    {
      version: '1.5',
      releaseDate: 'August 21, 2025',
      features: [
        'Linear integration, improved Agent terminal, and OS notifications.'
      ]
    },
    {
      version: '1.4',
      releaseDate: 'August 6, 2025',
      features: [
        'Improved Agent tools, steerability, and usage visibility.'
      ]
    },
    {
      version: '1.3',
      releaseDate: 'July 29, 2025',
      features: [
        'Shared terminal with Agent, context usage in chat, and faster edits.'
      ]
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-left mb-12">
          <Typography variant="h4" className="text-white mb-4">
            Changelog
          </Typography>
        </div>

        {/* Changelog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {changelogData.map((item, index) => (
            <ChangelogCard
              key={item.version}
              version={item.version}
              releaseDate={item.releaseDate}
              features={item.features}
              className="hover:scale-105 transition-transform duration-200"
            />
          ))}
        </div>

        {/* Bottom Link */}
        <div className="text-center">
          <TextLink href="https://cursor.sh/changelog">
            See what's new in Cursor →
          </TextLink>
        </div>
      </div>
    </div>
  );
};

export default ChangelogExample;
