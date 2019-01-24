// @flow

import React from "react";

type Props = {};
type State = {};

export class TestPage extends React.Component<Props, State> {
  componentDidCatch(error: any, info: any) {
    /* eslint-disable */
    console.log(error, info);
    /* eslint-enable */
  }

  render() {
    return (
      <div>
        <span>test page dashboard ... </span>
      </div>
    );
  }
}

export default TestPage;
