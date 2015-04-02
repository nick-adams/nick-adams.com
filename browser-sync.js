module.exports = {
    debugInfo: true,
    files: [
        '_site/assets/css/*.css',
        '_site/**/*.html'
    ],
    ghostMode: false,
    port: 4000,
    server: {
        baseDir: '_site'
    },
    ui: {
        port: 4001
    }
};