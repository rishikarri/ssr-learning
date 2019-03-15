"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _Layout = _interopRequireDefault(require("../src/components/Layout"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
app.use(_express.default.static(_path.default.resolve(__dirname, "../dist")));
app.get("/*", function (req, res) {
  var jsx = _react.default.createElement(_Layout.default, null);

  var reactDom = (0, _server.renderToString)(jsx);
  res.writeHead(200, {
    "Content-Type": "text/html"
  });
  res.end(htmlTemplate(reactDom));
});
app.listen(2048);

function htmlTemplate(reactDom) {
  // function hi() {
  //     return () => {console.log('hi') }
  // }
  // const hello = hi;
  // hello();
  return "\n       <!DOCTYPE html>\n        <html>\n        <head>\n        <title>Title of the document</title>\n        </head>\n\n        <body>\n            <div id=\"app\">".concat(reactDom, "</div>\n            <script src=\"./app.bundle.js\"></script>\n        </body>\n\n        </html>\n    ");
}
//# sourceMappingURL=server.js.map