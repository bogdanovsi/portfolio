import * as React from "react";
import "./field.scss";

export interface IField {
  name: string;
  fieldTag: "input" | "textarea";
  required?: boolean;
  pattern?: string;
  inputId?: string;
  labelId?: string;
  fieldClass?: string;
  inputClass?: string;
  labelClass?: string;
  placeholed?: string;
  label?: string;
  /** Only for textarea */
  row?: number;
  validate?: (value) => boolean;
  onFocus?: (ev) => void;
}

export interface IFieldState {
  focus: boolean;
  invalid: boolean;
}

export default class Field extends React.Component<IField, IFieldState> {
  inputRef = React.createRef<HTMLInputElement>();

  constructor(props) {
    super(props);

    this.state = {
      focus: false,
      invalid: false
    };

    this.onInput = this.onInput.bind(this);
    this.onFocusIn = this.onFocusIn.bind(this);
    this.onFocusOut = this.onFocusOut.bind(this);
  }

  onFocusIn(ev) {
    this.setState({ focus: true });
  }

  onFocusOut(ev) {
    if (this.inputRef.current.value.trim() == "") {
      this.setState({ focus: false });
    }
  }

  onInput(ev) {
    this.onFocusIn(ev);

    if (this.props.validate) {
      if (this.props.validate(this.inputRef.current.value)) {
        this.inputRef.current.setCustomValidity("");

        this.setState({ invalid: false });
      } else {
        this.inputRef.current.setCustomValidity("Incorrect value");

        this.setState({ invalid: true });
      }
      return;
    } else if (!this.props.pattern) {
      this.setState({ invalid: false });
    }
  }

  render() {
    let inputClass =
      "field" +
      (this.state.focus ? " field--focus" : "") +
      (this.props.inputClass || "") +
      (this.state.invalid ? " field--invalid" : "");

    let inputElement = React.createElement(this.props.fieldTag, {
      ref: this.inputRef,
      id: this.props.inputId,
      className: inputClass,
      name: this.props.name,
      type: "text",
      placeholder: this.props.placeholed,
      required: this.props.required,
      pattern: this.props.pattern,
      row: this.props.row, // for textarea
      onFocus: this.onFocusIn,
      onBlur: this.onFocusOut,
      onInput: this.onInput
    });

    return (
      <div className={"inputs " + (this.props.fieldClass || "")}>
        {inputElement}
        <label
          id={this.props.labelId}
          htmlFor={this.props.inputId}
          placeholder={this.props.placeholed || ""}
          className={
            "placeholder " +
            (this.state.focus ? "placeholder--focus" : "") +
            (this.props.labelClass || "")
          }
        >
          {this.props.label + (this.props.required ? "*" : "")}
        </label>
      </div>
    );
  }
}
