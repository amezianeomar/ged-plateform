/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#0f172a', // Deep Navy Blue
                    light: '#1e293b',
                    dark: '#020617',
                },
                accent: {
                    DEFAULT: '#d4af37', // Architectural Gold
                    light: '#e5c056',
                    dark: '#b08d1e',
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'], // Assuming Inter is available or default sans
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out forwards',
                'slide-up': 'slideUp 0.5s ease-out forwards',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            }
        },
    },
    plugins: [],
}
