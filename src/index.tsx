import * as React from "react";
import * as ReactDom from "react-dom";

import * as ReactModal from "react-modal";

import { Landing } from "./context";

import { Route, BrowserRouter } from "react-router-dom";

// @ts-ignore
import { library } from "@fortawesome/fontawesome-svg-core";
// @ts-ignore
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab);

import "./stylesheets/bootstrap.css";
import "./stylesheets/normalize.css";

import modalClose from "./images/close@1x.svg";
import ModalContactUs from "./components/Modals/ModalContactUs";
import ModalJobs from "./components/Modals/ModalJobs";

import Footer from "./components/Footer/Footer";

import ScrollToTop from './ScrollToTop';

import Home from "./pages/Home";
import Faqs from "./pages/Faqs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";

import "./stylesheets/fonts.scss";
import "./stylesheets/index.scss";
import "./stylesheets/media.scss";

import { ILink } from "../typing/component-details";

const styleModal = { overlay: { zIndex: "888" }, content: { zIndex: "999" } };

export default class Index extends React.Component<{},{modalIsOpen: boolean; modalBody: any; links: Array<ILink> }> {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      modalBody: null,
      links: [
        {
          title: "Jobs",
          href: "#",
          onClick: (ev) => {
            this.openJobs(ev);
          }
        },
        {
          title: "FAQ",
          href: "/faqs"
        },
        {
          title: "Contact us",
          href: "#",
          onClick: (ev) => {
            this.openContactUs(ev);
          }
        }
      ]
    };

    this.connectToServer = this.connectToServer.bind(this);
  
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.openContactUs = this.openContactUs.bind(this);
    this.openJobs = this.openJobs.bind(this);
  }

  openContactUs(ev){
    ev.preventDefault();

    this.openModal(
      <ModalContactUs onSubmit={(ev) => {

        Landing.submitContactUs(ev);

        this.closeModal();

      }} />
    );
  }

  openJobs(ev){
    ev.preventDefault();

    this.openModal(
      <ModalJobs onSubmit={(ev) => {

        Landing.submitJobs(ev);

        this.closeModal();

      }} />
    );
  }

  openModal(modalBody: any) {
    this.setState({ modalIsOpen: true, modalBody });
    document.body.style.overflowY = "hidden";
  }

  closeModal() {
    this.setState({ modalIsOpen: false, modalBody: null });
    document.body.style.overflowY = "scroll";
    document.body.style.overflowX = "hidden";
  }

  connectToServer() {
    fetch("/");
  }

  componentDidMount() {
    this.connectToServer();
  }

  render() {
    let footerLinks = Landing.footerAddedLinks.concat(this.state.links);

    return (
      <BrowserRouter>
        <>
         <ScrollToTop>
          <Route exact path='/'
            render={props => <Home {...props} links={this.state.links}/>}
          />
         </ScrollToTop>
         <ScrollToTop>
          <Route path='/faqs' 
              render={
                props => <Faqs {...props} links={this.state.links} openContactUs={this.openContactUs} />
              }
          />
         </ScrollToTop>
         <ScrollToTop>
          <Route path='/privacy-policy' 
            render={props => <PrivacyPolicy {...props} links={this.state.links}/>}
          />
         </ScrollToTop>
         <ScrollToTop>
          <Route path='/terms-conditions'
            render={props => <TermsConditions {...props} links={this.state.links}/>}
           />
         </ScrollToTop>
        </>
        <Footer
          brand={Landing.brand}
          copyright={Landing.copyright}
          links={footerLinks}
          imageLinks={Landing.buttonsStore}
        />
        <ReactModal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          closeTimeoutMS={250}
          style={styleModal}
          overlayClassName='modal-overlay'
          className='modal-window'
        >
          <img
            src={modalClose}
            style={{ cursor: "pointer" }}
            alt='Close'
            className='modal_cross'
            onClick={this.closeModal}
          />
          {this.state.modalBody}
        </ReactModal>
      </BrowserRouter>
    );
  }
}

class LazyLoadingComponent extends React.Component<{ component: JSX.Element }>{
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Suspense fallback={<div>Loading...</div>}>
        {this.props.component}
      </React.Suspense>
    );
  }
}

ReactModal.setAppElement("#root");
ReactDom.render(<Index />, document.querySelector("#root"));
