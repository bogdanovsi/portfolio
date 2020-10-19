import * as React from 'react';

export interface IImageLoader{
  src: any; // import image
  style: any;
  ref: any;
  className?: string;
}

export interface IImageLoaderState{
  loaded: any;
}



export default class ImageLoader extends React.Component<IImageLoader, IImageLoaderState> {
  
  _loaded = {}

  defaultProps = {
    className: "",
    loadingClassName: "img-loading",
    loadedClassName: "img-loaded"
  };

  constructor(props) {
    super(props);

    this.state = {
      loaded: this._loaded[this.props.src]
    };
    
  }

  //image onLoad handler to update state to loaded
  onLoad = () => {
    this._loaded[this.props.src] = true;
    this.setState(() => ({ loaded: true }));
  };

  render() {

    let className = `${this.defaultProps.className} ${this.state.loaded
      ? this.defaultProps.loadedClassName
      : this.defaultProps.loadingClassName}`;

    return (
      <img
        ref={this.props.ref}
        className={this.props.className}
        style={this.props.style}
        src={this.props.src}
        onLoad={this.onLoad}
      />
    );
  }
}