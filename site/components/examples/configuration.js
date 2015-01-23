module.exports = {
  title: 'Configuration API',
  example: `
var rbb = require('rbb');
rbb({
  root: 'path/to/my_rbb_backgrounds', // defaults to 'rbb_backgrouns'
  count: 6, // required
  extension: 'jpg', // optional, defaults to png
  prefix: 'bg', // optional, defaults to bg
  el: document.body // optional, defaults to document.documentElement
});
// this configuration would require the following file structure:
// path
//   to
//     my_rbb_backgrounds
//       bg0.jpg
//       bg1.jpg
//       bg2.jpg
//       bg3.jpg
//       bg4.jpg
//       bg5.jpg
`
};