module.exports = {
    debugInfo: true,
    files: [
        '_site/assets/css/*.css',
        '_site/**/*.html'
    ],
    ghostMode: false,
    port: 3000,
    server: {
        baseDir: '_site'
    }
};