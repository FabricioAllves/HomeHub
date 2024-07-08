import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { CategoriesScreen, ServicesScreen } from "@screens";
import { MyDrawer } from "./app.drawer.routes";

type AppStack = {
  HomeScreen: undefined,
  CategoriesScreen: undefined,
  ServicesScreen: undefined
}

export type AppStackNavigatorRoutesProps = NativeStackNavigationProp<AppStack>

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false, animation: 'fade' }} initialRouteName="HomeScreen">
      <Screen name="HomeScreen" component={MyDrawer} />
      <Screen name="CategoriesScreen" component={CategoriesScreen} />
      <Screen name="ServicesScreen" component={ServicesScreen} />
    </Navigator>
  )
}