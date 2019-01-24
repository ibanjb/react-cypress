// @flow

import React from 'react';

type Props = {};
type State = {};

export class Dashboard extends React.Component<Props, State> {
    componentDidCatch(error: any, info: any) {
        /* eslint-disable */
        console.log(error, info);
        /* eslint-enable */
    }

    render() {
        return (
            <div>                
                <span>Dashboard ... </span>
            </div>
        );
    }
}

export default Dashboard;
