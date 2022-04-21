const mix = require('laravel-mix');
const primarySiteUrl = process.env.PRIMARY_SITE_URL; // Get value from .env to use as Browsersync proxy URL

mix.setPublicPath('./dist')

	.sass('src/cp.scss', 'dist/css')

	.browserSync({
		files: ['assets/css/*', 'assets/js/*', 'templates/**/*'], // BrowserSync will refresh every time one of these files changes
		proxy: primarySiteUrl, // This takes PRIMARY_SITE_URL from the .env file so devs can have different local URLs
		notify: false,
	})

	.version()
	.disableNotifications();
