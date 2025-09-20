/**
 * Brandfetch API utility functions for fetching brand logos
 */

const BRANDFETCH_CLIENT_ID = '1ido6F3AMlvDdXd_r2n';
const BRANDFETCH_CDN_BASE = 'https://cdn.brandfetch.io';

export interface LogoOptions {
  type?: 'icon' | 'logo' | 'symbol';
  theme?: 'light' | 'dark';
  fallback?: 'brandfetch' | 'transparent' | 'lettermark' | '404';
  height?: number;
  width?: number;
}

export interface BrandLogo {
  url: string;
  alt: string;
  domain: string;
}

/**
 * Generate a Brandfetch logo URL for a given domain
 * Uses the correct Brandfetch Logo Link API format
 */
export function getBrandfetchLogoUrl(
  domain: string,
  options: LogoOptions = {}
): string {
  const {
    type = 'logo',
    theme = 'light',
    fallback = 'transparent',
    height = 40,
    width = 120
  } = options;

  // Clean domain (remove protocol if present)
  const cleanDomain = domain.replace(/^https?:\/\//, '').replace(/^www\./, '');
  
  // Use the correct Brandfetch Logo Link API format
  // Format: https://cdn.brandfetch.io/{domain}?c={clientId}
  const baseUrl = `${BRANDFETCH_CDN_BASE}/${cleanDomain}`;
  const params = new URLSearchParams({
    c: BRANDFETCH_CLIENT_ID
  });

  return `${baseUrl}?${params.toString()}`;
}

/**
 * Get logo URLs for multiple partner domains
 */
export function getPartnerLogos(
  partners: string[],
  options: LogoOptions = {}
): BrandLogo[] {
  return partners.map(partner => {
    // Convert partner name to domain (you may need to adjust this mapping)
    const domain = getDomainFromPartnerName(partner);
    return {
      url: getBrandfetchLogoUrl(domain, options),
      alt: `${partner} logo`,
      domain
    };
  });
}

/**
 * Convert partner name to domain
 * This is a simple mapping - you may need to adjust based on your actual partners
 */
function getDomainFromPartnerName(partner: string): string {
  const domainMap: Record<string, string> = {
    'Stripe': 'stripe.com',
    'OpenAI': 'openai.com',
    'Linear': 'linear.com',
    'Adobe': 'adobe.com',
    'Vercel': 'vercel.com',
    'GitHub': 'github.com',
    'Figma': 'figma.com',
    'Notion': 'notion.so',
    'Slack': 'slack.com',
    'Discord': 'discord.com',
    'Zoom': 'zoom.us',
    'Microsoft': 'microsoft.com',
    'Google': 'google.com',
    'Apple': 'apple.com',
    'Meta': 'meta.com',
    'Netflix': 'netflix.com',
    'Spotify': 'spotify.com',
    'Airbnb': 'airbnb.com',
    'Uber': 'uber.com',
    'Tesla': 'tesla.com'
  };

  return domainMap[partner] || `${partner.toLowerCase().replace(/\s+/g, '')}.com`;
}

/**
 * Check if a logo URL is valid by testing the image
 */
export async function validateLogoUrl(url: string): Promise<boolean> {
  try {
    const response = await fetch(url, { 
      method: 'HEAD',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36'
      }
    });
    return response.ok;
  } catch (error) {
    console.error('Logo validation error:', error);
    return false;
  }
}

/**
 * Test function to debug Brandfetch API calls
 */
export function testBrandfetchUrl(domain: string = 'stripe.com'): string {
  const url = getBrandfetchLogoUrl(domain);
  console.log('Testing Brandfetch URL:', url);
  return url;
}
