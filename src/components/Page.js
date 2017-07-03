import React, { PropTypes } from 'react';

class Page extends React.Component {

  homePage() {
    return(
      <div>This is the home page</div>
    );
  }

  about() {
    return(
      <div>This is about</div>
    );
  }

  default() {
    return(
      <div>This is default</div>
    );
  }

  render () {
    if(this.props.which == 'home') {
      return this.homePage();
    } else if (this.props.which == 'about') {
      return this.about();
    } else {
      return this.default();
    }
  }
}

export default Page;
