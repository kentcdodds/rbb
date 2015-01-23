/** @jsx React.DOM */
var React = require('react');
var rbbVersion = require('rbb').version;

var mui = require('material-ui');
var Paper = mui.Paper;
var Button = mui.RaisedButton;
var Icon = mui.Icon;

var ReactStyle = require('react-style');
var CodeExample = require('./CodeExample');

var center = ReactStyle({
  textAlign: 'center'
});

var left = ReactStyle({
  textAlign: 'left'
});

var marginTopMedium = ReactStyle({
  marginTop: '30px'
});

var containerStyles = ReactStyle({
  margin: '50px auto',
  backgroundColor: 'white',
  display: 'inline-block',
  maxWidth: '800px'
});

var wrapper = ReactStyle({
  textAlign: 'center'
});

var contentPadding = 50;

var contentStyles = ReactStyle({
  padding: `${contentPadding}px`
});


var useageExample = require('./examples/usage');
var conventionExample = require('./examples/convention');
var configurationExample = require('./examples/configuration');
var imagesExample = require('./examples/images');
var examples = [useageExample, conventionExample, configurationExample, imagesExample];
var codeExamples = examples.map(function(example, index) {
  var codeExampleStyles = ReactStyle({
    marginTop: '30px',
    marginRight: `-${contentPadding}px`,
    marginLeft: `-${contentPadding}px`
  });
  return (
    <div styles={marginTopMedium}>
      <hr />
      <h2>{example.title}</h2>
      <CodeExample key={index} styles={[codeExampleStyles, left]} innerPadding="30px">
        {example.example}
      </CodeExample>
    </div>
  );
});

module.exports = React.createClass({
  render() {
    return (
      <div styles={wrapper} {...this.props}>
        <Paper zDepth={1} styles={[containerStyles, center]}>
          <div styles={contentStyles}>
            <h1>Random Beautiful Background</h1>
            <div>
              <Button key="toggleBackground" label="Toggle Background" onClick={this.props.toggleBackground} />
            </div>
          {codeExamples}
          </div>
          <div style={{marginBottom: '30px'}}>
            rbb version {rbbVersion} built with ♥ by Kent C. Dodds (ó ì_í)=óò=(ì_í ò)
            <div style={{marginTop: '10px'}}>
              <a href="https://github.com/kentcdodds/rbb">
                <Icon icon="mui-icon-github" />
              </a>
            </div>
          </div>
        </Paper>
      </div>
    )
  }
});
