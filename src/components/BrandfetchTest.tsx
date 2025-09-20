'use client';

import React, { useState } from 'react';
import { testBrandfetchUrl, validateLogoUrl } from '../utils/brandfetch';

/**
 * Test component to debug Brandfetch API issues
 */
const BrandfetchTest: React.FC = () => {
  const [testUrl, setTestUrl] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);

  const testUrlGeneration = () => {
    const url = testBrandfetchUrl('stripe.com');
    setTestUrl(url);
  };

  const testUrlValidation = async () => {
    if (!testUrl) return;
    
    setLoading(true);
    try {
      const valid = await validateLogoUrl(testUrl);
      setIsValid(valid);
    } catch (error) {
      console.error('Validation error:', error);
      setIsValid(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Brandfetch API Test</h2>
      
      <div className="space-y-4">
        <button
          onClick={testUrlGeneration}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Generate Test URL
        </button>

        {testUrl && (
          <div className="space-y-2">
            <p className="text-sm text-gray-600">Generated URL:</p>
            <code className="block p-2 bg-gray-100 rounded text-xs break-all">
              {testUrl}
            </code>
            
            <button
              onClick={testUrlValidation}
              disabled={loading}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50"
            >
              {loading ? 'Testing...' : 'Test URL Validity'}
            </button>

            {isValid !== null && (
              <div className={`p-2 rounded ${isValid ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {isValid ? '✅ URL is valid' : '❌ URL is invalid (403 error)'}
              </div>
            )}
          </div>
        )}

        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Direct Image Test:</h3>
          {testUrl && (
            <div className="border p-4 rounded">
              <img
                src={testUrl}
                alt="Test logo"
                className="max-h-20"
                onLoad={() => console.log('Image loaded successfully')}
                onError={(e) => {
                  console.error('Image failed to load:', e);
                  setIsValid(false);
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BrandfetchTest;
