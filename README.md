# Craft CMS Dark Mode

This is a dark mode stylesheet for the Craft CMS control panel. It's not perfect, but it'll stop me getting blinded when I'm working on sites late at night. Suggestions and improvements welcome!

## How does it look?

It's still a work in progress, but here's a screenshot of what you can expect:

![image](https://user-images.githubusercontent.com/1250017/162060707-7af4ac61-7cc8-4f9e-9de2-dc6f411b2be6.png)

## Prerequisites

This stylesheet is best paired with the excellent [Control Panel CSS](https://plugins.craftcms.com/cp-css). That plugin will allow you to use custom CSS inside the Craft control panel, or link to this stylesheet directly.

**This stylesheet will only ever be tested in the latest version of Craft.**

## Installing

There are a bunch of ways to use this stylesheet.

1. Clone/fork this repository, run the build process locally and create your own version
2. In Control Panel CSS, under **CSS File(s)**, link directly to the compiled CSS [hosted on jsDelivr](https://cdn.jsdelivr.net/gh/darylknight/craft-dark-mode/dist/css/cp.css)
3. Copy the CSS and paste it into your [Control Panel CSS](https://plugins.craftcms.com/cp-css) editor under **Additional CSS**

If you compile your own stylesheet, you'll have full control over how everything looks. If you link to the raw CSS here, you'll get updates automatically without having to do anything (assuming I keep this updated).

## Compiling

The stylesheet is written in Sass and compiled to CSS with [Laravel Mix](https://laravel-mix.com). If you want to run the compiler locally:

-  Using Terminal, navigate to your project directory and run `npm install`
-  To watch files for changes and refresh the page after saving changes, run `npm run watch`
-  To compile the project, run `npm run dev`
-  To compile the project and minify files for production, run `npm run production`
-  Laravel Mix can be configured in `webpack.mix.js` file in the root of the repository

## Built With

-  [Laravel Mix](https://laravel-mix.com)
-  Appearance credit to [Discord](https://discord.com), which this stylesheet is basically identical to until I spend more time updating it
-  Linking directly to the raw CSS in this repository doesn't work as the MIME type is incorrect. However, through some magic I don't understand, jsdelivr.com will automatically serve the CSS file in this repository as the correct type, so you can link to that directly.

## To Do

Improve the stylesheet. There are loads of places where the colours are wrong, this is just a start.

### Notes

Hopefully at some point there will be either a first party dark mode plugin, or native dark mode support in the control panel.

## Authors

-  **CodeKnight** - [Website](https://codeknight.co.uk)
