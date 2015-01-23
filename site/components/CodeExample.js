/** @jsx React.DOM */
var React = require('react');
var Highlight = require('react-highlight');
// load highlightjs styles
require('highlight.js/styles/github.css');
require('./CodeExample.less');

module.exports = React.createClass({
  render() {
    return (
      <div {...this.props}>
        <Highlight className="javascript CodeExample">
          {this.props.children}
        </Highlight>
      </div>
    );
  }
});
