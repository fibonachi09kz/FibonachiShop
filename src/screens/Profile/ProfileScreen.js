import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useContext, useEffect, useLayoutEffect, useState} from "react";
import {useSelector} from "react-redux";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const ProfileScreen = ({ navigation }) => {

	const user = useSelector(state => state.user)

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => {
				return (
					<TouchableOpacity style={styles.settingsBtn}>
						<MaterialIcons name="settings" size={24} color="#000" />
					</TouchableOpacity>
				);
			},
		});

	}, [navigation]);

	if (!user) {
		return (
			<ScrollView style={styles.main}>
				<Text style={styles.title}>Произошла ошибка, попробуйте позднее</Text>
			</ScrollView>
		)
	}

	return (
		<ScrollView style={styles.main}>
			<Text style={styles.title}>Привет, {user.user['EMAIL']}!</Text>
			<View>
				{/*<ScrollView*/}
				{/*	horizontal*/}
				{/*	contentContainerStyle={{gap: 20}}*/}
				{/*>*/}
				{/*	<TouchableOpacity>*/}
				{/*		<Text>Бонусы</Text>*/}
				{/*		<Text>1490</Text>*/}
				{/*	</TouchableOpacity>*/}
				{/*	<TouchableOpacity>*/}
				{/*		<Text>История заказов</Text>*/}
				{/*		<Text>13 заказов</Text>*/}
				{/*	</TouchableOpacity>*/}
				{/*	<TouchableOpacity>*/}
				{/*		<Text>3 адреса</Text>*/}
				{/*	</TouchableOpacity>*/}
				{/*</ScrollView>*/}
				<Text>Email: {user.user['EMAIL']}</Text>
				<Text>TOKEN: {user.token}</Text>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	main: {
		paddingHorizontal: 16,
		paddingVertical: 32,
		flex: 1,
		backgroundColor: "#FFFFFF"
	},
	title: {
		fontSize: 24,
		fontWeight: "500",
		marginBottom: 12
	},
	settingsBtn: {
		marginHorizontal: 16
	}
})


export default ProfileScreen;