import * as React from 'react';
import * as FormData from 'form-data';

import './modals.scss';

import Article from '../Article/Article';
import Field, { IField } from '../form/Field';
import Dropzone from '../Dropzone/Dropzone';

export interface IModalJobs {
  onSubmit: (ev) => any;
}

export default class ModalJobs extends React.Component<IModalJobs> {
  fields: Array<IField> = [
    {
      fieldTag: 'input',
      name: 'first_name',
      inputId: 'field-name',
      labelId: 'lname',
      label: 'First Name',
      required: true,
      validate: value => {
        var re = new RegExp('^([a-zA-Z ]){2,30}$');
        return re.test(value);
      },
      placeholed: 'Enter first name...'
    },
    {
      fieldTag: 'input',
      name: 'last_name',
      inputId: 'field-email',
      labelId: 'lemail',
      label: 'Last Name',
      placeholed: 'Enter last name...',
      required: true,
      validate: value => {
        var re = new RegExp('^([a-zA-Z ]){2,30}$');
        return re.test(value);
      }
    },
    {
      fieldTag: 'input',
      name: 'email',
      inputId: 'field-email',
      placeholed: 'Enter your email...',
      labelId: 'lemail',
      label: 'Email',
      required: true,
      validate: value => {
        var re = new RegExp('^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$');
        return re.test(value.toLowerCase());
      }
    },
    {
      fieldTag: 'input',
      name: 'job',
      inputId: 'field-email',
      labelId: 'lemail',
      label: 'Job'
    },
    {
      fieldTag: 'input',
      name: 'comment',
      inputId: 'field-email',
      labelId: 'lemail',
      label: 'Comment'
    }
  ];

  files = [];

  constructor(props) {
    super(props);
  }

  openModal() {}

  render() {
    return (
      <div className="modal-body-content">
        <div>
          <Article
            title="Apply for a job"
            description="Please apply directly online and, if applicable, upload your materials as specified on the job posting. Fields marked with a * are required."
            style={{ color: 'black' }}
          />
        </div>
        <div className="contact-form">
          <form onSubmit={this.props.onSubmit}>
            <div className="contact-form-body">
              {this.fields.map((field, i) => {
                return <Field {...field} key={i} />;
              })}
            </div>
            <div className="input--attach contact-form-block">
              <label className="form-label" htmlFor="attach-file">
                Attachments*
              </label>
              <Dropzone
                name="files"
                disabled={false}
                required={true}
                onFilesAdded={(evt, files) => {
                  this.files = files;
                }}
              />
            </div>
            <div className="contact-form-block form-field-check">
              <label className="form-field-check__label" htmlFor="consent">
                <input className="form-field-check__box" type="checkbox" id="consent" name="consent" required={true} />
                I give my consent to the storage of my data for the purpose of determining my suitability for future vacancies
                in the global B Messenger consolidated personnel database.
                <span className="form-field-check__mark" />
              </label>
            </div>
            <button type="submit" style={{ width: '100%', margin: '0' }} className="btn modal-body-content_btn-submit">
              Send
            </button>
          </form>
        </div>
      </div>
    );
  }
}
