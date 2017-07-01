import React, { PropTypes } from 'react';

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      which : this.props.which
    };
  }

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

  about() {
    return(
      <div>This is default</div>
    );
  }

  render () {
    if(this.state.which == 'home') {
      return this.homePage();
    } else if (this.state.which == 'about') {
      return this.about();
    } else {
      return this.default();
    }
  }
}

export default Page;
