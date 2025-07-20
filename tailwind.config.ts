import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Elegant Color Palette
        navy: '#1B2951',
        'warm-gold': '#C9A96E',
        'sage-green': '#7A9A7C',
        cream: '#F8F6F0',
        'warm-gray': '#6B7280',
        charcoal: '#374151',
        'soft-white': '#FEFEFE',
        'light-gold': '#F4F1E8',
        'deep-sage': '#5A7A5C',
        
        // Semantic Colors
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
        accent: ['Crimson Text', 'serif'],
      },
      fontSize: {
        'display-1': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-2': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'heading-1': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading-2': ['2rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'heading-3': ['1.5rem', { lineHeight: '1.4', letterSpacing: '0' }],
        'body-large': ['1.125rem', { lineHeight: '1.7', letterSpacing: '0' }],
        'body-regular': ['1rem', { lineHeight: '1.7', letterSpacing: '0' }],
        'body-small': ['0.875rem', { lineHeight: '1.6', letterSpacing: '0' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      boxShadow: {
        'elegant': '0 4px 24px rgba(27, 41, 81, 0.08)',
        'luxury': '0 8px 40px rgba(27, 41, 81, 0.12)',
        'premium': '0 12px 60px rgba(27, 41, 81, 0.15)',
        'soft': '0 2px 8px rgba(201, 169, 110, 0.15)',
        'glow': '0 0 20px rgba(201, 169, 110, 0.4)',
      },
      animation: {
        'float-elegant': 'float-elegant 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
        'fade-in': 'fade-in 0.6s ease-out',
        'slide-in-left': 'slide-in-left 0.6s ease-out',
        'slide-in-right': 'slide-in-right 0.6s ease-out',
        'scale-in': 'scale-in 0.6s ease-out',
      },
      keyframes: {
        'float-elegant': {
          '0%, 100%': { 
            transform: 'translateY(0px) rotate(0deg)' 
          },
          '25%': { 
            transform: 'translateY(-10px) rotate(1deg)' 
          },
          '50%': { 
            transform: 'translateY(-20px) rotate(0deg)' 
          },
          '75%': { 
            transform: 'translateY(-10px) rotate(-1deg)' 
          },
        },
        'shimmer': {
          '0%': { 
            backgroundPosition: '-200% 0' 
          },
          '100%': { 
            backgroundPosition: '200% 0' 
          },
        },
        'fade-in': {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(20px)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0)' 
          },
        },
        'slide-in-left': {
          '0%': { 
            opacity: '0', 
            transform: 'translateX(-30px)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateX(0)' 
          },
        },
        'slide-in-right': {
          '0%': { 
            opacity: '0', 
            transform: 'translateX(30px)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateX(0)' 
          },
        },
        'scale-in': {
          '0%': { 
            opacity: '0', 
            transform: 'scale(0.95)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'scale(1)' 
          },
        },
      },
      backgroundImage: {
        'gradient-elegant': 'linear-gradient(135deg, #F8F6F0 0%, #FFFFFF 100%)',
        'gradient-gold': 'linear-gradient(135deg, #C9A96E 0%, #E8D5A3 100%)',
        'gradient-sage': 'linear-gradient(135deg, #7A9A7C 0%, #A4C4A6 100%)',
        'gradient-navy': 'linear-gradient(135deg, #1B2951 0%, #2A3A65 100%)',
        'sophisticated-gradient': 'linear-gradient(135deg, #1B2951 0%, #5A7A5C 50%, #C9A96E 100%)',
        'elegant-overlay': 'linear-gradient(135deg, rgba(27, 41, 81, 0.9) 0%, rgba(122, 154, 124, 0.8) 50%, rgba(201, 169, 110, 0.9) 100%)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      screens: {
        'xs': '475px',
        '3xl': '1600px',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#374151',
            lineHeight: '1.7',
            p: {
              marginTop: '1.25em',
              marginBottom: '1.25em',
            },
            h1: {
              fontFamily: 'Playfair Display, serif',
              fontWeight: '600',
              color: '#1B2951',
            },
            h2: {
              fontFamily: 'Playfair Display, serif',
              fontWeight: '600',
              color: '#1B2951',
            },
            h3: {
              fontFamily: 'Playfair Display, serif',
              fontWeight: '500',
              color: '#1B2951',
            },
            blockquote: {
              fontFamily: 'Crimson Text, serif',
              fontStyle: 'italic',
              borderLeftColor: '#C9A96E',
              color: '#374151',
            },
            strong: {
              color: '#1B2951',
              fontWeight: '600',
            },
            a: {
              color: '#C9A96E',
              textDecoration: 'none',
              fontWeight: '500',
              '&:hover': {
                color: '#B8956A',
                textDecoration: 'underline',
              },
            },
          },
        },
      },
      aspectRatio: {
        '4/5': '4 / 5',
        '3/4': '3 / 4',
        '5/4': '5 / 4',
      },
      gridTemplateColumns: {
        'gallery': 'repeat(auto-fit, minmax(280px, 1fr))',
        'services': 'repeat(auto-fit, minmax(320px, 1fr))',
        'testimonials': 'repeat(auto-fit, minmax(350px, 1fr))',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
  ],
} satisfies Config;
