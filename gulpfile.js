const { src, dest } = require('gulp');
var imageResize = require('gulp-image-resize');

const paths = {
  img: {
      source: '../myweb/site-perso/img/home_*.png',
      dest: 'dist/'
  },
};

const resize = (done) => {
  return src(paths.img.source)
  .pipe(imageResize({
    width : 400,
    crop : false,
    upscale : false
  }))
  .pipe(dest(paths.img.dest));
  done();
}


 /*
gulp.task('default', function () {
  gulp.src('../myweb/site-perso/img/home_risk.png')
    .pipe(imageResize({
      width : 400,
      crop : false,
      upscale : false
    }))
    .pipe(gulp.dest('dist'));

    gulp.src('../myweb/site-perso/img/home_app.png')
    .pipe(imageResize({
      width : 400,
      crop : false,
      upscale : false
    }))
    .pipe(gulp.dest('dist'));
});
*/

exports.default = resize;
