/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            screens: {
                md: '910px', // override tailwind's default
            },
            keyframes: {
                'show-up': {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '0.25' },
                },
                'slide-up': {
                    '0%': { transform: 'translateY(100%)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                'slide-right': {
                    '0%': { transform: 'translateX(-100%)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' },
                },
                'slide-left': {
                    '0%': { transform: 'translateX(100%)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' },
                },
                tilt: {
                    '0%': { transform: 'rotate(-1deg)' },
                    '100%': { transform: 'rotate(1deg)' },
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            animation: {
                'show-up': 'show-up 5s ease-in',
                'slide-up': 'slide-up 1.5s ease-in-out',
                'slide-right': 'slide-right 1.5s ease-in-out',
                'slide-left': 'slide-left 1.5s ease-in-out',
                tilt: 'tilt 1s ease-in-out infinite alternate',
            },
        },
    },
    plugins: [],
}
