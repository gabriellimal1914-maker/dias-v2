import type { Config } from 'tailwindcss';

/**
 * Design system — Dias Beserra Estruturas (tema claro)
 * Base em papel/concreto, tinta grafite para texto, laranja como ACCENT.
 * Secoes escuras sao pontuais (Hero, numeros, CTA, rodape) e usam `graphite`.
 */
const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      screens: { xs: '360px' },
      colors: {
        /* superficies claras */
        paper: '#F7F7F5',        // fundo base (branco da marca)
        surface: '#FFFFFF',      // cards
        concrete: {
          DEFAULT: '#EFF0ED',    // faixas alternadas
          deep: '#E5E7E3',
        },
        line: {
          DEFAULT: '#E1E4E0',    // bordas padrao
          strong: '#CBD0CC',     // bordas de enfase
        },
        /* tinta */
        ink: {
          DEFAULT: '#14171A',    // titulos
          soft: '#3C434A',       // texto corrido
        },
        steel: {
          DEFAULT: '#5F666D',    // legendas (AA sobre papel, concreto e branco)
          600: '#4E555C',
          400: '#858D94',
          300: '#A6ADB3',
          200: '#D9DDE1',
        },
        /* secoes escuras */
        graphite: {
          DEFAULT: '#1B1E22',
          950: '#0E1113',
          900: '#141719',
          800: '#1B1E22',
          700: '#24282D',
          600: '#2E343A',
          500: '#3B4248',
        },
        accent: {
          DEFAULT: '#F26A21',
          hover: '#DE5A13',
          dim: '#B9490F',
          soft: '#FDF0E7',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Montserrat', 'system-ui', 'sans-serif'],
        sans: ['var(--font-body)', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(2.375rem, 1.15rem + 5.2vw, 5rem)', { lineHeight: '0.98', letterSpacing: '-0.03em', fontWeight: '700' }],
        'display-lg': ['clamp(2rem, 1rem + 4.2vw, 4rem)', { lineHeight: '1.0', letterSpacing: '-0.025em', fontWeight: '700' }],
        'display-md': ['clamp(1.75rem, 1.1rem + 2.8vw, 3rem)', { lineHeight: '1.08', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-sm': ['clamp(1.375rem, 1rem + 1.6vw, 2rem)', { lineHeight: '1.15', letterSpacing: '-0.015em', fontWeight: '600' }],
        'body-lg': ['clamp(1rem, 0.95rem + 0.3vw, 1.175rem)', { lineHeight: '1.65' }],
        eyebrow: ['0.6875rem', { lineHeight: '1', letterSpacing: '0.26em', fontWeight: '600' }],
      },
      letterSpacing: { tech: '0.22em', wide2: '0.14em' },
      maxWidth: { shell: '82.5rem' },
      backgroundImage: {
        'grid-light':
          'linear-gradient(to right, rgba(20,23,26,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(20,23,26,0.045) 1px, transparent 1px)',
        'grid-dark':
          'linear-gradient(to right, rgba(217,221,225,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(217,221,225,0.06) 1px, transparent 1px)',
        'grid-blue':
          'linear-gradient(to right, rgba(242,106,33,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(242,106,33,0.12) 1px, transparent 1px)',
      },
      backgroundSize: { grid: '64px 64px', 'grid-sm': '26px 26px' },
      boxShadow: {
        card: '0 1px 2px rgba(20,23,26,0.04), 0 12px 28px -18px rgba(20,23,26,0.28)',
        lift: '0 2px 4px rgba(20,23,26,0.05), 0 28px 56px -28px rgba(20,23,26,0.38)',
        accentGlow: '0 14px 34px -14px rgba(242,106,33,0.55)',
        dark: '0 24px 60px -28px rgba(0,0,0,0.75)',
      },
      transitionTimingFunction: { tech: 'cubic-bezier(0.22, 1, 0.36, 1)' },
      keyframes: {
        'sweep-x': { '0%': { transform: 'translateX(-100%)' }, '100%': { transform: 'translateX(100%)' } },
        'pulse-soft': { '0%, 100%': { opacity: '0.35' }, '50%': { opacity: '0.9' } },
        'scroll-hint': {
          '0%': { transform: 'translateY(-60%)', opacity: '0' },
          '35%': { opacity: '1' },
          '100%': { transform: 'translateY(160%)', opacity: '0' },
        },
        ticker: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        'ken-burns': {
          '0%': { transform: 'scale(1) translate3d(0,0,0)' },
          '100%': { transform: 'scale(1.09) translate3d(-1.5%,-1%,0)' },
        },
      },
      animation: {
        'sweep-x': 'sweep-x 3.2s cubic-bezier(0.22,1,0.36,1) infinite',
        'pulse-soft': 'pulse-soft 3.5s ease-in-out infinite',
        'scroll-hint': 'scroll-hint 2.2s cubic-bezier(0.65,0,0.35,1) infinite',
        ticker: 'ticker 38s linear infinite',
        'ken-burns': 'ken-burns 18s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
};

export default config;
