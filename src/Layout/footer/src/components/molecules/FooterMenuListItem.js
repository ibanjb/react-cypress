// @flow

import React from 'react';

type Props = {
    url: string,
    title: string
};

const FooterMenuListItem = (props: Props) => (
    <li>
        <a href={props.url}>{props.title}</a>
    </li>
);

export default FooterMenuListItem;
