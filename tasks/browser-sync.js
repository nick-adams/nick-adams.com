module.exports = {
    debugInfo: true,
    files: [
        'www/assets/css/*.css',
        'www/**/*.html'
    ],
    ghostMode: false,
    port: 4000,
    server: {
        baseDir: 'www'
    },
    ui: {
        port: 4001
    }
};