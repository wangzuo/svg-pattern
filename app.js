import './global.scss';
import styles from './app.module.scss';
import cx from 'classnames';
import React, { Component } from 'react';
import Body from './body';

const TEMPLATES = {
  architect: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="199" viewBox="0 0 100 199"><g fill="#000"><path d="M0 199V0h1v1.99L100 199h-1.12L1 4.22V199H0zM100 2h-.12l-1-2H100v2z"></path></g></svg>`,
  'brick-wall': `<svg width="42" height="44" viewBox="0 0 42 44" xmlns="http://www.w3.org/2000/svg"><g id="Page-1" fill="none" fill-rule="evenodd"><g id="brick-wall" fill="#000"><path d="M0 0h42v44H0V0zm1 1h40v20H1V1zM0 23h20v20H0V23zm22 0h20v20H22V23z"/></g></g></svg>`,
};

const DEFAULT = 'architect';

export default class App extends Component {
  state = {
    tab: 0,
    template: DEFAULT,
    svg: TEMPLATES[DEFAULT],
  };

  handleSvgChange = (e) => {
    this.setState({ svg: e.target.value });
  };

  handleTemplateChange = (e) => {
    const template = e.target.value;
    this.setState({ template, svg: TEMPLATES[template] });
  };

  render() {
    const { tab, svg, template } = this.state;
    const bodyStyle = {
      backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(svg)}")`,
    };

    return (
      <Body style={bodyStyle}>
        <div className={styles.container}>
          <div className={styles.tabs}>
            <div
              className={cx(styles.tab, {
                [styles.tabActive]: tab === 0,
              })}
              onClick={() => this.setState({ tab: 0 })}
            >
              svg
            </div>
            <div
              className={cx(styles.tab, {
                [styles.tabActive]: tab === 1,
              })}
              onClick={() => this.setState({ tab: 1 })}
            >
              css
            </div>
          </div>

          {tab === 0 && (
            <textarea
              className={styles.textarea}
              onChange={this.handleSvgChange}
              value={svg}
              rows="10"
              placeholder="svg"
            />
          )}

          {tab === 1 && (
            <textarea
              className={styles.textarea}
              value={`background-image: ${bodyStyle.backgroundImage}`}
              rows="10"
              placeholder="svg"
            />
          )}

          <select
            value={template}
            className={styles.select}
            onChange={this.handleTemplateChange}
          >
            <option value="architect">architect</option>
            <option value="brick-wall">brick-wall</option>
          </select>

          <a href="https://github.com/wangzuo/svg-pattern">View source on GitHub</a>
        </div>
      </Body>
    );
  }
}
