import * as React from "react";

export interface IImageLink {
  src: any;
  className?: string;
  alt?: string;
  href?: string;
}

export default class ImageLink extends React.Component<IImageLink> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={this.props.className}>
        <a href={this.props.href}>
          <img src={this.props.src} alt={this.props.alt} />
        </a>
      </div>
    );
  }
}
