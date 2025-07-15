/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/@astrojs/tailwind/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        // Northern Legacy Spray Foam - Professional color palette
        // Main background colors
        'arctic-white': '#FAFBFC',      // Clean white background
        'frost-gray': '#F1F5F9',        // Light background sections
        'steel-gray': '#E2E8F0',        // Card backgrounds
        'northern-blue': '#1E40AF',     // Primary brand blue
        'legacy-green': '#059669',      // Forest/legacy green
        'charcoal': '#1F2937',          // Dark text and accents
        'midnight': '#0F172A',          // Darkest elements
        
        // Accent colors
        'steel-blue': '#3B82F6',        // Call-to-action blue
        'forest-green': '#10B981',      // Success/eco indicators
        'cool-gray': '#6B7280',         // Secondary text
        'slate-blue': '#475569',        // Muted elements
        'ice-blue': '#DBEAFE',          // Light blue backgrounds
        'mint-gray': '#F0FDF4',         // Light green backgrounds
        
        // Legacy colors (keeping some originals for compatibility)
        'cream': '#FAF7F2',             // Light cream background
        'sand': '#E8DCC4',              // Warm sand
        'sand-dark': '#D4C4A8',         // Darker sand for cards
        'khaki': '#C8B89E',             // Medium khaki
        'taupe': '#A69580',             // Darker taupe
        'espresso': '#4A3F36',          // Dark brown for text
        'brown-tint': '#7B5E48',        // Brown for glass tint
        
        // Removing purple/pink tones and replacing with appropriate colors
        'sage-accent': '#10B981',       // Changed from sage to forest green
        'sage-mist': '#6EE7B7',         // Light forest green
        'terra-cotta': '#F59E0B',       // Changed to professional amber
        'soft-white': '#FEFDFB',        // Pure soft white
        
        // Functional colors
        'warm-gray': '#6B7280',         // For secondary text
        'light-gray': '#F9FAFB',        // For backgrounds
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
        'subtle-pulse': 'subtlePulse 3s ease-in-out infinite',
        'scroll': 'scroll 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(16, 185, 129, 0.3)' }, // Changed to forest green
          '50%': { boxShadow: '0 0 30px rgba(16, 185, 129, 0.5)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        subtlePulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backdropBlur: {
        xs: '2px',
        xl: '20px',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'medium': '0 8px 30px rgba(0, 0, 0, 0.12)',
        'elegant': '0 10px 40px rgba(0, 0, 0, 0.15)',
        'text-glow': '0 0 10px rgba(0, 0, 0, 0.5)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.2), inset 0 0 0 1px rgba(255, 255, 255, 0.1)',
        'northern': '0 4px 20px rgba(30, 64, 175, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1)',
        'legacy': '0 4px 20px rgba(5, 150, 105, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
