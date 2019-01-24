// @flow

import React from 'react';

// $FlowFixMe
import { Layout, notification, Icon } from 'antd';

import CustomFooter from '../../../../Layout/footer/src/components/environment/App';
import CustomNav from '../../../../Layout/nav/src/components/environment/App';
import CustomHeader from '../../../../Layout/header/src/components/environment/App';
import { DefaultRoot } from '../ecosystems/DefaultRoot';

const { Header, Footer, Content } = Layout;

type Props = {
  errorMessage: string,
  resetErrorMessage: any,
  children: any
};
type State = {};

export class Root extends React.Component<Props, State> {
  componentDidCatch(error: any, info: any) {
    /* eslint-disable */
    console.log(error, info);
    /* eslint-enable */
  }

  renderErrorMessage = () => {
    const { errorMessage } = this.props;
    if (!errorMessage) {
      return null;
    }
    notification.open({
      message: 'Ops! an error has occurred',
      description: errorMessage,
      icon: <Icon type="frown" style={{ color: '#ff4d4f' }} />,
      duration: 5
    });
  };

  renderDefaultRoot() {
    return <DefaultRoot />;
  }

  renderChildrenReceived() {
    const { children } = this.props;
    return (
      <div>
        {this.renderErrorMessage()}
        {children}
      </div>
    );
  }

  render() {
    const { children } = this.props;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <CustomNav />
        <Layout>
          <Header style={{ backgroundColor: '#573720' }}>
            <CustomHeader />
          </Header>
          <Content style={{ backgroundColor: '#ECECEC'}}>
            { children ? this.renderChildrenReceived() : this.renderDefaultRoot() }
          </Content>
          <Footer style={{ backgroundColor: '#573720' }}>
            <CustomFooter />
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Root;