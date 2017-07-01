import React, { PropTypes } from 'react';

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pages : this.props.pages
    };
  }
  render () {
    return(
      <div className="Banner">
        {this.props.pages.map(page => <div className="Section" key={page.id}>{page.title}</div>)}
      </div>
    );
  }
}

export default Banner;
