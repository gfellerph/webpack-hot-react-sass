# webpack-hot-react-sass

My very own boilerplate for everything react.

## Features
* ES6/7 using babel-loader
* SASS Compilation using node-sass/sass-loader
* Easy integration of custom boostrap build using bootstrap-loader
* Simple HTML templating using html-webpack-template
* Modular SCSS using `require`
* Stable production build using mini-/uglification and CSS extraction

## Installation/Setup
1. Clone repository / Download ZIP-File
  * If you cloned the repo, make sure you change the git origin!
* Run `npm install`
* To start the development-server...
  1. Run `npm run dev` to start webpack-dev-server
  * Fire up your favorite browser and navigate to http://localhost:8080/
* To run a production build...
  * Run `npm run build` to compile assets to `/build/` folder.

## Missing features / TODO
- "Real" SCSS-Hotloading (new class definitions are not loaded, only changes)
- a "real" example app using this boilerplate
- unit test integration
