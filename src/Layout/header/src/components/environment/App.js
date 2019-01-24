// @flow

import React from 'react';

type Props = {};
type State = {};

export class CustomHeader extends React.Component<Props, State> {
  componentDidCatch(error: any, info: any) {
    /* eslint-disable */
    console.log(error, info);
    /* eslint-enable */
  }

  render() {
    return (
      <div>
        <span style={{ color: '#73462A' }}> Header </span>
      </div>
    );
  }
}

export default CustomHeader;
