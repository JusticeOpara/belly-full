/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,tsx}"],

  theme: {
    extend: {  
      backgroundColor : {
        primary : 'var(--color-bg-primary)',
        secondary : 'var(--color-bg-secondary)',
        card: 'var(--card-bg)'
      },
      textColor: {
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
        btnText: 'var(--color-bg-secondary)'
      },
        
      // :root {
      //   --color-bg-primary:#13252f;
      //   --color-bg-secondary:#a1ff69;
      //   --color-text-primary: #acb2b2;
      //   --color-text-secondary: #fff;
      //   --font-name: "Montserrat", sans-serif;
      //   --card-bg: #152833;
      // }
      
    },
  },

  plugins: [],
}

