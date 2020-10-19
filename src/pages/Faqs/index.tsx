import * as React from "react";

import { Landing } from "../../context";

import NavBar from "../../components/Navbar/Navbar";
import Article from "../../components/Article/Article";
import Quest from "../../components/Quest/quest";

import { ILink } from "../../../typing/component-details";

export interface IFaqs {
  links?: Array<ILink>;
  openContactUs: (ev) => void;
}
export interface IFaqsState {
}

export default class Faqs extends React.Component<IFaqs, IFaqsState> {
  quests = [
    {
      quest: "How do i get started with B Messenger?",
      answer:
        "To start using B Messneger, you need to register an account first.\n\nYou can do so by clicking Sign up button in the upper right corner; or, alternatively, leave your email in the field on the main page and click Sign up now."
    },
    {
      quest: "How to use B Messenger?",
      answer:
        "To start using B Messenger, you need to register an account first. You can do so by clicking Sign up button in the upper right corner; or, alternatively, leave your email in the field on the main page and click Sign up now."
    },
    {
      quest: "How to delete dating account?",
      answer:
        "To start using B Messneger, you need to register an account first. You can do so by clicking Sign up button in the upper right corner; or, alternatively, leave your email in the field on the main page and click Sign up now."
    },
    {
      quest: "How to use B Messenger?",
      answer:
        "To start using B Messneger, you need to register an account first. You can do so by clicking Sign up button in the upper right corner; or, alternatively, leave your email in the field on the main page and click Sign up now."
    },
    {
      quest: "How to delete dating account?",
      answer:
        "To start using B Messneger, you need to register an account first. You can do so by clicking Sign up button in the upper right corner; or, alternatively, leave your email in the field on the main page and click Sign up now."
    },
    {
      quest: "How do i get started with B Messenger?",
      answer:
        "To start using B Messneger, you need to register an account first. You can do so by clicking Sign up button in the upper right corner; or, alternatively, leave your email in the field on the main page and click Sign up now."
    }
  ];

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <section id='jumb'>
          <div className='preview'>
            <NavBar
              brand={Landing.brand}
              links={this.props.links}
              imageLinks={[Landing.buttonsStore[0]]}
              classNavBrand={"navbar-brand"}
            />
            <div className='container' style={{ paddingBottom: "60px" }}>
              <Article
                title='FAQs'
                description='Answers to all your Notion questions. Any lingering questions?'
                bottomLink={{
                  title: "Chat with us",
                  href: "#",
                  onClick: this.props.openContactUs
                }}
                style={{ color: "white" }}
              />
            </div>
          </div>
        </section>
        <section id='questions'>
          <div className='container'>
            <div className='questions'>
              {this.quests.map((q, i) => {
                return <Quest quest={q.quest} answer={q.answer} key={i} />;
              })}
            </div>
          </div>
        </section>
      </>
    );
  }
}
