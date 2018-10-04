import styles from './app.module.scss';
import React, { Component } from 'react';

export default class App extends Component {
  state = {
    svg: ''
  };

  handleSvgChange = e => {
    this.setState({ svg: e.target.value });
  };

  render() {
    return (
      <div className={styles.container}>
        <textarea onChange={this.handleSvgChange} />
        <div
          style={{ backgroundImage: url(encodeURIComponent(this.state.svg)) }}>
          hello world
        </div>
      </div>
    );
  }
}
