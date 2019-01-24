// @flow

import React from "react";

type Props = {
  logoSize: string
};
type State = {};

export class NavigationLogo extends React.Component<Props, State> {
  render() {
    const { logoSize } = this.props;
    return (
      <div
        style={{
          width: logoSize,
          display: "inline-block"
        }}
      >
        <img
          style={{ width: "100%" }}
          src="./assets/images/logo.png"
          alt="quomados"
        />
      </div>
    );
  }
}

export default NavigationLogo;
