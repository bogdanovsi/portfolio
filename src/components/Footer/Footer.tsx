import * as React from "react";

import "./Footer.scss";

import ImageLink, { IImageLink } from "../ImageLink";
import { ILink } from "../../../typing/component-details";

export interface IFooter {
  brand?: IImageLink;
  links?: Array<ILink>;
  imageLinks?: Array<IImageLink>;
  social?: IImageLink[];
  copyright: string;
}

import { Link } from "react-router-dom";

// @ts-ignore
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Footer extends React.Component<IFooter> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className='footer'>
        <div className='container'>
          <div className='footer-row'>
            <div className='footer-links'>
              <div className='navbar-brand footer-cell'>
                <Link to='/' className='navbar-brand'>
                  B
                </Link>
              </div>

              <ul className=' footer-cell navbar-menu'>
                {this.props.links.map((link, i) => {
                  let onClick = link.onClick ? true : false;

                  let routeLink = onClick ? (
                    <Link to={link.href} onClick={link.onClick}>
                      {link.title}
                    </Link>
                  ) : (
                    <Link to={link.href}>{link.title}</Link>
                  );

                  return (
                    <li key={i} className='navbar-menu__item'>
                      {routeLink}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className='footer-row'>
            <div className='footer-cell' />
            <div className='footer-cell footer-btns'>
              {this.props.imageLinks.map((link, i) => {
                return (
                  <ImageLink
                    src={link.src}
                    alt={link.alt}
                    href={link.href}
                    key={i}
                  />
                );
              })}
            </div>
          </div>
          <div className='footer-row'>
            <div className='footer-cell footer-icons'>
              <a href='http://instagram.com'>
                <FontAwesomeIcon icon={["fab", "instagram"]} />
              </a>
              <a href='http://facebook.com'>
                <FontAwesomeIcon icon={["fab", "facebook-square"]} />
              </a>
              <a href='http://twitter.com'>
                <FontAwesomeIcon icon={["fab", "twitter"]} />
              </a>
              <a href='http://linkedin.com'>
                <FontAwesomeIcon icon={["fab", "linkedin"]} />
              </a>
            </div>
            <div className='footer-cell footer-copyright f-start'>
              &#9400;&nbsp;{this.props.copyright}
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
