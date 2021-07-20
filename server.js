const fs = require("fs");
var path = require('path');
var express = require('express');

var app = express();

const Application = require(appPath).default;
// app.set('view engine', 'ejs');
// app.get('/test', function(req, res){
//   fs.readFile("./dist/stats.json", "utf8", (err, jsonString) => {
//     if (err) {
//       console.log('called')
//       return;
//     }
//     const data = JSON.parse(jsonString)
//     const vendors = data.assetsByChunkName['chunk-vendors'][0];
//     const common = data.assetsByChunkName['common'][0];
//     res.render('profile', {
//       vendors,
//       common
//     });
//   });
// });



server.get("*", async (req, res) => {
  const content = createSSRApp(Application);
  const appContent = await renderToString(content);

  const html = `
  <html>
    <head>
      <title>Hello</title>
      <link rel="stylesheet" href="${manifest["app.css"]}" />
    </head>
    <body>
      ${appContent}
    </body>
  </html>

  `;

  res.end(html);
});


// app.use(express.static(path.join(__dirname, 'dist')));
app.set('port', process.env.PORT || 8080);

var server = app.listen(app.get('port'), function() {
  console.log('listening on port ', server.address().port);
});
