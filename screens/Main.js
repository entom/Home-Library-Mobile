import {Button, Container, Content, Form, Input, Item, Label, Text, Header, Left, Right, Body, Title, Icon} from "native-base"
import {View} from "react-native";
import React from "react"
import { withNavigation } from 'react-navigation';

class Main extends React.Component{
  static navigationOptions = {
    header: null
  };

  constructor (props) {
    super(props)
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent></Button>
          </Left>
          <Body><Title>Logo</Title></Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
        <Content>

        </Content>
      </Container>
    )
  }
}

export default withNavigation(Main)
