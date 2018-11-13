import React, {Component} from 'react';
import {View} from 'react-native';
import {Container, Header, Content, Button, Text, Input, Form, Item, Label} from 'native-base';

export default class Login extends Component {
  render () {
    return (
      <Container style={{padding: 20}}>
        <Content>
          <Form style={{width: '60%', marginLeft: '20%'}}>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input/>
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input/>
            </Item>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
              <Button style={{paddingLeft: 10, paddingRight: 10, marginTop: 20}}>
                <Text>Login</Text>
              </Button>
            </View>
          </Form>
        </Content>
      </Container>
    )
  }
}
