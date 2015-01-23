var gulp = require('gulp');
var deploy = require('gulp-gh-pages');

gulp.task('deploy', function () {
  return gulp.src(['./site/**/*', '!**/node_modules/**'])
    .pipe(deploy({
      cacheDir: '../foo',
      message: 'Update ' + Date.now() + ' ' + getRandomEmoji()
    }));
});

function getRandomEmoji() {
  var emoji = [
    '(╯°□°)╯︵ ┻━┻',
    'ʕ •ᴥ•ʔ',
    'ლ(ಠ益ಠლ)',
    'ಠ_ಠ',
    '~=[,,_,,]:3',
    '(ó ì_í)=óò=(ì_í ò)',
    '¯\\_(ツ)_/¯',
    'ᕙ(⇀‸↼‶)ᕗ',
    '┬┴┬┴┤(･_├┬┴┬┴'
  ];
  return emoji[Math.floor(Math.random() * (emoji.length - 1))]
}