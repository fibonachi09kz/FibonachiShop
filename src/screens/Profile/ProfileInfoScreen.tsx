import { useSelector } from "react-redux";
import { useLayoutEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import ProfileInfo from "../../components/Profile/ProfileInfo/ProfileInfo";
import Ionicons from "react-native-vector-icons/Ionicons";
import { COLORS } from "../../constants/colors";

type ScreenProps = {
	navigation: any
}

const ProfileInfoScreen = ({ navigation }: ScreenProps) => {
	const user = useSelector(state => state.user)
	useLayoutEffect(() => {
		navigation.setOptions({
			headerLeft: () => (
				<TouchableOpacity style={styles.menuBtn} onPress={() => navigation.goBack()}>
					<Ionicons name="chevron-back" size={28} />
				</TouchableOpacity>
			)
		});

	}, [navigation]);
	if (!user) {
		return (
			<ScrollView style={styles.main}>
				<Text style={styles.title}>Произошла ошибка, попробуйте позднее</Text>
			</ScrollView>
		)
	}

	const name = user.user['NAME'];
	const lastName = user.user['LAST_NAME'];
	const phone = user.user['PERSONAL_PHONE'];
	const birthday = user.user['PERSONAL_BIRTHDAY'];

	return (
		<ScrollView style={styles.main}>
			<TouchableOpacity style={styles.mainInfoButton} activeOpacity={0.7}>
				<View>
					<Text style={styles.mainInfoLabel}>Имя, фамилия</Text>
					{name && lastName ?
						<Text style={styles.mainInfoValue}>{name} {lastName}</Text>
						:
						<Text style={styles.mainInfoValue}>Не заполнено</Text>
					}
				</View>
				<Ionicons name="chevron-forward" size={28} color="#9B9B9BFF" />
			</TouchableOpacity>

			<View style={styles.section}>
				<Text style={styles.sectionLabel}>Учётные данные</Text>
				<TouchableOpacity style={styles.mainInfoButton} activeOpacity={0.7}>
					<View>
						<Text style={styles.mainInfoLabel}>Телефон</Text>
						{phone ?
							<Text style={styles.mainInfoValue}>{phone}</Text>
							:
							<Text style={styles.mainInfoValue}>Не заполнено</Text>
						}
					</View>
					<Ionicons name="chevron-forward" size={28} color="#9B9B9BFF" />
				</TouchableOpacity>
				<TouchableOpacity style={styles.mainInfoButton} activeOpacity={0.7}>
					<View>
						<Text style={styles.mainInfoLabel}>День рождения</Text>
						{phone ?
							<Text style={styles.mainInfoValue}>{birthday}</Text>
							:
							<Text style={styles.mainInfoValue}>Не заполнено</Text>
						}
					</View>
					<Ionicons name="chevron-forward" size={28} color="#9B9B9BFF" />
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	main: {
		flex: 1,
		backgroundColor: "#FFFFFF"
	},
	title: {
		fontSize: 24,
		fontWeight: "500",
		marginBottom: 12
	},
	menuBtn: {
		marginHorizontal: 16
	},
	mainInfoButton: {
		paddingHorizontal: 16,
		paddingVertical: 12,
		backgroundColor: '#fff',
		flexDirection: 'row',
		alignItems: "center",
		gap: 5,
		justifyContent: "space-between",
		borderBottomColor: '#f1f1f1',
		borderBottomWidth: 1
	},
	mainInfoLabel: {
		color: "#333",
		marginBottom: 3
	},
	mainInfoValue: {
		color: '#000',
		fontSize: 16
	},
	section: {

	},
	sectionLabel: {
		paddingHorizontal: 16,
		paddingVertical: 8,
		backgroundColor: '#f1f1f1',
		textTransform: 'uppercase',
		fontSize: 12,
		fontWeight: "500"
	}
})
export default ProfileInfoScreen;
