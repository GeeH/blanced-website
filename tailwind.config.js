/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './services/**/*.html'],
    theme: {
        extend: {
            colors: {
                primary: '#1e40af',
                secondary: '#0ea5e9',
            }
        }
    }
}
