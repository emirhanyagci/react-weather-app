/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        mainLayout: "url('/src/assets/images/mainLayout.png')",
        todayResultDark: "url('/src/assets/images/todayResultDark.png')",
        todayResultLight: "url('/src/assets/images/todayResultLight.png')",
      },
    },
  },
};
