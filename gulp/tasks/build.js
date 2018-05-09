var gulp = require("gulp");
var imagemin = require("gulp-imagemin");
var del = require("del");
var usemin = require("gulp-usemin");
var rev = require("gulp-rev");
var cssnano = require("gulp-cssnano");
var uglify = require("gulp-uglify");
var babel = require("gulp-babel");
var browserSync = require("browser-sync").create();

gulp.task("previewDist", function() {
	browserSync.init({
    	server: {
    		baseDir: "docs"
    	}
    });
});

gulp.task("deleteDistFolder", ["icons"], function() {
	return del("./docs");
});

gulp.task("copyGeneralFiles", ["deleteDistFolder"], function() {
	return gulp.src(["./app/**/*", "!./app/index/html", "!./app/assets/images/**", "!./app/assets/styles/**", "!./app/assets/scrips/**", "!./app/temp", "!./app/temp/**"])
	.pipe(gulp.dest("./docs"));
});

gulp.task("optimizeImages", ["deleteDistFolder"], function() {
	return gulp.src(["./app/assets/images/**/*", "!./app/assets/images/icons", "!./app/assets/images/icons/**/*"])
	.pipe(imagemin({
		progressive: true,
		interlaced: true,
		multipass: true
	}))
	.pipe(gulp.dest("./docs/assets/images"));
});

gulp.task('ES6toES5', function() {
  return gulp.src('./app/temp/scripts/**/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('./app/temp/es5'));
});

gulp.task("useminTrigger", ["deleteDistFolder"], function() {
	gulp.start("usemin");
});

gulp.task("usemin", ["styles", "scripts", "ES6toES5"], function() {
	return gulp.src("./app/index.html")
	.pipe(usemin({
		css: [function() {return rev()}, function() {return cssnano()}],
		js: [function() {return rev()}, function() {return uglify()}]
	}))
	.pipe(gulp.dest("./docs"));
});

gulp.task("build", ["deleteDistFolder", "copyGeneralFiles", "optimizeImages", "useminTrigger"]);