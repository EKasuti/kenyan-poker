
export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  darkMode: 'selector',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'kp-black': '#0a0a0a',
        'kp-dark': '#0f0a08',
        'kp-burgundy': '#4a0f1a',
        'kp-burgundy-light': '#6b1228',
        'kp-red': '#9e2a2b',
        'kp-gold': '#c9a24a',
        'kp-gold-dark': '#b8862f',
        'kp-champagne': '#e6d4a3',
        'kp-champagne-light': '#f5e9c8',
        card: 'var(--card)',
        'card-foreground': 'var(--card-foreground)',
        popover: 'var(--popover)',
        'popover-foreground': 'var(--popover-foreground)',
        primary: 'var(--primary)',
        'primary-foreground': 'var(--primary-foreground)',
        secondary: 'var(--secondary)',
        'secondary-foreground': 'var(--secondary-foreground)',
        muted: 'var(--muted)',
        'muted-foreground': 'var(--muted-foreground)',
        accent: 'var(--accent)',
        'accent-foreground': 'var(--accent-foreground)',
        destructive: 'var(--destructive)',
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        'chart-1': 'var(--chart-1)',
        'chart-2': 'var(--chart-2)',
        'chart-3': 'var(--chart-3)',
        'chart-4': 'var(--chart-4)',
        'chart-5': 'var(--chart-5)',
        sidebar: 'var(--sidebar)',
        'sidebar-foreground': 'var(--sidebar-foreground)',
        'sidebar-primary': 'var(--sidebar-primary)',
        'sidebar-primary-foreground': 'var(--sidebar-primary-foreground)',
        'sidebar-accent': 'var(--sidebar-accent)',
        'sidebar-accent-foreground': 'var(--sidebar-accent-foreground)',
        'sidebar-border': 'var(--sidebar-border)',
        'sidebar-ring': 'var(--sidebar-ring)',
        'destructive-foreground': 'var(--destructive-foreground)'
      },
      fontFamily: {
        heading: ['Geist'],
        mono: ['"Geist Mono"'],
        display: ['"Cormorant Garamond"', 'serif'],
      },
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(100%)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      animation: {
        shimmer: 'shimmer 2.5s infinite',
        float: 'float 6s ease-in-out infinite',
      }
    }
  }
}
