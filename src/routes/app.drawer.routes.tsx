import { createDrawerNavigator } from '@react-navigation/drawer';
import { AppRoutes } from './app.tab.routes';
import { ContentDrawerNavigation } from './ui/content.drawer.navigator';

const Drawer = createDrawerNavigator();

export function MyDrawer() {
  return (
    <Drawer.Navigator
    screenOptions={{
      headerShown: false
    }}
    drawerContent={props => <ContentDrawerNavigation {...props} />}
    >
      <Drawer.Screen name="Home" component={AppRoutes} 
      options={{
        headerStyle: {
          backgroundColor: '#131313',
          borderBottomColor: '#00b94a', ///nao esta pegando
          borderBottomWidth: 1,
    
        },
        headerTintColor: '#fc2828',
        
        headerTitle: ''
      }}
      />
    </Drawer.Navigator>
  );
}