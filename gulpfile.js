const {src, dest, series, watch} = require('gulp');
const concat = require('gulp-concat');
const htmlmin = require('gulp-htmlmin');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');


//создаем такс (задачу) для стилей
const styles = () => {
    return src('src/style/**/*.css')
        .pipe(concat('style.css'))
        .pipe(autoprefixer('last 5 versions'))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(dest('dist'));
} 
//создаем таск (задачу) для html
const htmlMinify = () => {
    return src('src/**/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(dest('dist'));
}


//экпорт тасков (задач)
// exports.styles = styles;
// exports.html = htmlMinify;

exports.default = series(styles, htmlMinify);