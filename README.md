# react-redux-skeleton
A basic **react** skeleton accompanied with **redux** to main your data in a centralized location(redux store). Also includes **React Router v4** to get you started with routing

## Getting started

```
git clone git clone https://github.com/MujtabaKably/react-redux-skeleton.git
cd react-redux-skeleton
npm install
npm run dev (to run webpack dev server)
```

### note
> This skeleton is concentrated on the client side of the application with webpack dev server creating a server.
> Basic understanding of [webpack](https://webpack.js.org/) is required


## Usage

### package.json
```
{
  "name": "react-redux-skeleton",
  "version": "0.1.0",
  "description": "",
  "main": "webpack.config.js",
  "scripts": {
    "dev": "webpack-dev-server --hot --inline",
    "start": "export NODE_ENV=production && webpack-dev-server",
    "test": "echo \"Error: no test specified\" && exit 1",
  }
}
```
The following tasks should be done to package.json by the end users
[ ] Change the name
[ ] \(Optional) Change the version
[ ] Add a description
[ ] Change the **main** attribute (currently set for `webpack.config.js`)
[ ] Change the scripts as desired

## Directory structure
### public
Contains all the client side implementation of react

### public/src 
- main.js - Start point of the your react application
- store.js - configured redux store with [redux-thunk](https://www.npmjs.com/package/redux-thunk) and [redux-logger](https://www.npmjs.com/package/redux-logger) middlewares.
- **modules** - contains all your modules. Already consist of the app module. Preferred place to add your modules
- **app** - basic application setup with routes and google's [material-ui](http://www.material-ui.com/#/) 

### public/dist
It contains all the files that will be served to your clients. Babelified and minified version of your source code.

## License
#### MIT License

Copyright (c) [2017] [react-redux-skeleton]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
