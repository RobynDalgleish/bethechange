import { createBottomTabNavigator } from 'react-navigation';

import HomeScreen from '../Screens/Home';
import DetailScreen from '../Screens/Detail';
import OnBoardingScreen from '../Screens/Onboarding';
import NewsNavigation from '../Navigation/News';

export default createBottomTabNavigator(
  {
    Home: HomeScreen,
    News: NewsNavigation,
    OnBoarding: OnBoardingScreen,
    Detail: DetailScreen
  },
  {
    tabBarOptions: {
      activeTintColor: '#e91e63',
      labelStyle: {
        fontSize: 12
      },
      showIcon: false,
      style: {
        backgroundColor: 'grey'
      }
    }
  }
);
