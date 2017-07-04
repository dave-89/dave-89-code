import React, {PropTypes} from 'react';

import BannerButton from './BannerButton';

class Banner extends React.Component {
  constructor(props) {
    super(props);
  }

  getWidth() {
    const l = this.props.pages.length;
    const size = 100. / l;
    return size + '%';
  }

  render() {
    const commonStyle = {
      width: this.getWidth(),
      display: 'inline-block',
      position: 'relative',
      float: 'left',
      height: 'inherit',
      border: '3px solid #73AD21'
    };
    const active = this.props.active;
    return (
      <div className="Banner">
        {this.props.pages.map(page => {
          const color = page.title == active ? 'red' : 'blue';
          return(<BannerButton buttonStyle={commonStyle} key={page.id} handler={() => this.props.handler(page.title)} title={page.title} color={color}/>);
        })}
      </div>
    );
  }
}

export default Banner;
