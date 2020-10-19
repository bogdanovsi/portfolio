import * as React from "react";

import "./modals.scss";

import Article from "../Article/Article";

import { IField } from "../form/Field";
import Field from "../form/Field";

export interface IModalContactUs {
  onSubmit: (ev) => any;
}

export default class ModalContactUs extends React.Component<IModalContactUs> {
  fields: Array<IField> = [
    {
      fieldTag: "input",
      name: "first_name",
      inputId: "field-name",
      labelId: "lname",
      label: "Name",
      required: true,
      validate: value => {
        var re = new RegExp("[a-zA-ZА-яа-я ]+");
        return re.test(value);
      }
    },
    {
      fieldTag: "input",
      name: "email",
      inputId: "field-email",
      labelId: "lemail",
      label: "Email",
      required: true,
      validate: value => {
        var re = new RegExp(
          "^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$"
        );
        return re.test(value.toLowerCase());
      }
    },
    {
      fieldTag: "textarea",
      name: "comment",
      inputId: "field-msg",
      labelId: "lmsg",
      required: true,
      label: "Message",
      row: 4
    }
  ];

  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(ev) {
    this.props.onSubmit(ev);

  }

  render() {
    return (
      <div className='modal-body-content'>
        <div>
          <Article
            title='Contact us'
            description='Tell us about your issue so we can help you more quickly.'
            style={{ color: "black" }}
          />
        </div>
        <div className='contact-form'>
          <form onSubmit={this.onSubmit}>
            {this.fields.map((field, i) => {
              return <Field {...field} key={i} />;
            })}
            <button className='btn modal-body-content_btn-submit'>Send</button>
          </form>
        </div>
      </div>
    );
  }
}
