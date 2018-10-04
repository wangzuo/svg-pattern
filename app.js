import './global.scss';
import styles from './app.module.scss';
import cx from 'classnames';
import React, { Component } from 'react';
import Body from './body';

export default class App extends Component {
  state = {
    tab: 0,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="199" viewBox="0 0 100 199"><g fill="#000"><path d="M0 199V0h1v1.99L100 199h-1.12L1 4.22V199H0zM100 2h-.12l-1-2H100v2z"></path></g></svg>`
  };

  handleSvgChange = e => {
    this.setState({ svg: e.target.value });
  };

  render() {
    const bodyStyle = {
      backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
        this.state.svg
      )}")`
    };

    return (
      <Body style={bodyStyle}>
        <div className={styles.container}>
          <div className={styles.tabs}>
            <div
              className={cx(styles.tab, {
                [styles.tabActive]: this.state.tab === 0
              })}
              onClick={() => this.setState({ tab: 0 })}
            >
              svg
            </div>
            <div
              className={cx(styles.tab, {
                [styles.tabActive]: this.state.tab === 1
              })}
              onClick={() => this.setState({ tab: 1 })}
            >
              css
            </div>
          </div>

          {this.state.tab === 0 && (
            <textarea
              className={styles.textarea}
              onChange={this.handleSvgChange}
              value={this.state.svg}
              rows="10"
              placeholder="svg"
            />
          )}

          {this.state.tab === 1 && (
            <textarea
              className={styles.textarea}
              value={`background-image: ${bodyStyle.backgroundImage}`}
              rows="10"
              placeholder="svg"
            />
          )}

          <a href="https://github.com/wangzuo/svg-pattern">Source</a>
        </div>
      </Body>
    );
  }
}
