// @flow

import React from 'react';
import FooterInfo from '../ecosystems/FooterInfo';

type Props = {};
type State = {};

export class CustomFooter extends React.Component<Props, State> {
    componentDidCatch(error: any, info: any) {
        /* eslint-disable */
        console.log(error, info);
        /* eslint-enable */
    }

    render() {
        return (
            <FooterInfo />
        );
    }
}

export default CustomFooter;
