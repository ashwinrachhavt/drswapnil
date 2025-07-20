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
        // Modern Soulful Dental Care Color Palette
        'primary-blue': '#0891b2',
        'primary-pink': '#ec4899',
        'secondary-blue': '#0ea5e9',
        'secondary-pink': '#f472b6',
        'accent-teal': '#06b6d4',
        'accent-purple': '#a855f7',
        'dark-blue': '#0c4a6e',
        'dark-pink': '#be185d',
        'light-blue': '#e0f2fe',
        'light-pink': '#fce7f3',
        
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
        'modern': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'modern-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'blue': '0 4px 24px rgba(8, 145, 178, 0.15)',
        'pink': '0 4px 24px rgba(236, 72, 153, 0.15)',
        'teal': '0 4px 24px rgba(6, 182, 212, 0.15)',
        'purple': '0 4px 24px rgba(168, 85, 247, 0.15)',
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
        'gradient-blue-pink': 'linear-gradient(135deg, #0891b2 0%, #ec4899 100%)',
        'gradient-teal-purple': 'linear-gradient(135deg, #06b6d4 0%, #a855f7 100%)',
        'gradient-light-blue': 'linear-gradient(135deg, #e0f2fe 0%, #fce7f3 100%)',
        'gradient-modern': 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)',
        'hero-overlay': 'linear-gradient(135deg, rgba(8, 145, 178, 0.9) 0%, rgba(236, 72, 153, 0.9) 100%)',
        'section-overlay': 'linear-gradient(135deg, rgba(224, 242, 254, 0.8) 0%, rgba(252, 231, 243, 0.8) 100%)',
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
            color: '#334155',
            lineHeight: '1.6',
            p: {
              marginTop: '1.25em',
              marginBottom: '1.25em',
            },
            h1: {
              fontFamily: 'Playfair Display, serif',
              fontWeight: '600',
              color: '#0c4a6e',
            },
            h2: {
              fontFamily: 'Playfair Display, serif',
              fontWeight: '600',
              color: '#0c4a6e',
            },
            h3: {
              fontFamily: 'Playfair Display, serif',
              fontWeight: '500',
              color: '#0c4a6e',
            },
            blockquote: {
              fontFamily: 'Crimson Text, serif',
              fontStyle: 'italic',
              borderLeftColor: '#ec4899',
              color: '#334155',
            },
            strong: {
              color: '#0c4a6e',
              fontWeight: '600',
            },
            a: {
              color: '#0891b2',
              textDecoration: 'none',
              fontWeight: '500',
              '&:hover': {
                color: '#ec4899',
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
