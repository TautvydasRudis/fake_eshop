import React from "react";

const BackgroundContext = React.createContext("white");

function withBackgroundColor(Component) {
  function WrapedComponent(props) {
    return (
      <BackgroundContext.Consumer>
        {context => <Component {...props} background={context} />}
      </BackgroundContext.Consumer>
    );
  }
  return WrapedComponent;
}

export default BackgroundContext;
export { withBackgroundColor };
