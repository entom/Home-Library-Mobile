import {
  createStackNavigator,
} from 'react-navigation';
import Home from "./screens/Home"
import Login from "./screens/Login"
import Register from "./screens/Register"

const App = createStackNavigator({
  Home: {screen: Home},
  Login: {screen: Login},
  Register: {screen: Register},
});

export default App;
