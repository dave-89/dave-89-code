import React, { PropTypes } from 'react';

import Banner from './Banner';
import Page from './Page';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title : this.props.title,
      pages : [
        {title : 'home', id : 1},
        {title : 'about', id : 2},
        {title : 'default', id : 0}
      ],
      active : 'home'
    };
  }

  render () {
    return (
      <div className="Main">
        <Banner pages={this.state.pages}/>
        <Page which={this.state.active}/>
      </div>
    );
  }
}

export default Main;
