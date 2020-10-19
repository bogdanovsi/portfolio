import * as React from "react";

import "./Dropzone.scss";

import uploadImage from "../../images/upload.png";
import fileAdded from "../../images/file-added.png";

export interface IDropzone {
  name: string;
  disabled: boolean;
  required: boolean;
  onFilesAdded: (evt, files) => void;
}

export interface IDropzoneState {
  hightlight: boolean;
  onFilesAdded: boolean;
  fileAdded: boolean;
}

export default class Dropzone extends React.Component<
  IDropzone,
  IDropzoneState
> {
  fileInputRef: React.RefObject<HTMLInputElement>;

  constructor(props) {
    super(props);
    this.state = { hightlight: false, onFilesAdded: false, fileAdded: false };
    this.fileInputRef = React.createRef<HTMLInputElement>();

    this.openFileDialog = this.openFileDialog.bind(this);
    this.onFilesAdded = this.onFilesAdded.bind(this);
    this.onDragOver = this.onDragOver.bind(this);
    this.onDragLeave = this.onDragLeave.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.filesAdded = this.filesAdded.bind(this);
  }

  openFileDialog() {
    if (this.props.disabled) return;
    this.fileInputRef.current.click();
  }

  onFilesAdded(evt) {
    if (this.props.disabled) return;
    const files = evt.target.files;
    if (this.props.onFilesAdded) {
      this.filesAdded(evt, files);
    }
  }

  onDragOver(evt) {
    evt.preventDefault();

    if (this.props.disabled) return;

    this.setState({ hightlight: true });
  }

  onDragLeave() {
    this.setState({ hightlight: false });
  }

  files = [];
  onDrop(evt) {
    evt.preventDefault();

    if (this.props.disabled) return;

    let files = evt.dataTransfer.files;
    if (this.props.onFilesAdded) {
      this.filesAdded(evt, files);
    }
    this.setState({ hightlight: false });
  }

  filesAdded(evt, files) {
    this.files = this.fileListToArray(files);

    this.props.onFilesAdded(evt, this.files);

    this.setState({ fileAdded: this.files.length ? true : false });
  }

  fileListToArray(list): any[] {
    const array = [];
    for (var i = 0; i < list.length; i++) {
      array.push(list.item(i));
    }
    return array;
  }

  render() {

    let message = (
      <>
        <span className='dropzone__title'>Drag & Drop</span>
        <p className='dropzone__text'>
          your files here, or{" "}
          <span style={{ textDecoration: "underline" }}>browse</span>.
        </p>
      </>
    );

    if (this.state.fileAdded) {
      let fileName = "";
      this.files.forEach(file => {
        fileName += file.name + " ";
      });

      message = (
        <>
          <span className='dropzone__title'></span>
          <p className='dropzone__text'>{fileName}</p>
        </>
      );
    }

    return (
      <div
        className={`dropzone ${
          this.state.hightlight ? "dropzone--highlight" : ""
        } ${
          this.state.fileAdded ? "dropzone--file-added" : ""
        }`}
        onDragOver={this.onDragOver}
        onDragLeave={this.onDragLeave}
        onDrop={this.onDrop}
        onClick={this.openFileDialog}
        style={{ cursor: this.props.disabled ? "default" : "pointer" }}
      >
        <input
          ref={this.fileInputRef}
          className='dropzone__file-input'
          type='file'
          name={this.props.name}
          onChange={this.onFilesAdded}
          required={this.props.required}
        />
        <img
          alt='upload'
          // style={{ transform: this.state.hightlight ? "rotate(180deg)" : "" }}
          className='dropzone__icon'
          src={this.state.fileAdded ? fileAdded : uploadImage}
        />
        {message}
      </div>
    );
  }
}
