import React, { PropTypes } from 'react';

class BannerButton extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    var style = {...this.props.buttonStyle, backgroundColor : this.props.color};
    return(
      <button style={style} onClick={this.props.handler}>
        {this.props.title}
      </button>
    );
  }
}

export default BannerButton;
