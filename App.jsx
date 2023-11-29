import {Provider} from "react-redux";
import {StatusBar, View} from "react-native";
import {store} from "./src/store/store";
import {NavigationContainer} from "@react-navigation/native";
import DrawerNavigation from "./src/navigation/DrawerNavigation";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {useEffect} from "react";
import {deviceInfoAction} from "./src/utils/deviceInfo";

const App = () => {

useEffect(() => {
deviceInfoAction()
}, [])

return (
	<SafeAreaProvider>
		<Provider store={store}>

			<StatusBar />

			<View style={{ flex: 1 }}>

				<NavigationContainer>

					<DrawerNavigation />

				</NavigationContainer>

			</View>

		</Provider>
	</SafeAreaProvider>
);
}



export default App;
