import {createDrawerNavigator} from 'react-navigation-drawer';
import {responsive} from '../../styles/mixins';
import DrawerContainer, {DRAW_WIDTH} from '../../containers/DrawerContainer';

const createDrawer = (screens, confs) => {
  let screen = {
    screen: createDrawerNavigator(screens, {
      // contentComponent: DrawerScreen,
      // drawerWidth: responsive.horizontal(345),
      drawerWidth: DRAW_WIDTH,
      drawerBackgroundColor: 'transparent',
      contentComponent: DrawerContainer,
      ...confs,
    }),
    navigationOptions: {
      header: null,
      title: '',
    },
  };

  return screen;
};

export {createDrawer};
