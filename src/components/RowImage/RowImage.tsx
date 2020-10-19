import * as React from "react";
import { getCoords, isPlaying } from "../../Utils";
import Article, { IArticle } from "../Article/Article";
import * as _ from "lodash";

import circle from "../../images/Group 12.png";

import './RowImage.scss';

// @ts-ignore
import Fade from "react-reveal/Fade";

import PhoneX from "../PhoneX";

export interface IRowImage {
  article: IArticle;
  image: any;
  poster?: any;
  imageMinimize?: any;
  animateImage?: any;
  start?: boolean;
  setting?: ISetting;
  setScroll?: any;
  animateRoute: (evAnim: IEventAnim, circle) => void;
}
export interface IRowImageState {
  start?: boolean;
  renderImage: boolean;
}
export interface ISetting {
  className?: string;
  style?: any;
}

export interface IEventAnim {
  offsetRow?: {
    height: number;
    top: number;
  };
  percentScroll: number;
  scrollDirection?: ScrollDirection;
  animateStart?: boolean;
}

export enum ScrollDirection {
  UP = "up",
  DOWN = "down"
}

export default class RowImage extends React.Component<
  IRowImage,
  IRowImageState
> {
  viewBlock = null;
  circle = null;
  phoneScreen = null;
  onScrollHandler = null;
  canvas = null;
  animated = false;
  viewArticle = null;
  viewImage = null;

  constructor(props) {
    super(props);

    this.phoneScreen = React.createRef();

    this.canvas = React.createRef<HTMLCanvasElement>();

    this.viewBlock = React.createRef<HTMLDivElement>();
    this.viewImage = React.createRef<HTMLDivElement>();
    this.viewArticle = React.createRef<HTMLDivElement>();

    this.circle = React.createRef<HTMLImageElement>();

    this.state = {
      start: this.props.start || true,
      renderImage: false
    };

    this.handlerScroll = this.handlerScroll.bind(this);
    this.handlerAnimate = this.handlerAnimate.bind(this);
    this.onScrollHandler = _.throttle(ev => {
      this.handlerScroll(ev, (elemOffset) => {
        if (this.props.animateRoute && elemOffset && elemOffset.animateStart) {
          this.handlerAnimate(elemOffset);
        }
      });
    }, 5).bind(this);
    // this.onScrollHandler = ev => {
    //   this.handlerScroll(ev, (elemOffset) => {
    //     if (this.props.animateRoute && elemOffset && elemOffset.animateStart) {
    //       this.handlerAnimate(elemOffset);
    //     }
    //   });
    // };
  }

  componentWillMount() {
    if (this.props.animateRoute)
      window.addEventListener("scroll", this.onScrollHandler, false);
  }

  componentWillUnmount() {
    if (this.props.animateRoute)
      window.removeEventListener("scroll", this.onScrollHandler, false);
  }

  lastScrollY = 0;

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.renderImage === true && nextState.renderImage === false) {
      requestAnimationFrame(() => {
        this.hiddenImage();
      })

      return false;
    }

    if (this.state.renderImage === false && nextState.renderImage === true) {
      requestAnimationFrame(() => {
        this.showImage();
      })

      return false;
    }

    return true;
  }
  playPromise = null;
  handlerScroll(e, callback: (IEventAnim) => void)  {
    const { top, bottom, screenHeight, height } = getCoords(
      this.viewBlock.current
    );

      const percents = calcPercentsScroll(top, bottom, screenHeight);

      if (percents === null) {
      
        this.setState({
          renderImage: false
        })

        // let video = this.phoneScreen.current;
  
        // if (isPlaying(video)) {
          
        //   if (!this.playPromise) {
        //     video.pause();
        //   } else {
        //     this.playPromise.then(()=>{ video.pause(); })
        //   }
        // }

        requestAnimationFrame(() => {
          callback({
            percentScroll: percents,
            animateStart: false
          });
        })

      } else {

        this.setState({
          renderImage: true
        })

        // let video = this.phoneScreen.current;

        // if (!isPlaying(video)) {
        //   this.playPromise = video.play();

        //   if (this.playPromise) {
        //     this.playPromise.catch((err) => { console.error(err); })
        //   }
        // }
        
        this.lastScrollY = percents;
        
        requestAnimationFrame(() => {
          callback({
            percentScroll: percents,
            animateStart: true
          });
        })
      }  
  }

  handlerAnimate(evAnim: IEventAnim) {
    if (this.props.animateRoute)
      this.props.animateRoute(evAnim, this.circle.current);
  }

  showImage() {
    let phoneWrapper = this.viewBlock.current.querySelector('div.phone_wrapper');
    let cnv = phoneWrapper.querySelector('canvas');

    if (phoneWrapper && cnv) {
      requestAnimationFrame(() => {
        phoneWrapper.replaceChild(this.phoneScreen.current, cnv);
      })
    }
  }

  hiddenImage() {
    let image = this.phoneScreen.current;

    var cnv = document.createElement('canvas');
    var w = cnv.width = image.width;
    var h = cnv.height = image.height;

    for (var j = 0, a; a = image.attributes[j]; j++)
      cnv.setAttribute(a.name, a.value);
    
    requestAnimationFrame(() => {
      cnv.getContext('2d').drawImage(image, 0, 0, w, h);
      
      image.parentElement.replaceChild(cnv, image);
    })
  }

  renderImage() {
    return (
      <div ref={this.viewImage} className='view-image col-md-6'>
        <picture>
          <PhoneX
            refImage={this.phoneScreen}
            screenImage={this.props.image}
          />
        </picture>
      </div>
    );
  }

  renderArticle() {
    return (
      <div ref={this.viewArticle} className='view-article col-md-6'>
        <Article
          style={{ color: "black" }}
          preTitle={this.props.article.preTitle}
          title={this.props.article.title}
          description={this.props.article.description}
          bottomLink={this.props.article.bottomLink}
        />
      </div>
    );
  }

  render() {
    var circleImg = this.props.animateRoute ? (
      <img ref={this.circle} className='view-block_circle' src={circle} />
    ) : null;

    var image = this.renderImage();
    var article = this.renderArticle();

    return (
      <>
        <div
          ref={this.viewBlock}
          className='view-block'
        >
          {circleImg}
          <Fade left opposite>
            {this.props.start ? image : article}
          </Fade>
          <Fade right opposite>
            {this.props.start ? article : image}
          </Fade>
        </div>
      </>
    );
  }
}

function calcPercentsScroll(top: number, bottom: number, screenHeight: number) {
  const isVisible = top < screenHeight && bottom > 0;

  if (!isVisible) return null;

  const percentScrollTop = Math.floor(
    ((screenHeight - top) / screenHeight) * 100
  );
  const percentScrollBottom = Math.floor(
    ((screenHeight - bottom) / screenHeight) * 100
  );

  if (percentScrollTop < 100 && percentScrollBottom > 0)
    return (percentScrollTop + percentScrollBottom) / 2;

  if (percentScrollTop <= 100 && percentScrollBottom <= 0)
    return percentScrollTop / 2;

  if (percentScrollTop >= 100 && percentScrollBottom >= 0)
    return (100 + percentScrollBottom) / 2;

  return 50;
}
