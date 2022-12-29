const mix = require('laravel-mix')

mix.sass('src/scss/style.scss', 'assets/css')
mix.js('src/js/app.js', 'assets/js').vue()
mix.copyDirectory('src/images', 'assets/images')

if (mix.inProduction()) {
    mix.version()
} else {
    mix.webpackConfig({
        devtool: 'inline-source-map'
    })
}