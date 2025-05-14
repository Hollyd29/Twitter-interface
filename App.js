import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/tabscreens/homescreen";
import SearchScreen from "./screens/tabscreens/searchscreen";
import MessageScreen from "./screens/tabscreens/messagescreen";
import ProfileScreen from "./screens/drawerscreens/profilescreen";
import ListScreen from "./screens/drawerscreens/listscreen";
import SpaceScreen from "./screens/drawerscreens/spacescreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function HomeDrawer() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Message" component={MessageScreen} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Homee" component={HomeDrawer} />

          <Drawer.Screen name="Profile" component={ProfileScreen} />
          <Drawer.Screen name="List" component={ListScreen} />
          <Drawer.Screen name="Space" component={SpaceScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default App;
