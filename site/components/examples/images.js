module.exports = {
  title: 'Images API',
  example: `
rbb([
  'sweet_background_images/awesome.png',
  'sweet_background_images/happy.png',
  'sweet_background_images/sad.png',
  'sweet_background_images/house.png',
  'sweet_background_images/waterfal.png',
  'sweet_background_images/LOTR.png',
  'sweet_background_images/Star_Wars.png'
]);

// alternatively, you could pass an object with an
// images property so you can specify the element
rbb({
  el: document.body,
  images: [ /* your images */ ]
});

// note, with webpack's url-loader, this is totally possible...
// But it kinda breaks Chrome DevTools. Try it out. It's kinda fun
rbb([
  require('./sweet_background_images/sweet.png'),
  // ..etc.
]);
`
};