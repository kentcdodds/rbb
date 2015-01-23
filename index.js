let originalBackground;
let originalBackgroundSize;
let el;

module.exports = rbb;
module.exports.off = off;


function rbb({
  root = 'rbb_backgrounds',
  count,
  extension = 'png',
  prefix = 'bg',
  images,
  element = document.documentElement
  } = {}) {
  if (Number.isInteger(arguments[0])) {
    count = arguments[0];
  } else if (Array.isArray(arguments[0])) {
    images = arguments[0];
  }
  if (!images && !count) {
    throw new Error('rbb: You must either specify images or count');
  }

  let background;
  if (images) {
    background = rand(images);
  } else {
    background = `${root}/${prefix}${rand(count - 1)}.${extension}`;
  }

  // set internal state
  el = element;
  originalBackground = el.style.background;
  originalBackgroundSize = el.style['background-size'];

  // set the styles
  el.style.background = 'url("' + background + '") no-repeat center center fixed';
  el.style['background-size'] = 'cover';
  return module.exports;
}

function off() {
  el.style.background = originalBackground;
  el.style['background-size'] = originalBackgroundSize;
  return module.exports;
}

function rand(items) {
  if (Number.isInteger(items)) {
    return Math.floor(Math.random() * items);
  } else if (Array.isArray(items)) {
    return items[Math.floor(Math.random() * (items.length - 1))];
  } else {
    return null;
  }
}