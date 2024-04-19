import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, TouchableOpacity } from "react-native";
import { COLORS } from "../constants/colors";
import {
  StackNavigatorAuth,
  StackNavigatorCart,
  StackNavigatorCatalog,
  StackNavigatorCategories,
  StackNavigatorFavorite,
  StackNavigatorHome,
  StackNavigatorProfile,
} from "./StackNavigation";
import { useSelector } from "react-redux";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();
const TabsNavigation = () => {
  const basket = useSelector((state) => state.basket);
  const favorites = useSelector((state) => state.favorites);
  const user = useSelector((state) => state.user);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { height: 60, paddingTop: 8 },
        tabBarLabelStyle: { paddingBottom: 8 },
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={StackNavigatorHome}
        options={{
          title: "Главная",
          tabBarButton: (props) => <TouchableOpacity {...props} />,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={"home"}
              size={24}
              color={focused ? COLORS.mainRed : "#AFAFAF"}
            />
          ),
          tabBarShowLabel: true,
          headerShown: false,
          tabBarActiveTintColor: COLORS.mainRed,
        }}
      />
      <Tab.Screen
        name="CatalogStack"
        component={StackNavigatorCatalog}
        options={{
          title: "Каталог",
          tabBarButton: (props) => <TouchableOpacity {...props} />,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={"grid"}
              size={24}
              color={focused ? COLORS.mainRed : "#AFAFAF"}
            />
          ),
          tabBarShowLabel: true,
          headerShown: false,
          tabBarActiveTintColor: COLORS.mainRed,
        }}
      />
      <Tab.Screen
        name="FavoritesStack"
        component={StackNavigatorFavorite}
        options={{
          title: "Избранное",
          tabBarButton: (props) => <TouchableOpacity {...props} />,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={"heart"}
              size={26}
              color={focused ? COLORS.mainRed : "#AFAFAF"}
            />
          ),
          tabBarShowLabel: true,
          tabBarBadge: favorites.length,
          tabBarBadgeStyle: favorites.length ? { opacity: 1 } : { opacity: 0 },
          headerShown: false,
          tabBarActiveTintColor: COLORS.mainRed,
        }}
      />
      <Tab.Screen
        name="CartStack"
        component={StackNavigatorCart}
        options={{
          title: "Корзина",
          tabBarButton: (props) => <TouchableOpacity {...props} />,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={"basket"}
              size={28}
              color={focused ? COLORS.mainRed : "#AFAFAF"}
            />
          ),
          tabBarShowLabel: true,
          tabBarBadge: basket.length,
          tabBarBadgeStyle: basket.length ? { opacity: 1 } : { opacity: 0 },
          headerShown: false,
          tabBarActiveTintColor: COLORS.mainRed,
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={
          user.isAuthenticated ? StackNavigatorProfile : StackNavigatorAuth
        }
        options={{
          title: "Профиль",
          tabBarButton: (props) => <TouchableOpacity {...props} />,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={"person-circle"}
              size={26}
              color={focused ? COLORS.mainRed : "#AFAFAF"}
            />
          ),
          tabBarShowLabel: true,
          headerShown: false,
          tabBarActiveTintColor: COLORS.mainRed,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabsNavigation;
