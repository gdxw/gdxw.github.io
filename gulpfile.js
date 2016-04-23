var gulp = require('gulp');

// 引入组件
var sass = require('gulp-sass'),            // less
    minifycss = require('gulp-minify-css'), // CSS压缩
    uglify = require('gulp-uglify'),        // js压缩
    concat = require('gulp-concat'),        // 合并文件
    rename = require('gulp-rename'),        // 重命名
    imagemin = require('gulp-imagemin'),    // 图片压缩
    del = require('del');                   // 清空文件夹


// sass 编译
gulp.task('sass', function(){
  gulp.src('src/sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('static/css/'));
});

// sass 编译
gulp.task('bootstrap', function(){
  gulp.src('src/sass/bootstrap.scss')
    .pipe(sass())
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(gulp.dest('static/css/'));
  gulp.src('src/js/bootstrap/bootstrap.js')
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('static/js/lib'));
});

// sass 编译
gulp.task('myblogstyle', function(){
  gulp.src('src/sass/myblogstyle.scss')
    .pipe(sass())
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(gulp.dest('static/css/'));
});


//css压缩
gulp.task('min-css',function(){
    gulp.src('static/css/*.css')
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifycss())
        .pipe(gulp.dest('static/css/'));
});

// 图片处理
gulp.task('img', function(){
  gulp.src('src/img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('static/img/'));
});

// js合并和压缩
gulp.task('js', function() {
  gulp.src('src/js/lib/*.js')
    .pipe(concat('gdxwlib.js'))
    .pipe(gulp.dest('static/js/lib'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('static/js/lib'));
  gulp.src([
      'bower_components/jquery/dist/jquery.min.js',
      'bower_components/requirejs/require.js'
  ]).pipe(gulp.dest('static/js/lib'));
  gulp.src('src/js/main.js').pipe(gulp.dest('static/js'));
});

// 清空css、js
gulp.task('clean', function(cb) {
    del([
        'static/js/**/*',
        'static/css/**/*',
        'static/fonts/**/*',
        'static/img/**/*'
    ],cb);
});

// 定义develop任务在日常开发中使用
gulp.task('watch-sass',function(){
  gulp.run('sass','min-css');
  gulp.watch('src/sass/**/.scss', ['sass','min-css']);
});

// 定义一个prod任务作为发布或者运行时使用
gulp.task('prod',function(){
   gulp.run('sass','img','js');
});

// gulp命令默认启动的就是default认为,这里将clean任务作为依赖,也就是先执行一次clean任务,流程再继续.
gulp.task('default',function(){
    gulp.run('clean','prod');
});