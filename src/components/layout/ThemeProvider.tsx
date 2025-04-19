'use client';

import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

// Define available themes
export type Theme = 'portfolio' | 'kawaii';

// Context type definition
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

// Create the context with a default value
const ThemeContext = createContext<ThemeContextType>({
  theme: 'portfolio',
  toggleTheme: () => {},
  setTheme: () => {},
});

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: Theme;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ 
  children, 
  defaultTheme = 'portfolio' 
}) => {
  // Initialize theme from localStorage if available, otherwise use default
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const [mounted, setMounted] = useState(false);

  // Toggle between themes
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'portfolio' ? 'kawaii' : 'portfolio'));
  };

  // Set specific theme
  const handleSetTheme = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  // Effect to handle initialization and theme persistence
  useEffect(() => {
    // Get stored theme from localStorage
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    
    // If stored theme exists and is valid, use it
    if (storedTheme && (storedTheme === 'portfolio' || storedTheme === 'kawaii')) {
      setTheme(storedTheme);
    }
    
    setMounted(true);
  }, []);

  // Effect to update localStorage when theme changes
  useEffect(() => {
    if (mounted) {
      localStorage.setItem('theme', theme);
      
      // Update document classes for global styling
      if (theme === 'kawaii') {
        document.documentElement.classList.add('theme-kawaii');
        document.documentElement.classList.remove('theme-portfolio');
      } else {
        document.documentElement.classList.add('theme-portfolio');
        document.documentElement.classList.remove('theme-kawaii');
      }
    }
  }, [theme, mounted]);

  // Only render children once mounted to avoid hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme: handleSetTheme }}>
      <div className={`${theme === 'kawaii' ? 'theme-kawaii' : 'theme-portfolio'}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider; 