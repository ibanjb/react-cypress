// @flow

import React from 'react';

type Props = {};
type State = {};

export class PageNotFound extends React.Component<Props, State> {
    componentDidCatch(error: any, info: any) {
        /* eslint-disable */
        console.log(error, info);
        /* eslint-enable */
    }

    render() {
        return (
            <div>                
                <span>Page not found ... </span>
            </div>
        );
    }
}

export default PageNotFound;
