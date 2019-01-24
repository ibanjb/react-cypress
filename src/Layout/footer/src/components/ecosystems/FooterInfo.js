// @flow

import React from 'react';

type Props = {};
type State = {};

export default class FooterInfo extends React.Component<Props, State> {
  render() {
    const copyrightText = `\u00A9 ${new Date().getFullYear()} TMC. Telemedicine Clinic`;
    return (
      <div>
        <p style={{ color: '#8D5933' }}>{copyrightText}</p>
      </div>
    );
  }
}
