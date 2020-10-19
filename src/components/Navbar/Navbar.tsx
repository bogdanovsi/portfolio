import * as React from "react";
// @ts-ignore
import uniqueId from "react-html-id";

import "./navbar.scss";

import { ILink } from "../../../typing/component-details";
import ImageLink, { IImageLink } from "../ImageLink";

import { Link } from "react-router-dom";
import { number } from "prop-types";

export interface INavBar {
  brand: IImageLink;
  links: Array<ILink>;
  imageLinks?: Array<IImageLink>;
  className?: string;
  styleNavbar?: object;
  brandStyle?: object;
  classNavBrand?: string;
  fixedOnScroll?: boolean;
}

export interface INavBarState {
  fixed: boolean;
  width: number;
}

export default class NavBar extends React.PureComponent<INavBar, INavBarState> {
  navbar: any;
  navbarWrapper: any;
  sticky: number;
  stickyWrapper: number;

  constructor(props) {
    super(props);

    this.state = {
      fixed: false,
      width: 0
    };
    
    this.navbar = React.createRef<HTMLElement>();
    this.navbarWrapper = React.createRef<HTMLDivElement>();

    uniqueId.enableUniqueIds(this);

    this.handlerScroll = this.handlerScroll.bind(this);
    this.handlerResize = this.handlerResize.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.updateStickyPosition = this.updateStickyPosition.bind(this);
  }

  componentWillMount() {
    if (this.props.fixedOnScroll) {
      this.setState({
        fixed: true
      })
      window.addEventListener("scroll", this.handlerScroll);
    }

    window.addEventListener("resize", this.handlerResize);
  }

  componentDidMount() {
    setTimeout(() => {
      this.sticky = this.navbar.current.offsetTop;
      this.stickyWrapper = this.navbarWrapper.current.offsetTop;
    }, 30);

    if (this.props.fixedOnScroll) {
      this.navbar.current.style.opacity = 0;
    }

   
  }

  componentWillUnmount() {
    if (this.props.fixedOnScroll) {
      window.removeEventListener("scroll", this.handlerScroll);
    }

    window.removeEventListener("resize", this.handlerResize);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth });
  }
  updateStickyPosition() {
    this.stickyWrapper = this.navbarWrapper.current.offsetTop;
  }

  handlerResize() {
    this.updateWindowDimensions();
    this.updateStickyPosition();
  }

  handlerScroll(ev) {
    let offset = window.pageYOffset;

    
    if (offset >= this.stickyWrapper) {
      requestAnimationFrame(() => {
        this.navbar.current.style.visibility = "visible";
        this.navbar.current.style.opacity = "1";
      })
    } else {
      requestAnimationFrame(() => {
        this.navbar.current.style.visibility = "hidden";
        this.navbar.current.style.opacity = "0";
      }) 
    }
  }

  renderNavbarLinks(p_links: Array<ILink>) {
    if (!p_links) return null;

    return p_links.map((link, i) => {
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
    });
  }

  renderImagesLinks(p_links: Array<IImageLink>) {
    if (!p_links) return null;

    const imageLinks = p_links.map((link, i) => {
      return (
        <ImageLink src={link.src} alt={link.alt} href={link.href} key={i} />
      );
    });

    return <div className='navbar-btns'> {imageLinks} </div>;
  }

  render() {
    let navbarLinks = this.renderNavbarLinks(this.props.links);
    let imageLinks = this.renderImagesLinks(this.props.imageLinks);

    let navbarClassName =
      "navbar" +
      (this.props.className ? " " + this.props.className : "") +
      (this.state.fixed ? " sticky" : "");

    return (
      <div ref={this.navbarWrapper}>
        <nav
          ref={this.navbar}
          className={navbarClassName}
          style={this.props.styleNavbar}
        >
          <div className='navbar-brand'>
            <Link
              to='/'
              className={this.props.classNavBrand}
              style={this.props.brandStyle}
            >
              B
            </Link>
          </div>
          <div className='navbar-items'>
            <ul className='navbar-menu'>{navbarLinks}</ul>
            {imageLinks}
          </div>
          <input
            type='checkbox'
            className='burger__checkbox'
            //@ts-ignore
            id={this.getUniqueId("burger")}
          />

          <label
            className='burger'
            //@ts-ignore
            htmlFor={this.getUniqueId("burger")}
          >
            <div className='burger__line' />
            <div className='burger__line' />
            <div className='burger__line' />
          </label>
          <div
            className='burger__menu'
            style={this.state.width > 760 ? { display: "none" } : {}}
          >
            <ul className='navbar-menu'>{navbarLinks}</ul>
            {imageLinks}
          </div>
        </nav>
      </div>
    );
  }
}
