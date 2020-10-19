import * as React from 'react';
import { withRouter } from 'react-router-dom'; 

class ScrollToTop extends React.Component<{ location: any }> {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}
//@ts-ignore
export default withRouter(ScrollToTop);