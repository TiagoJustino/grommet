var gulp = require('gulp');
var rsync = require('gulp-rsync');
var nodemon = require('gulp-nodemon');
var open = require('gulp-open');

gulp.task('sync', function() {
  gulp.src('.')
    .pipe(rsync({
      root: '.',
      hostname: 'grommet.io',
      username: 'grommet',
      destination: '/var/www/html/server',
      recursive: true,
      relative: true,
      progress: true,
      incremental: true,
      clean: true,
      silent: false,
      emptyDirectories: true,
      exclude: ['.DS_Store', 'node_modules']
    }));
});

gulp.task('dev', function() {
  nodemon({
    script: 'server.js'
  }).on('start', function() {
    console.log('[node-server] started: opening the app in your default browser...');
    //give sometime for the server to start
    setTimeout(function() {
      gulp.src('../dist/index.html')
      .pipe(open('<%file.path%>', {
        url: 'http://localhost:8020/'
      }));
    }, 500);
  });
});