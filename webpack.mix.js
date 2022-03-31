const mix = require('laravel-mix');

mix.setPublicPath('./dist')

	.sass('src/cp.scss', 'dist/css')

	.version()
	.disableNotifications();
