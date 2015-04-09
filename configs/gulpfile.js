var gulp        = require('gulp');
var browserSync = require('browser-sync');
// var prefix      = require('gulp-autoprefixer');
var cp          = require('child_process');

var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build --watch'
};

// Build the Jekyll Site 
gulp.task('jekyll-build', function (done) {
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn(
        'jekyll', [
          'build', 
          '--config=_config.yml',
          '--watch',
          '--trace'
          ], 
        {stdio: 'inherit'})
        .on('close', done);
});

// Rebuild Jekyll and Reload Page //
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});

// Wait for 'jekyll-build' then launch the BrowserSync Server
gulp.task('browser-sync', ['jekyll-build'], function() {
    browserSync({
        debugInfo: true,
        files: [
            '_site/assets/css/*.css',
            '_site/**/*.html'
        ],
        ghostMode: false,
        port: 4000,
        server: {
            baseDir: '_site'
        }
    });
});

// /**
//  * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
//  */
// gulp.task('sass', function () {
//     return gulp.src('_scss/main.scss')
//         .pipe(sass({
//             includePaths: ['scss'],
//             onError: browserSync.notify
//         }))
//         .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
//         .pipe(gulp.dest('_site/css'))
//         .pipe(browserSync.reload({stream:true}))
//         .pipe(gulp.dest('css'));
// });

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
    // gulp.watch('_scss/*.scss', ['sass']);
    gulp.watch(['index.html', '_layouts/*.html'], ['jekyll-rebuild']);
});

// Default Task: 
// Running just 'gulp' will build the Jekyll site and start the BrowserSync server.
gulp.task('default', ['browser-sync', 'watch']);

