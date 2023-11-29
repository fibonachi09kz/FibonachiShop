import { createDrawerNavigator } from '@react-navigation/drawer';
import SidebarMenu from "./SidebarMenu";
import TabsNavigation from "./TabsNavigation";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
	return (
		<Drawer.Navigator
			drawerContent={() => <SidebarMenu />}
			screenOptions={{
				headerShown: false
			}}
		>
			<Drawer.Screen name="Tabs" component={TabsNavigation} />
		</Drawer.Navigator>
	);
}

export default DrawerNavigation