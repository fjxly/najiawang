//引入平台
var gulp = require('gulp');

//引入插件

var minifyJs = require('gulp-uglify');
var minifyCss = require('gulp-clean-css');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var babel = require('gulp-babel');



//定义一个复制文件的任务（命令）
gulp.task("copyfile",function(){
	return gulp.src("*.html")
	.pipe(gulp.dest("./dist/"));
});


gulp.task("images",function(){
	return gulp.src("./src/img/*.{jpg,png}")
	.pipe(gulp.dest("./dist/img/"));
});
//执行并压缩scss文件
gulp.task('minifyCss',function(){
	return gulp.src('./src/scss/*.scss')
	.pipe(sass())
	// .pipe(minifyCss())
	.pipe(gulp.dest('./dist/css/'));
})
//执行并压缩js文件
gulp.task('minifyJs',function(){
	return gulp.src('./src/js/*.js')
	.pipe(babel())
	// .pipe(minifyJs())
	.pipe(gulp.dest('./dist/js/'));
})

//自动刷新
gulp.task('fresh',['copyfile','images','minifyCss', 'minifyJs'],function(){
	return gulp.src('./*.html').pipe(connect.reload());
})


gulp.task('default',['minifyCss'],function(){
	gulp.watch(['./src/scss/*.scss','./src/js/*.js','./*.html'],['fresh']);

	connect.server({
		// port:8081,
		// livereload:true
		"root":"dist"
	})
})

//简易的web服务器
/*gulp.task("server",function(){
	connect.server({
		"root":"dist"
	});
});*/