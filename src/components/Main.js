import React, {PropTypes} from 'react';

import Banner from './Banner';
import Page from './Page';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      pages: [
        {
          title: 'home',
          id: 1
        }, {
          title: 'about',
          id: 2
        }, {
          title: 'default',
          id: 0
        }
      ],
      active: 'home'
    };
  }

  selectPage(page) {
    if (this.state.pages < 0) {
      alert('wrong page');
    } else {
      this.setState({active : page});
    }
  }

  render() {
    return (
      <div className="Main">
        <Banner pages={this.state.pages} handler={this.selectPage.bind(this)} active={this.state.active}/>
        <Page which={this.state.active}/>
      </div>
    );
  }
}

export default Main;
