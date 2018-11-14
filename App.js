import {
  createStackNavigator,
} from 'react-navigation';
import Home from "./screens/Home"
import Login from "./screens/Login"
import Register from "./screens/Register"
import StackViewStyleInterpolator from 'react-navigation-stack/dist/views/StackView/StackViewStyleInterpolator'
import Main from "./screens/Main"

const App = createStackNavigator({
  Home: {screen: Home},
  Login: {screen: Login},
  Register: {screen: Register},
  Main: {screen: Main}
}, {
  transitionConfig: () => ({
    screenInterpolator: sceneProps => {
      return StackViewStyleInterpolator.forHorizontal(sceneProps);
    }
  })
});

export default App;
