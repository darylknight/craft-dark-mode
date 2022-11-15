# Craft CMS Dark Mode

Note: This will not be updated for Craft 4. Confirmation from Brandon that they will add a dark mode in either Craft 5 or 6 [here](https://discord.com/channels/456442477667418113/456442477667418115/1041900612842946671).

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

If you compile your own stylesheet, you'll have full control over how everything looks. If you link to the raw CSS here, you'll get updates automatically without having to do anything.

## Compiling

The stylesheet is written in Sass and compiled with [Laravel Mix](https://laravel-mix.com). If you want to run the compiler locally:

-  Using Terminal, navigate to your project directory and run `npm install`
-  To watch files for changes and refresh the page after saving changes, run `npm run watch`
-  To compile the project, run `npm run dev`
-  To compile the project and minify files for production, run `npm run production`
-  Laravel Mix can be configured in `webpack.mix.js` file in the root of the repository

## Built With

-  [Laravel Mix](https://laravel-mix.com)
-  Appearance credit to [Tailwind](https://tailwindcss.com). Unfortunately I can't build it with Tailwind as we're just overriding CSS, not changing HTML, but I've taken the colour scheme from the Tailwind color palette
-  Linking directly to the raw CSS in this repository doesn't work as the MIME type is incorrect. However, through some magic I don't understand, jsdelivr.com will automatically serve the CSS file in this repository [here](https://cdn.jsdelivr.net/gh/darylknight/craft-dark-mode/dist/css/cp.css) as the correct type, so you can link to that directly.

### Notes

Hopefully at some point there will be either a first party dark mode plugin, or native dark mode support in the control panel.

## Authors

-  **CodeKnight** - [Website](https://codeknight.co.uk)
