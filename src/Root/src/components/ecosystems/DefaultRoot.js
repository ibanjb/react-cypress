// @flow

import React from 'react';

// $FlowFixMe
import { Icon } from 'antd';

type Props = {};
type State = {};

export class DefaultRoot extends React.Component<Props, State> {
  render() {
    return (
      <div style={{ marginTop: '20%', marginLeft: '40%' }}>
        <Icon type="team" style={{ fontSize: '8em', marginLeft: '50px' }} />
        <p style={{ marginTop: '50px', fontSize: '2em' }} >Your root is empty</p>
      </div>
    );
  }
}

export default DefaultRoot;
