import {Button, Container, Content, Form, Input, Item, Label, Text, Header, Left, Right, Body, Title, Icon, Toast, Root, List, ListItem} from "native-base"
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
      <Root>
        <Container>
          <Header>
            <Left>
              <Text>Title</Text>
            </Left>
            <Right>
              <Button transparent onPress={() =>
                  Toast.show({
                    text: 'Menu clicked',
                    buttonText: 'OK'
                  })
                }>
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
        </Container>
      </Root>
    )
  }
}

export default withNavigation(Main)
