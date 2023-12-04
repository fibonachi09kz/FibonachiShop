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
			{!user.user['NAME'] && !user.user['LAST_NAME'] ?
				(
					<Text style={styles.title}>Привет!</Text>
				)
				:
				(
					<Text style={styles.title}>Привет, {user.user['NAME']} {user.user['LAST_NAME']}!</Text>
				)
			}
			<View>
				{!user.user['NAME'] && !user.user['LAST_NAME'] ?
					(
						<TouchableOpacity style={styles.userInfoAlert} activeOpacity={0.7}>
							<Text style={styles.userInfoAlertText}>Заполните, пожалуйста личные данные</Text>
							<MaterialIcons name={'chevron-right'} size={20} />
						</TouchableOpacity>
					)
					:
					null
				}
				<Text>Ваша почта: {user.user['EMAIL']}</Text>
				<Text>Ваш токен: {user.token}</Text>
				<Text>Время регистрации: {user.user['DATE_REGISTER']}</Text>
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
	},
	userInfoAlert: {
		paddingHorizontal: 10,
		paddingVertical: 8,
		borderRadius: 6,
		backgroundColor: 'rgba(255,185,126,0.36)',
		marginBottom: 10,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	userInfoAlertText: {
		color: 'rgb(128,62,0)'
	}
})


export default ProfileScreen;
