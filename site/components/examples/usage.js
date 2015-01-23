module.exports = {
  title: 'Usage',
  example: `
// Get the rbb function
// CommonJS style
var rbb = require('rbb');

// AMD style
define(['path/to/rbb', function(rbb) {
  // use it here
});

// Global
window.rbb; // ... yeah

// then invoke the function using any of the methods below
// for example
rbb(/* pass arguments as described below */);

// then a random image is set as background to the desktop

// when you're ready to remove the image (like the user logs in or something)
rbb.off();
// random image is removed
`
};
