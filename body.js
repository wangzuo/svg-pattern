import { Component, Children } from 'react';
import withSideEffect from 'react-side-effect';

class Body extends Component {
  render() {
    return Children.only(this.props.children);
  }
}

function reducePropsToState(propsList) {
  const style = {};
  propsList.forEach(function(props) {
    Object.assign(style, props.style);
  });
  return style;
}

function handleStateChangeOnClient(style) {
  Object.assign(document.body.style, style);
}

export default withSideEffect(
  reducePropsToState,
  handleStateChangeOnClient
)(Body);
