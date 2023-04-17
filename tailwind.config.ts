import { fontFamily } from "tailwindcss/defaultTheme";
import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        hor: ["Horizon"],
        out: ["Horizon Outline"],
        mont: ["var(--font-mont)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
