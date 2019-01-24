// @flow

import React from "react";

// $FlowFixMe
import { notification, Badge, Drawer, Button, Icon, Alert } from "antd";

type Props = {};
type State = {
  visible: boolean
};

export class Example extends React.Component<Props, State> {
  state = { visible: false };

  componentDidCatch(error: any, info: any) {
    /* eslint-disable */
    console.log(error, info);
    /* eslint-enable */
  }

  constructor() {
    super();
    this.renderNotification();
  }

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  renderNotification = () => {
    notification.open({
      message: "Welcome to the example page",
      description: "This notification will disappear...",
      icon: <Icon type="smile" style={{ color: "#a0d911" }} />,
      duration: 1
    });
  };

  render() {
    const { visible } = this.state;
    return (
      <div>
        <div style={{ marginTop: "50px" }}>
          <Alert message="Example page" type="success" showIcon />
        </div>
        <div style={{ marginTop: "50px" }}>
          <Alert
            message="Information"
            description="To test components or use it as base module to create a new one"
            type="info"
            showIcon
          />
        </div>
        <div style={{ marginTop: "50px", marginLeft: "20px" }}>
          <Button type="primary" onClick={this.showDrawer}>
            Open drawer example
          </Button>
        </div>
        <div style={{ marginTop: "50px", marginLeft: "20px" }}>
          <span style={{ marginRight: "20px" }}> Badge example</span>
          <Badge count={5} />
        </div>
        <div>
          <Drawer
            title="Drawer component right placed"
            placement="right"
            closable={false}
            onClose={this.onClose}
            visible={visible}
          >
            <p>This can be used to fill forms</p>
            <p>show relevant information</p>
            <p>inner details from an object</p>
          </Drawer>
        </div>
      </div>
    );
  }
}

export default Example;
