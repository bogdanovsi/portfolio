import * as React from "react";
import { isPlaying } from "../Utils";

export interface IVideo{
  video: any;
  poster?: any;
  style?: any;
  refVideo?: any;

  autoplay: boolean;
  className?: string;
  controls?: boolean; 
  preload?: string;
  muted?: boolean;
  loop?: string;
}
export interface IVideoState{
}

export default class Video extends React.Component<IVideo, IVideoState> {

  videoElement = null;

  constructor(props) {
    super(props);  

    this.videoElement = this.props.refVideo ? this.props.refVideo : React.createRef<HTMLVideoElement>();
  }

  componentDidMount() {
    if (this.props.autoplay) {
      let video = this.videoElement.current;
      if (!isPlaying(video)) {
        video.play();
      }
    }
  }

  render() {
    return (
      <video
        ref={this.videoElement}
        poster={this.props.poster} 
        className={this.props.className}
        style={this.props.style}
        controls={this.props.controls}
        loop
        muted
        playsinline 
      >
        <source src={this.props.video} type="video/mp4" />
      </video>
    )
  }

}

