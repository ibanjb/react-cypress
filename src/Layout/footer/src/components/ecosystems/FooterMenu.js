// @flow

import React from 'react';
import FooterMenuListItem from '../molecules/FooterMenuListItem';

type Props = {};
type State = {};

export default class Footer extends React.Component<Props, State> {
    render() {
        return (
            <div>
                <ul>
                    <FooterMenuListItem url="#" title="About" />
                    <FooterMenuListItem url="#" title="Contact" />
                    <FooterMenuListItem url="#" title="Support" />
                </ul>
            </div>
        );
    }
}
