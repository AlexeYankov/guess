import gulp from "gulp";
import {deleteAsync} from 'del';
import sassCompiler from "sass";
import gulpSass from "gulp-sass";
import minifiCSS from "gulp-csso";
import brf from "gulp-browserify";
import autoPrefixer from "gulp-autoprefixer";
import babel from "babelify";

const paths = {
  styles: {
    src: "assets/scss/styles.scss",
    dest: "src/static/styles",
    watch: "assets/scss/**/*.scss",
  },
  js: {
    src: "assets/js/main.js",
    dest: "src/static/js",
    watch: "assets/js/**/*.js",
  },
};

const sass = gulpSass(sassCompiler);

const js = () => gulp.src(paths.js.src).pipe(brf({transform: [
  babel.configure({presets: ["@babel/preset-env"]})
]})).pipe(gulp.dest(paths.js.dest))

export function styles() {
  return gulp
    .src(paths.styles.src)
    .pipe(sass().on('error', sass.logError)) // add monitoring scss errors! really useful!
    .pipe(
      autoPrefixer({
        overrideBrowserslist: ["last 10 versions"],
        cascade: false,
      })
    )
    .pipe(minifiCSS())
    .pipe(gulp.dest(paths.styles.dest));
}

const clean = async () => await deleteAsync(["src/static/*/"]);

function watchFiles() {
  gulp.watch(paths.styles.watch, styles);
  gulp.watch(paths.js.watch, js);
}

const dev = gulp.series([clean, styles, js, watchFiles]);

export default dev;
