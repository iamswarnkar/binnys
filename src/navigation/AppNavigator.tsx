import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import PostListScreen from '../screens/PostListScreen';
import PostDetailsScreen from '../screens/PostDetailsScreen';
import CounterScreen from '../screens/CounterScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen
        name="PostList"
        component={PostListScreen}
        options={{ title: 'Posts' }}
      />
      <Stack.Screen
        name="PostDetails"
        component={PostDetailsScreen}
        options={{ title: 'Post Details' }}
      />
      <Stack.Screen
        name="Counter"
        component={CounterScreen}
        options={{ title: 'Counter' }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
