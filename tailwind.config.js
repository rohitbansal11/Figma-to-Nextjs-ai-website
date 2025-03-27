/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          background: "hsl(260, 20%, 4%)",
          foreground: "hsl(280, 10%, 98%)",
          card: "hsl(260, 15%, 10%)",
          "card-foreground": "hsl(280, 10%, 98%)",
          popover: "hsl(260, 15%, 8%)",
          "popover-foreground": "hsl(280, 10%, 98%)",
          primary: "hsl(265, 84%, 70%)",
          "primary-foreground": "hsl(210, 40%, 98%)",
          secondary: "hsl(260, 15%, 15%)",
          "secondary-foreground": "hsl(210, 40%, 98%)",
          muted: "hsl(260, 15%, 20%)",
          "muted-foreground": "hsl(260, 10%, 70%)",
          accent: "hsl(270, 74%, 75%)",
          "accent-foreground": "hsl(210, 40%, 98%)",
          destructive: "hsl(0, 84.2%, 60.2%)",
          "destructive-foreground": "hsl(210, 40%, 98%)",
          border: "hsl(260, 15%, 15%)",
          input: "hsl(260, 15%, 15%)",
          ring: "hsl(265, 84%, 70%)",
        },
        borderRadius: {
          DEFAULT: "0.75rem",
        },
        boxShadow: {
          "glass": "0 4px 20px -2px rgba(155,135,245,0.15)",
          "glass-dark": "0 4px 20px -2px rgba(0,0,0,0.3)",
        },
        backgroundImage: {
          "gradient-body":
            "radial-gradient(circle at 20% 35%, rgba(107, 8, 174, 0.15) 0%, transparent 30%), radial-gradient(circle at 75% 70%, rgba(107, 8, 174, 0.1) 0%, transparent 20%)",
        },
        textShadow: {
          DEFAULT: "0 0 20px rgba(155, 135, 245, 0.5)",
        },
        spacing: {
          "section-padding": "4rem", // Adjust based on your preference
        },
        animation: {
          gradient: "gradient 3s ease infinite",
        },
        keyframes: {
          gradient: {
            "0%": { backgroundPosition: "0% 50%" },
            "50%": { backgroundPosition: "100% 50%" },
            "100%": { backgroundPosition: "0% 50%" },
          },
        },
      },
    },
    plugins: [
      function ({ addComponents }) {
        addComponents({
          ".glass": {
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 4px 20px -2px rgba(155,135,245,0.15)",
          },
          ".glass-dark": {
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.05)",
            boxShadow: "0 4px 20px -2px rgba(0,0,0,0.3)",
          },
          ".text-gradient": {
            backgroundImage: "linear-gradient(to bottom right, #a855f7, #6d28d9, #9333ea)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          },
          ".animate-on-scroll": {
            opacity: "0",
            transform: "translateY(20px)",
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
          },
          ".animate-on-scroll.animate": {
            opacity: "1",
            transform: "translateY(0)",
          },
          ".section-padding": {
            padding: "4rem 1.5rem",
          },
        });
      },
    ],
  };
  