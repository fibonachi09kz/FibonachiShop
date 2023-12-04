import { StatusBar, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigation from "../navigation/DrawerNavigation";
import { useActions } from "../hooks/useActions";
import { useEffect } from "react";
import { deviceInfoAction } from "../utils/deviceInfo";
import { useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

const EntryPoint = () => {

	const { loginUser } = useActions();
	const user = useSelector(state => state.user)
	console.log(user)

	useEffect(() => {
		const restoreUser = async () => {
			const authToken = await AsyncStorage.getItem('authToken');
			if (authToken && !user.isAuthenticated) {
				console.log(authToken)
			}
		}
		restoreUser()
		deviceInfoAction();
	}, [])

	return (
		<>
			<StatusBar />

			<View style={{ flex: 1 }}>

				<NavigationContainer>

					<DrawerNavigation />

				</NavigationContainer>

			</View>
		</>

	)
}
export default EntryPoint;
