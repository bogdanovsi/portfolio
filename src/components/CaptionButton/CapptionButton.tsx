import * as React from "react";

import "./captionButton.scss";

export interface ICaptionButton {
  title?: string;
  alt?: string;
  imgBtn: any;
  href: string;
}

export default class CaptionButton extends React.PureComponent<ICaptionButton> {
  renderTitle() {
    if (this.props.title) {
      return <p className='caption-btn__title'>{this.props.title}</p>;
    } else {
      return (
        <p
          className='caption-btn__title'
          style={{
            marginTop: "1rem"
          }}
        />
      );
    }
  }

  render() {
    let title = this.renderTitle();

    return (
      <div className='caption-btn'>
        {title}
        <a href={this.props.href}>
          <img src={this.props.imgBtn} alt={this.props.alt} />
        </a>
      </div>
    );
  }
}
