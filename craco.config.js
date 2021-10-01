module.exports = {
    mode: 'jit',
    purge: ['./src/pages/**/*.{html,js,jsx}',
        './src/components/**/*.{html,js, jsx}',
        './src/layouts/**/*.{html,js, jsx}',
        './src/index.html',
        "./public/**/*.html"],
    style: {
        postcss: {
            plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
            ],
        },
    },
}