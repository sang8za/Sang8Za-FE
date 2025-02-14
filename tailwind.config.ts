import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        cancel: "var(--cancle)",
        accent: "var(--accent)",
        background: "var(--background)",
        text: "var(--text)",
        hover_primary: "var(--hover-primary)",
        hover_secondary: "var(--hover-secondary)",
      },
      borderRadius: {
        DEFAULT: "10px",
        sm: "8px",
        md: "16px",
        lg: "18px",
      },
      maxWidth: {
        "custom-sm": "507px",
        "custom-md": "780px",
      },
      boxShadow: {
        full: "0 0px 20px 0px rgba(0, 0, 0, 0.3)",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"], // 기본 폰트를 Poppins로 설정
      },
    },
  },
  plugins: [],
} satisfies Config;
