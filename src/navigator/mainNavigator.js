import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings36304Navigator from '../features/Settings36304/navigator';
import UserProfile36297Navigator from '../features/UserProfile36297/navigator';
import Settings36296Navigator from '../features/Settings36296/navigator';
import Settings36294Navigator from '../features/Settings36294/navigator';
import SignIn236292Navigator from '../features/SignIn236292/navigator';
import Settings36290Navigator from '../features/Settings36290/navigator';
import Settings36280Navigator from '../features/Settings36280/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
Settings36304: { screen: Settings36304Navigator },
UserProfile36297: { screen: UserProfile36297Navigator },
Settings36296: { screen: Settings36296Navigator },
Settings36294: { screen: Settings36294Navigator },
SignIn236292: { screen: SignIn236292Navigator },
Settings36290: { screen: Settings36290Navigator },
Settings36280: { screen: Settings36280Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
