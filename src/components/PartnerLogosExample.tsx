'use client';

import React from 'react';
import PartnerLogos from './PartnerLogos';

/**
 * Example component demonstrating different PartnerLogos configurations
 */
const PartnerLogosExample: React.FC = () => {
  const techPartners = ['Stripe', 'OpenAI', 'Notion', 'Adobe', 'Vercel', 'GitHub'];
  const enterprisePartners = ['Microsoft', 'Google', 'Apple', 'Meta', 'Netflix', 'Spotify'];

  return (
    <div className="space-y-20 bg-background min-h-screen">
      {/* Main showcase */}
      <section className="pt-20">
        <PartnerLogos partners={techPartners} />
      </section>

      {/* Extended partner list */}
      <section className="bg-muted/30 py-16">
        <PartnerLogos 
          partners={enterprisePartners} 
          logoOptions={{ 
            type: 'logo', 
            theme: 'light', 
            height: 32, 
            width: 120 
          }} 
        />
      </section>

      {/* Mixed partners */}
      <section className="pb-20">
        <PartnerLogos 
          partners={['Tesla', 'Airbnb', 'Uber', 'Spotify', 'Netflix', 'Figma']} 
          logoOptions={{ 
            type: 'logo', 
            theme: 'light', 
            height: 32, 
            width: 120 
          }}
        />
      </section>
    </div>
  );
};

export default PartnerLogosExample;
