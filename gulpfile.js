// Modules & Plugins
var gulp = require('gulp');
var paths = {
    client: {
        script: ['node_modules/jquery/dist/**/*.js','node_modules/bootstrap/dist/**/*.js'],
        html: ['client/partials/*.html', 'client/*.html'],
        css: ['node_modules/jquery/dist/**/*.css', 'node_modules/bootstrap/dist/**/*.css']
    },
    server: {
        scripts: 'server/js/**/*.js'
    },
    destination: 'WebApplication4/wwwroot/libs'

};

// Styles Task
gulp.task('styles', function () {
    return gulp.src(paths.client.css,
        { base: 'node_modules' })
        .pipe(gulp.dest(paths.destination));
});

// Scripts Task
gulp.task('scripts', function () {
    return gulp.src(paths.client.script,
        { base: 'node_modules' })
        //.pipe(concat('all.js'))
        .pipe(gulp.dest(paths.destination));
});


// Default Task
gulp.task('default', gulp.parallel('styles', 'scripts'));