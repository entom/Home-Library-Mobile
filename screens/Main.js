import {Button, Container, Content, Form, Input, Item, Label, Text, Header, Left, Right, Body, Title, Icon, Toast, Root, List, ListItem, Drawer, Fab} from "native-base"
import {View} from "react-native";
import React from "react"
import { withNavigation } from 'react-navigation';
import Sidebar from "./elements/Sidebar";

class Main extends React.Component{
  static navigationOptions = {
    header: null
  };

  constructor (props) {
    super(props)
    this.state = {
      active : false
    }
  }

  closeDrawer = () => {
    this.drawer._root.close();
  }

  openDrawer = () => {
    this.drawer._root.open();
  }

  render() {
    return (
      <Root>
        <Drawer
          type="displace"
          ref={(ref) => {this.drawer = ref;}}
          content={<Sidebar navigator={this.navigator} />}
          onclose={() => this.closeDrawer()}>
          <Container>
            <Header>
              <Left>
                <Text>Title</Text>
              </Left>
              <Right>
                <Button transparent onPress={() => {
                  this.openDrawer()
                }}>
                    <Icon name='menu' />
                </Button>
              </Right>
            </Header>
            <Content>
              <List>
                <ListItem itemDivider>
                  <Text>A</Text>
                </ListItem>
                <ListItem>
                  <Text>Aaron Bennet</Text>
                </ListItem>
                <ListItem>
                  <Text>Ali Connors</Text>
                </ListItem>
                <ListItem itemDivider>
                  <Text>B</Text>
                </ListItem>
                <ListItem>
                  <Text>Bradley Horowitz</Text>
                </ListItem>
              </List>
            </Content>
            <Fab
              active={this.state.active}
              direction="up"
              containerStyle={{ }}
              style={{ backgroundColor: '#5067FF' }}
              position="bottomRight"
              onPress={() => this.setState({ active: !this.state.active })}>
              <Icon name="options" />
              <Button>
                <Icon name="add" />
              </Button>
            </Fab>
          </Container>
        </Drawer>
      </Root>
    )
  }
}

export default withNavigation(Main)
