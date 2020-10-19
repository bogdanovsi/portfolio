const express = require("express");
const webpack = require("webpack");
const middleware = require("webpack-dev-middleware");
const config = require("./webpack.config.js");

const app = express();
// const compiler = webpack(config);

// const instance = middleware(compiler, {
//   publicPath: config.output.publicPath
// });
// app.use(instance);

var router = express.Router();
router.get("/", function (req, res, next) {
  res.send("API is working properly");
});


app.set('port', 3000);