/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'green': '#7DF843',
      'yellow': '#D9B48F',
      'yellow-lg': '#FFE07E',
      'yellow-xl': '#FFD542',
      'gold': '#FFB800',
      'brown': '#181513',
      'preto-ebano': '#161312',
      'white-op-25': 'rgba(255, 255, 255, 0.25)',
      'white': '#ffffff',
      'gold-rk': '#ffd700',
      'silver-rk': '#c0c0c0',
      'bronze-rk': '#bf8970',
      'vip-blue': '#b0c4de',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      Hom: ['Hammersmith One', 'sans-serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
        '59': '3.688rem'
      },
      width: {
        'card-guia':'62.395833333333336vw'
      },
      height: {
        '212': '22.06035379812695vh',
        '417': '417px',
        'card-guia': '80vh',
        'card-rank': '70vh',
        
      },
      borderRadius: {
        '4xl': '2rem',
      },
      margin:{
        '20': '2.0811654526534857vh',
        '33': ' 1.71875vw',
        '46px': '46px',
        '48': '2.5vw',
        '50px': '2.6041666666666665vw',
        '59': '3.688rem',
        '141': '7.34375vw',
        '172': '5.375rem',
        '186': '19.35483870967742vh',
        '246': '12.8125vw',
      },
      padding:{
        'vht': '60.35379812695109vh',
        'vnt': '16.35483870967742vh',
        'vnt-rk': '17.35483870967742vh',
        '50px': '2.6041666666666665vw',
      },
      dropShadow: {
        '3xl': '0 2px 2px rgba(0, 0, 0, 0.25)',
        '4xl': '0 2px 2px rgba(0, 0, 0, 0.36)',
      },
      boxShadow: {
        'inner': 'inset 0 1px 4px 0 rgba(255, 255, 255, 0.25)'
      },
      backgroundImage: {
        'home': "url('../src/assets/image/home.svg')",
        'banner-1': "url('../src/assets/image/banner1.svg')",
        'banner-2': "url('../src/assets/image/banner2.svg')",
        'banner-3': "url('../src/assets/image/banner3.svg')",
        'guias': "url('../src/assets/image/guias.svg')",
        'info': "url('../src/assets/image/banner5.svg')",
      },
      borderRadius: {
        '30': '30px',
        '50': '50px',
      },
      listStyleType: {
        square: 'square',
      }
    }
  }
 }
