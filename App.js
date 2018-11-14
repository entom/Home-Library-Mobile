import {
  createStackNavigator,
} from 'react-navigation';
import Home from "./screens/Home"
import Login from "./screens/Login"
import Register from "./screens/Register"
import StackViewStyleInterpolator from 'react-navigation-stack/dist/views/StackView/StackViewStyleInterpolator'

const App = createStackNavigator({
  Home: {screen: Home},
  Login: {screen: Login},
  Register: {screen: Register},
}, {
  transitionConfig: () => ({
    screenInterpolator: sceneProps => {
      return StackViewStyleInterpolator.forHorizontal(sceneProps);
    }
  })
});

export default App;
