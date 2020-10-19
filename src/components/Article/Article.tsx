import * as React from "react";

import "./article.scss";

import { ILink } from "../../../typing/component-details";
import { Link } from "react-router-dom";

export interface IArticle {
  preTitle?: string;
  title: string;
  description?: string;
  bottomLink?: ILink;
  style?: object;
}

export default class Article extends React.PureComponent<IArticle> {
  constructor(props) {
    super(props);
  }

  render() {
    let preTitle = null;
    let bottomLink = null;
    let description = null;

    if (this.props.preTitle) {
      preTitle = <p className='article_pre-title'>{this.props.preTitle}</p>;
    }
    if (this.props.bottomLink) {
      bottomLink = (
        <p className='article_bottom-link'>
          <Link
            to={this.props.bottomLink.href}
            onClick={this.props.bottomLink.onClick}
          >
            {this.props.bottomLink.title}
          </Link>
        </p>
      );
    }
    if(this.props.description){
      description = <p className='article_p'>{this.props.description}</p>
    }

    return (
      <div className='article' style={this.props.style}>
        {preTitle}
        <p className='article_title'>{this.props.title}</p>
        {description}
        {bottomLink}
      </div>
    );
  }
}
