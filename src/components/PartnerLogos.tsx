'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { getPartnerLogos, BrandLogo, LogoOptions } from '../utils/brandfetch';

interface PartnerLogosProps {
  partners?: string[];
  className?: string;
  logoOptions?: LogoOptions;
  showFallbackText?: boolean;
}

/**
 * Partner logos component for displaying company partnerships with actual logos
 * Fetches logos from Brandfetch API and displays them with fallback to text
 */
const PartnerLogos: React.FC<PartnerLogosProps> = ({
  partners = ['Stripe', 'OpenAI', 'Notion', 'Adobe', 'Vercel', 'GitHub'],
  className = '',
  logoOptions = { type: 'logo', theme: 'light', height: 40, width: 120 },
  showFallbackText = true,
}) => {
  const [logos, setLogos] = useState<BrandLogo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Memoize logo options to prevent infinite re-renders
  const memoizedLogoOptions = useMemo(() => logoOptions, [
    logoOptions.type,
    logoOptions.theme,
    logoOptions.fallback,
    logoOptions.height,
    logoOptions.width
  ]);

  // Memoize partners array to prevent unnecessary re-renders
  const memoizedPartners = useMemo(() => partners, [partners.join(',')]);

  useEffect(() => {
    const fetchLogos = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const partnerLogos = getPartnerLogos(memoizedPartners, memoizedLogoOptions);
        setLogos(partnerLogos);
      } catch (err) {
        setError('Failed to load partner logos');
        console.error('Error fetching partner logos:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchLogos();
  }, [memoizedPartners, memoizedLogoOptions]);

  if (loading) {
    return (
      <div className={`py-16 ${className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header text */}
          <p className="text-center text-gray-400 text-lg mb-12 font-medium">
            Trusted every day by millions of professional developers.
          </p>
          
          {/* Loading skeleton */}
          <div className="flex flex-wrap justify-center items-center gap-4">
            {partners.map((partner) => (
              <div
                key={partner}
                className="bg-gray-800/50 rounded-lg px-6 py-4 flex items-center justify-center min-w-[140px] h-16 animate-pulse"
              >
                <div className="w-20 h-6 bg-gray-700 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header text */}
        <p className="text-center text-gray-400 text-lg mb-12 font-medium">
          Trusted every day by millions of professional developers.
        </p>
        
        {/* Logo grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full">
          {logos.map((logo, index) => (
            <div
              key={logo.domain}
              className="bg-gray-800/50 rounded-lg flex items-center justify-center aspect-[4/3] hover:bg-gray-700/50 transition-all duration-200 group"
            >
              <img
                src={logo.url}
                alt={logo.alt}
                className="max-h-12 max-w-20 object-contain opacity-80 group-hover:opacity-100 transition-all duration-200"
                crossOrigin="anonymous"
                referrerPolicy="origin-when-cross-origin"
                onLoad={() => {
                  // Logo loaded successfully
                }}
                onError={(e) => {
                  console.error(`Logo failed to load: ${logo.domain}`);
                  // Hide the image on error and show fallback text if enabled
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  
                  if (showFallbackText) {
                    const fallbackDiv = document.createElement('div');
                    fallbackDiv.className = 'text-white font-semibold text-sm group-hover:text-gray-300 transition-colors duration-200 text-center px-2';
                    fallbackDiv.textContent = partners[index];
                    target.parentNode?.appendChild(fallbackDiv);
                  }
                }}
              />
            </div>
          ))}
        </div>
        {error && (
          <div className="text-center text-gray-500 text-sm mt-4">
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default PartnerLogos;
