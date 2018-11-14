import {Button, Container, Content, Form, Input, Item, Label, Text} from "native-base"
import {View} from "react-native"
import React from "react"
import { withNavigation } from 'react-navigation';

class Register extends React.Component{
  static navigationOptions = {
    header: null
  };

  constructor (props) {
    super(props)
    this.navigateLogin = this.navigateLogin.bind(this)
  }

  navigateLogin() {
    this.props.navigation.navigate('Login')
  }

  render() {
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
                <Text>Register</Text>
              </Button>
            </View>
            <Text style={{textAlign: 'center', marginTop: 20, marginBottom: 5}}>or</Text>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
              <Button style={{paddingLeft: 10, paddingRight: 10, marginTop: 20}} onPress={() => this.navigateLogin()}>
                <Text>Login</Text>
              </Button>
            </View>
          </Form>
        </Content>
      </Container>
    )
  }
}

export default withNavigation(Register)
