import { createBottomTabNavigator } from 'react-navigation';

import HomeScreen from '../Screens/Home';
import DetailScreen from '../Screens/Detail';
import OnBoardingScreen from '../Screens/Onboarding';
import NewsNavigation from '../Navigation/News';

export default createBottomTabNavigator({
  Home: HomeScreen,
  News: NewsNavigation,
  OnBoarding: OnBoardingScreen,
  Detail: DetailScreen
});
