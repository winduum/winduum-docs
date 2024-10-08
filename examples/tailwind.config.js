import winduum from 'winduum'

export default {
    darkMode: 'class',
    content: [
        './src/**/*.{js,html}'
    ],
    plugins: [
        winduum({
            settings: {
                rgb: false
            }
        })
    ],
    future: {
        hoverOnlyWhenSupported: true
    }
}
