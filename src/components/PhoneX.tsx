import * as React from "react";

import iphoneBorder from "../images/iphone_silver.png";
// import defaultScreen from "../images/iphone.png";
// import { isPlaying } from "../Utils";
// import Video from "./Video";

export interface IPhoneX {
  style?: object;
  refImage?: any;
  poster?: any;
  screenImage: any;
  optimizationRender?: boolean;
}
export interface IPhoneXState {
}

const style = {
  border: {
    position: "relative",
    zIndex: 5,
    width: "100%",
    background: null
  },
  screen: {
    zIndex: 3,
    width: "100%",
    height: "100%",
    position: "absolute",
    borderRadius: "46px",
    border: "20px solid transparent",
    display: 'block'
  },
  wrapper: {
    position: "relative",
    borderRadius: "80px",
    float: "left",
    transform: "scale(0.8)",
    zIndex: 5
  }
};

export default class PhoneX extends React.Component<IPhoneX, IPhoneXState> {
  phoneWrapper = null;
  phoneImage = null;
  imageScreen = null;

  constructor(props) {
    super(props);

    this.imageScreen = this.props.refImage ? this.props.refImage : React.createRef();

    this.phoneWrapper = React.createRef<HTMLDivElement>();
    this.phoneImage = React.createRef<HTMLImageElement>();
  }

  render() {    
    return (
      <div className='phone' style={this.props.style}>
        <div ref={this.phoneWrapper} className='phone_wrapper' style={style.wrapper}>
          <img
            ref={this.imageScreen}
            className='phone_screen'
            style={style.screen}
            src={this.props.screenImage}
            alt=''
          />

          {/* <Video
            refVideo={this.imageScreen}
            poster={this.props.poster}
            video={this.props.screenImage}

            autoplay={true}
            controls={false}
            preload="auto"
            style={style.screen}
            className="phone_screen"
          /> */}

          <img
            className='phone_border'
            style={style.border}
            src={iphoneBorder}
            alt=''
          />
        </div>
      </div>
    );
  }
}
