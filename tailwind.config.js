/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        frauncesFont: ["Fraunces", "serif"],
        robotoFont: ["Roboto", "sans-serif"],
        ralewayFont: ["Raleway", "sans-serif"],
      },
      fontSize: {
        clampHero: "clamp(2.5rem, 10vw, 8.5rem)",
        clampHeader: "clamp(1.5rem, 6vw, 3.5rem)",
      },
      backgroundImage: {
        heroBg: "url(./Randelo-hero.jpg)",
        testimonialsBg: "url(./testimonial-bg.jpg)",
        dailyDeloBg: "url(./daily-delo-bg.jpg)",
        homeMadeBg: "url(./home-made-img.jpg)",
        contactBg: "url(./contact-bg.jpg)",
      },
    },
  },
  plugins: [],
};
