import React, {PropTypes} from 'react';

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: this.props.pages,
      handler: this.props.handler,
      active: this.props.active
    };
  }

  getWidth() {
    const l = this.state.pages.length;
    const size = 100./l;
    return size + '%';
  }

  render() {
    var style = {width:this.getWidth()};
    const active = this.state.active;
    return (
      <div className="Banner">
        {this.state.pages.map(page => {
          if(page.title == active) {
            alert(active);
            style.backgroundColor = 'red';
          } else {
            style.backgroundColor = 'powderblue';
          }
          debugger;
          return (<button
          style={style}
          className="headerButton"
          key={page.id}
          onClick={() => this.state.handler(page.title)}>
          {page.title}
        </button>)})}
      </div>
    );
  }
}

export default Banner;
