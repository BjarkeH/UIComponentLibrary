'use strict';

/*
* Require the path module
*/
const path = require('path');

/*
 * Require the Fractal module
 */
const fractal = module.exports = require('@frctl/fractal').create();

/*
 * Give your project a title.
 */
fractal.set('project.title', 'Inorbit UI - Visual Styleguide');

/*
 * Tell Fractal where to look for components.
 */
fractal.components.set('path', path.join(__dirname, 'components'));
fractal.components.set('default.preview', '@preview');

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set('path', path.join(__dirname, 'docs'));

/**
 * Tell Fractal where to output the static build
 */
fractal.web.set('builder.dest', __dirname + '/build');

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set('static.path', path.join(__dirname, 'www'));


const mandelbrot = require('./node_modules/@frctl/mandelbrot');

const myCustomisedTheme = mandelbrot({
    skin: "maroon",
    panels: ["html", "info", "resources"],
    nav: ["docs", "components"]
});

fractal.web.theme(myCustomisedTheme);