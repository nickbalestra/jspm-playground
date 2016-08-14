# JSPM playground

## Getting started

This branch will follow some simple steps to get you up and running with jspm at a basic level.
The final structure of the project will look like:

```
jspm-playground/
|-- app/
    |-- client/
        |-- config.js
        |-- jspm_packages/
        |-- client.js
        |-- index.html
    |-- index.js
|-- node_modules/
|-- package.json
|-- README.md
```

TODO:
- [x] initialize npm
- [x] install jspm and initialize it
- [x] install express and set-up a basic server
- [x] test System.js 
- [x] us jspm to install react and enjoy

## CSS modules

CSS modularisation where styles can be scoped directly to the render code that they are bundled are awesome!
In this example we'll be installing [Aphrodite](https://github.com/Khan/aphrodite) via jspm, and slightly componentize a bit our initial app structure.

- [x] install Aphrodite
- [x] import the module and start writing css modules!

## Hot reloading

Reloading modules as needed to have a satisfyingly fast feedback loop when developing

- [x] using system-js-hot-reloader together with chokidar-socket-emitter

## Production workflows

- [x] Sfx bundle and production index
- [x] Build scripts