import {createStackNavigator} from "@react-navigation/stack";
import {Text, StyleSheet, TouchableOpacity, Alert} from "react-native";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import HomeScreen from "../screens/Home/HomeScreen";
import CategoriesScreen from "../screens/Categories/CategoriesScreen";
import ProductList from "../screens/ProductList"
import CartScreen from "../screens/Cart/CartScreen";
import FavoritesScreen from "../screens/Favorite/FavoritesScreen";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import LoginScreen from "../screens/Login/LoginScreen";
import RegistrationScreen from "../screens/Registration/RegistrationScreen";
import {useContext} from "react";
import OrderScreen from "../screens/Order/OrderScreen";
import BitrixProductsScreen from "../screens/BitrixProductsScreen";
import {useSelector} from "react-redux";
import {useActions} from "../hooks/useActions";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import CatalogScreen from "../screens/Catalog/CatalogScreen";
import ProfileInfoScreen from "../screens/Profile/ProfileInfoScreen";

const Stack = createStackNavigator();

export const StackNavigatorHome = ({ navigation }) => (
	<Stack.Navigator
		initialRouteName="Home"
	>
		<Stack.Screen
			name="Home"
			component={HomeScreen}
			options={{
				headerTitle: "",
				headerLeft: () => (
					<TouchableOpacity style={styles.menuBtn} onPress={() => navigation.openDrawer()}>
						<Ionicons name={'list'} size={28} />
					</TouchableOpacity>
				)
			}}
		/>
		<Stack.Screen
			name="ProductDetail"
			component={ProductDetailScreen}
			options={({ navigation }) => ({
				headerTitle: "",
				headerLeft: () => (
					<TouchableOpacity style={styles.menuBtn} onPress={() => navigation.goBack()}>
						<Ionicons name={'chevron-back'} size={28} />
					</TouchableOpacity>
				)
			})}
		/>
	</Stack.Navigator>
);

export const StackNavigatorCategories = ({ navigation }) => {

	return (
		<Stack.Navigator
			initialRouteName="Categories"
		>
			<Stack.Screen
				name="Categories"
				component={CategoriesScreen}
				options={{
					headerTitle: "",
					headerLeft: () => (
						<TouchableOpacity style={styles.menuBtn} onPress={() => navigation.openDrawer()}>
							<Ionicons name={'list'} size={28} />
						</TouchableOpacity>
					)
				}}
			/>

			<Stack.Screen
				name="ProductList"
				component={ProductList}
				options={{
					headerTitle: "",
					headerLeft: () => (
						<TouchableOpacity style={styles.menuBtn} onPress={() => navigation.navigate("Categories")}>
							<Ionicons name={'chevron-back'} size={28} />
						</TouchableOpacity>
					)
				}}
			/>

			<Stack.Screen
				name="BitrixProductsScreen"
				component={BitrixProductsScreen}
				options={{
					headerTitle: "",
					headerLeft: () => (
						<TouchableOpacity style={styles.menuBtn} onPress={() => navigation.navigate("Categories")}>
							<Ionicons name={'chevron-back'} size={28} />
						</TouchableOpacity>
					)
				}}
			/>

			<Stack.Screen
				name="ProductDetail"
				component={ProductDetailScreen}
				options={({ navigation }) => ({
					headerTitle: "",
					headerLeft: () => (
						<TouchableOpacity style={styles.menuBtn} onPress={() => navigation.goBack()}>
							<Ionicons name={'chevron-back'} size={28} />
						</TouchableOpacity>
					)
				})}
			/>

		</Stack.Navigator>
	);
}


export const StackNavigatorCatalog = ({ navigation }) => {

	return (
		<Stack.Navigator
			initialRouteName="Catalog"
		>
			<Stack.Screen
				name="Catalog"
				component={CatalogScreen}
				options={{
					headerTitle: "",
					headerLeft: () => (
						<TouchableOpacity style={styles.menuBtn} onPress={() => navigation.openDrawer()}>
							<Ionicons name={'list'} size={28} />
						</TouchableOpacity>
					)
				}}
			/>


		</Stack.Navigator>
	);
}



export const StackNavigatorCart = ({ navigation }) => {

	return (
		<Stack.Navigator
			initialRouteName="Cart"
		>
			<Stack.Screen
				name="Cart"
				component={CartScreen}
				options={{
					headerTitle: "",
					headerLeft: () => (
						<TouchableOpacity style={styles.menuBtn} onPress={() => navigation.openDrawer()}>
							<Ionicons name={'list'} size={28} />
						</TouchableOpacity>
					)
				}}
			/>

			<Stack.Screen
				name="OrderScreen"
				component={OrderScreen}
				options={({ navigation }) => ({
					headerTitle: "",
					headerLeft: () => (
						<TouchableOpacity style={styles.menuBtn} onPress={() => navigation.goBack()}>
							<Ionicons name={'chevron-back'} size={28} />
						</TouchableOpacity>
					)
				})}
			/>

		</Stack.Navigator>
	);
}







export const StackNavigatorFavorite = ({ navigation }) => {

	return (
		<Stack.Navigator
			initialRouteName="Favorites"
		>
			<Stack.Screen
				name="Favorites"
				component={FavoritesScreen}
				options={{
					headerTitle: "",
					headerLeft: () => (
						<TouchableOpacity style={styles.menuBtn} onPress={() => navigation.openDrawer()}>
							<Text>Иконка</Text>
						</TouchableOpacity>
					)
				}}
			/>

		</Stack.Navigator>
	);
}

export const StackNavigatorProfile = ({ navigation }) => {

	const { logoutUser } = useActions();
	const user = useSelector(state => state.user);

	const showAlert = () =>
		Alert.alert(
			'Выход',
			'Вы действительно хотите выйти?',
			[
				{
					text: 'Нет',
					style: 'cancel',
				},
				{
					text: 'Выйти',
					onPress: () => logoutUser(),
					style: 'destructive',
				},
			],
			{
				cancelable: true
			},
		);

	return (
		<Stack.Navigator
			initialRouteName="Profile"
		>

			<Stack.Screen
				name="Profile"
				component={ProfileScreen}
				options={{
					headerTitle: "",
					headerLeft: () => (
						<TouchableOpacity style={styles.menuBtn} onPress={() => showAlert()}>
							<MaterialIcons name="logout" size={26} color="#000" />
						</TouchableOpacity>
					)
				}}
			/>

			<Stack.Screen
				name="ProfileInfo"
				component={ProfileInfoScreen}
				options={{
					headerTitle: "Мои данные"
				}}
			/>

		</Stack.Navigator>
	);
}


export const StackNavigatorAuth = ({ navigation }) => {

	return (
		<Stack.Navigator
			initialRouteName="Login"
		>
			<Stack.Screen
				name="Login"
				component={LoginScreen}
				options={{
					headerTitle: "",
					headerLeft: () => (
						<TouchableOpacity style={styles.menuBtn} onPress={() => navigation.openDrawer()}>
							<Text>Иконка</Text>
						</TouchableOpacity>
					)
				}}
			/>

			<Stack.Screen
				name="Registration"
				component={RegistrationScreen}
				options={{
					headerTitle: "",
					headerLeft: () => (
						<TouchableOpacity style={styles.menuBtn} onPress={() => navigation.openDrawer()}>
							<Text>Иконка</Text>
						</TouchableOpacity>
					)
				}}
			/>

		</Stack.Navigator>
	);
}




const styles = StyleSheet.create({
	menuBtn: {
		marginHorizontal: 16
	}
})

