var gulp         = require("gulp"),
    nested       = require("postcss-nested"),
    mixins       = require("postcss-mixins"),
    postcss      = require("gulp-postcss"),
    cssvars      = require("postcss-simple-vars"),
    cssImport    = require("postcss-import"),
    autoprefixer = require("autoprefixer");

gulp.task("styles", function() {
	return gulp.src("./app/assets/styles/styles.css")
	    .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
	    .on("error", function(error) {
	    	this.emit("end");
	    	console.log(error.toString());
	    })
	    .pipe(gulp.dest("./app/temp/styles"));
});