import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        mainLayout: "url('/images/mainLayout.png')",
        todayResultDark: "url('/images/todayResultDark.png')",
        todayResultLight: "url('v/images/todayResultLight.png')",
      },
      colors: {
        base: {
          white: "#FFFFFF",
          blue: "#8FB2F5",
          100: "#FAFAFA",
          200: "#BFBFD4",
          300: "#ABABC4",
          400: "#7F7F98",
          500: "#3B3B54",
          600: "#22222F",
          700: "#1C1C27",
          800: "#16161F",
          900: "#13131A",
        },
      },
      fontFamily: {
        nunitoBold: ["nunitoBold", ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       backgroundImage: {
//         mainLayout: "url('/src/assets/images/mainLayout.png')",
//         todayResultDark: "url('/src/assets/images/todayResultDark.png')",
//         todayResultLight: "url('/src/assets/images/todayResultLight.png')",
//       },
//       textColor: {
//         primaryLight: ({ theme }) => theme('colors.gray.100'), // Use any color from Tailwind CSS color palette
//       },
//     },
//   },
// };
