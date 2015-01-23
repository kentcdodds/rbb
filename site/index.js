/** @jsx React.DOM */
var React = require('react');

require('./global.less');

var toggleRbb = getToggleRbb();
toggleRbb(); // turn it on

var Card = require('./components/Card');


var App = React.createClass({
  render() {
    return (
      <div className="animated fadeInUp">
        <Card toggleBackground={toggleRbb} />
      </div>
    )
  }
});

React.render(<App />, document.body);



function getToggleRbb() {
  var on = false;
  var rbb = require('rbb');
  return function toggleRbb() {
    if (on) {
      rbb.off();
      on = false;
    } else {
      rbb(20);
      on = true;
    }
  }
}