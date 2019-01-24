// @flow

import React from 'react';

// $FlowFixMe
import { Layout, Icon } from 'antd';

// $FlowFixMe
import { connect } from 'react-redux';

// $FlowFixMe
import { bindActionCreators } from 'redux';

import { setNavigationItem } from '../../../../../redux/actions/actionCreator';
import { NavigationLogo } from '../ecosystems/NavigationLogo';
import { NavigationMenu } from '../ecosystems/NavigationMenu';

type Props = {
  setNavigationItem: any,
  state: {
    navReducer: any
  }
};
type State = {
  collapsed: boolean,
  navSelected: number,
  logoSize: string
};

const { Sider } = Layout;

export class CustomNav extends React.Component<Props, State> {
  state = {
    collapsed: true,
    navSelected: 1,
    logoSize: '80px'
  };
  componentDidCatch(error: any, info: any) {
    /* eslint-disable */
    console.log(error, info);
    /* eslint-enable */
  }

  toggle = () => {
    const { collapsed } = this.state;
    const percentatge = collapsed ? '160px' : '80px';
    this.setState({
      collapsed: !collapsed,
      logoSize: percentatge
    });
  };

  handleSelectedItem = (itemId: number) => {
    const { setNavigationItem } = this.props;
    this.setState({ navSelected: itemId });
    setNavigationItem(itemId);
  };

  render() {
    const { state } = this.props;
    const { navReducer } = state;
    const { collapsed, navSelected, logoSize } = this.state;
    return (
      <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
        <div
          style={{
            margin: '10px 0px 20px 0',
            width: '100%',
            textAlign: 'center'
          }}
        >
          <NavigationLogo logoSize={logoSize} />
          <div style={{ marginTop: '20px' }}>
            <Icon
              style={{ color: '#8D5933', fontSize: '1.3em' }}
              className="'trigger"
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </div>
        </div>
        <NavigationMenu
          selected={navSelected}
          items={navReducer}
          handleSelectedItem={this.handleSelectedItem}
        />
      </Sider>
    );
  }
}

const mapStateToProps = state => {
  return { state };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      setNavigationItem
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomNav);
