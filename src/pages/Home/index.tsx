import * as React from "react";

import "./Home.scss";

import { Landing } from "../../context";

import Bgif from "../../images/What-are-you-up_Only-B--fit.gif";

import appStore from "../../images/btn-app-store.png";
import googlePlay from "../../images/btn-google-play-store.png";

import arrowDown from "../../images/Group 2.png";

import screenCall from "../../images/Audio_Call--fit.gif";

import Article from "../../components/Article/Article";
import NavBar from "../../components/Navbar/Navbar";
import PhoneX from "../../components/PhoneX";
import RowImage from "../../components/RowImage/RowImage";
import { ILink } from "../../../typing/component-details";


import CaptionButton from "../../components/CaptionButton/CapptionButton";
import Video from "../../components/Video";

export interface IHome {
  links: Array<ILink>;
}

export interface IHomeState {
}

export default class Home extends React.PureComponent<IHome, IHomeState> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ overflowX: "hidden" }}>
        <div className='welcome-block'>
          <NavBar
            brand={Landing.brand}
            links={this.props.links}
            classNavBrand={"navbar-brand"}
          />
          <div className='app-preview container'>
            <div className='app-preview-text'>
              <Article
                preTitle='B Messenger'
                title='More then just messaging…'
                description='Chat, meet, discover in one place. We made an application in which you can maintain old connections and create new ones. Let’s get it started!'
              />
              <div className='app-preview-text__footer'>
                <CaptionButton href='#' imgBtn={appStore} alt='appStore' />

                <CaptionButton
                  title='Soon'
                  href='#'
                  imgBtn={googlePlay}
                  alt='googlePlay'
                />
              </div>
            </div>
            <div className='app-preview__image'>
              <PhoneX screenImage={screenCall} />
            </div>
          </div>
          <div className='arrow-block'>
            <div className='arrow-down'>
              <a href='#features'>
                <img src={arrowDown} alt='' />
              </a>
            </div>
          </div>
        </div>
        <NavBar
          brand={Landing.brand}
          links={this.props.links}
          imageLinks={[Landing.buttonsStore[0]]}
          classNavBrand={"navbar-brand gradient-text"}
          className='navbar--terms'
          fixedOnScroll={true}
        />
        <div id='features' className='container'>
          {
            Landing.blocksContent.map((block, i) => {
            let isStart = i % 2 ? false : true;

            return (
              <RowImage
                key={block.title}
                animateRoute={block.animateRoute}
                start={isStart}
                image={block.poster}
                article={{ title: block.title, description: block.description }}
              />
            );
          })}

        </div>
        <div className='custom container'>
          <div className='custom-block'>
            <p className='title col-lg-12 col-md-12'>So, what are you up to?</p>
            <img src={Bgif} className="col-lg-4 col-md-6" />
            {/* <Video
              video={Bgif}
              autoplay={true}
              className="col-lg-4 col-md-6" /> */}
          </div>
        </div>
      </div>
    );
  }
}
