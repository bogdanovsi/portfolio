import * as React from "react";

import "./quest.scss";

export interface IQuest {
  quest: string;
  answer: string;
}

export interface IQuestState {
  expand: boolean;
}

const style = {
  questWrapperCross: {
    transform: "rotate(0deg)",
    background:
      "linear-gradient(266deg, rgba(0,220,175,1) 0%, rgba(0,194,218,1) 100%)"
  }
};

export default class Quest extends React.Component<IQuest, IQuestState> {
  constructor(props) {
    super(props);

    this.state = { expand: false };
    this.expandHandler = this.expandHandler.bind(this);
  }

  expandHandler(ev: React.MouseEvent) {
    this.setState(state => ({
      expand: !state.expand
    }));
  }

  render() {
    return (
      <div className='quest'>
        <div className='quest-wrapper' onClick={this.expandHandler}>
          <div className='quest-wrapper__block'>{this.props.quest}</div>
          <div className='quest-wrapper__cross'>
            <div
              className='line'
              style={this.state.expand ? { opacity: 0 } : null}
            />
            <div
              className='line'
              style={this.state.expand ? style.questWrapperCross : null}
            />
          </div>
        </div>
        <div
          className='quest-answer'
          style={
            this.state.expand ? { height: "auto", padding: "20px 0" } : null
          }
        >
          {this.props.answer}
        </div>
      </div>
    );
  }
}
