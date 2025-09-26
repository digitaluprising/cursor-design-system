'use client';

import { createContext, useContext, useEffect, useState } from 'react';

interface ThemeContextType {
  resolvedTheme: 'light' | 'dark';
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const updateResolvedTheme = () => {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      setResolvedTheme(systemTheme);
    };

    updateResolvedTheme();

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => updateResolvedTheme();
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    // Apply theme to document
    const root = document.documentElement;
    root.setAttribute('data-theme', resolvedTheme);
    
    // Update CSS custom properties based on resolved theme
    if (resolvedTheme === 'light') {
      root.style.setProperty('--background', '#ffffff');
      root.style.setProperty('--foreground', '#0a0a0a');
      root.style.setProperty('--muted', '#f4f4f5');
      root.style.setProperty('--muted-foreground', '#52525b');
      root.style.setProperty('--border', '#e4e4e7');
      root.style.setProperty('--input', '#f4f4f5');
      root.style.setProperty('--ring', '#ff6b35');
    } else {
      root.style.setProperty('--background', '#000000');
      root.style.setProperty('--foreground', '#ffffff');
      root.style.setProperty('--muted', '#a1a1aa');
      root.style.setProperty('--muted-foreground', '#a1a1aa');
      root.style.setProperty('--border', '#27272a');
      root.style.setProperty('--input', '#27272a');
      root.style.setProperty('--ring', '#ff6b35');
    }
  }, [resolvedTheme]);

  return (
    <ThemeContext.Provider value={{ resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
