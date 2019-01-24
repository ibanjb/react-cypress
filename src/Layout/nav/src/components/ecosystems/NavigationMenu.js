// @flow

import React from 'react';

// $FlowFixMe
import { NavLink } from 'react-router-dom';

// $FlowFixMe
import { Menu, Icon } from 'antd';

type Props = {
  selected: number,
  items: any,
  handleSelectedItem: any
};

export class NavigationMenu extends React.Component<Props> {
  handleClick = (e: any) => {
    const { handleSelectedItem } = this.props;
    const navItemSelected = parseInt(e.key);
    handleSelectedItem(navItemSelected);
  };

  getItemSelected() {
    const { selected } = this.props;
    let itemSelected = [];
    itemSelected.push(`${selected}`);
    return itemSelected;
  }

  render() {
    const { items } = this.props;
    return (
      <Menu
        theme="dark"
        mode="inline"
        onClick={this.handleClick}
        defaultSelectedKeys={this.getItemSelected()}
      >
        {items.map(item => (
          <Menu.Item key={item.id}>
            <NavLink to={item.uri}>
              <Icon type={item.icon} />
              <span>{item.title}</span>
            </NavLink>
          </Menu.Item>
        ))}
      </Menu>
    );
  }
}

export default NavigationMenu;
