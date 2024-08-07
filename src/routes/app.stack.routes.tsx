import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { CategoriesScreen, ProfileScreen, ServicesScreen } from "@screens";
import { MyDrawer } from "./app.drawer.routes";

type AppStack = {
  HomeScreen: undefined,
  CategoriesScreen: undefined,
  ServicesScreen: {title?: string}
  ProfileScreen: undefined
}

export type AppStackNavigatorRoutesProps = NativeStackNavigationProp<AppStack>
const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false, animation: 'fade' }} initialRouteName="HomeScreen">
      <Screen name="HomeScreen" component={MyDrawer} />
      <Screen name="CategoriesScreen" component={CategoriesScreen} />
      <Screen name="ServicesScreen" component={ServicesScreen} />
      <Screen name="ProfileScreen" component={ProfileScreen} />
    </Navigator>
  )
}