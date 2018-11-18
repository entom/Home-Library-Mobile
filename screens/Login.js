import {Button, Container, Content, Form, Input, Item, Label, Text} from "native-base"
import {View} from "react-native"
import React from "react"
import { withNavigation } from 'react-navigation';

class Login extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor (props) {
    super(props)
    this.navigateRegister = this.navigateRegister.bind(this)
    this.navigateMain = this.navigateMain.bind(this)
  }

  navigateRegister () {
    this.props.navigation.navigate('Register')
  }

  navigateMain () {
    this.props.navigation.navigate('Main')
  }

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
              <Button rounded style={{paddingLeft: 10, paddingRight: 10, marginTop: 20}}
                      onPress={() => this.navigateMain()}>
                <Text>Login</Text>
              </Button>
            </View>
            <Text style={{textAlign: 'center', marginTop: 20, marginBottom: 5}}>or</Text>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
              <Button rounded style={{paddingLeft: 10, paddingRight: 10, marginTop: 20}}
                      onPress={() => this.navigateRegister()}>
                <Text>Register</Text>
              </Button>
            </View>
          </Form>
        </Content>
      </Container>
    )
  }
}

export default withNavigation(Login)
