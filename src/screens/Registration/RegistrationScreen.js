import {useContext, useState} from "react";
import {
	SafeAreaView,
	ScrollView,
	View,
	TextInput,
	StyleSheet,
	Text, TouchableOpacity,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import {COLORS} from "../../constants/colors";

const validationSchema = Yup.object().shape({
	email: Yup.string().email("Неверный email").required("Email обязателен к заполнению"),
	password: Yup.string().required("Пароль обязателен к заполнению"),
	passwordConfirm: Yup.string()
		.test('passwords-match', 'Пароли должны совпадать', function(value) {
			return this.parent.password === value;
		})
		.required('Подтвердите пароль'),
});

const RegistrationScreen = ({ navigation }) => {

	const [error, setError] = useState(false);
	const [loader, setLoader] = useState(false);

	const registrationHandler = async (values) => {
		let { email, password } = values;
		email = email.trim();
		password = password.trim();

		try {
			setLoader(true)
			setError(false)
			setLoader(false)
		} catch (error) {
			setError(true)
			setLoader(false)
		}

	};

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView
				contentContainerStyle={styles.scrollView}
				keyboardShouldPersistTaps="handled"
			>
				<View style={styles.logoContainer}>

				</View>

				<View style={styles.textContainer}>
					<Text style={styles.title}>Регистрация</Text>
					<Text style={styles.subtitle}>
						Чтобы продолжить, зарегистрируйтесь!
					</Text>
				</View>

				<Formik
					initialValues={{
						email: "",
						password: "",
						passwordConfirm: ""
					}}
					validationSchema={validationSchema}
					onSubmit={registrationHandler}
				>
					{({ handleChange, handleBlur, handleSubmit, values, errors }) => (
						<View style={styles.formContainer}>

							<View style={styles.inputContainer}>
								<Text style={styles.inputLabel}>E-mail</Text>
								<TextInput
									style={styles.input}
									onChangeText={handleChange("email")}
									onBlur={handleBlur("email")}
									value={values.email}
									placeholder="danya.fibonachi@example.com"
								/>
								{errors.email && (
									<Text style={styles.errorText}>{errors.email}</Text>
								)}
							</View>

							<View style={styles.inputContainer}>
								<Text style={styles.inputLabel}>Пароль</Text>
								<TextInput
									secureTextEntry={true}
									style={styles.input}
									onChangeText={handleChange("password")}
									onBlur={handleBlur("password")}
									value={values.password}
									placeholder="Введите пароль"
								/>
								{errors.password && (
									<Text style={styles.errorText}>{errors.password}</Text>
								)}
							</View>

							<View style={styles.inputContainer}>
								<Text style={styles.inputLabel}>Подтверждение пароля</Text>
								<TextInput
									secureTextEntry={true}
									style={styles.input}
									onChangeText={handleChange("passwordConfirm")}
									onBlur={handleBlur("passwordConfirm")}
									value={values.passwordConfirm}
									placeholder="Подтвердите пароль"
								/>
								{errors.passwordConfirm && (
									<Text style={styles.errorText}>{errors.passwordConfirm}</Text>
								)}
							</View>

							{loader ?
								<View style={styles.regStatus}>
									<Text style={styles.regStatusText}>Регистрация ...</Text>
								</View>
								:
								<TouchableOpacity onPress={handleSubmit} style={styles.submitBtn} activeOpacity={0.7}>
									<Text style={styles.submitBtnText}>Зарегистрироваться</Text>
								</TouchableOpacity>
							}
						</View>

					)}
				</Formik>
				<View style={styles.bottomText}>
					<TouchableOpacity onPress={() => navigation.navigate("Login")}>
						<Text style={styles.relinkText}>Войти</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#ffffff"
	},
	scrollView: {
		flexGrow: 1,
		paddingVertical: 20,
		paddingHorizontal: 16,
	},
	logoContainer: {
		alignItems: "center",
		marginBottom: 20,
	},
	textContainer: {
		marginBottom: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 8,
	},
	subtitle: {
		fontSize: 16,
		color: "#888",
	},
	formContainer: {
		marginBottom: 10,
	},
	input: {
		height: 40,
		borderWidth: 1,
		borderColor: "#ccc",
		borderRadius: 5,
		paddingHorizontal: 10,
		marginBottom: 2,
	},
	errorText: {
		color: COLORS.mainRed,
		fontSize: 12
	},
	inputContainer: {
		marginBottom: 10
	},
	inputLabel: {
		fontSize: 14,
		marginBottom: 3
	},
	relinkText: {
		fontSize: 16,
		textAlign: "center",
		color: COLORS.mainRed,
		fontWeight: "500"
	},
	submitBtn: {
		padding: 10,
		borderWidth: 1,
		borderColor: COLORS.mainRed,
		backgroundColor: COLORS.mainRed,
		borderRadius: 5,
		marginTop: 10
	},
	submitBtnText: {
		textAlign: "center",
		fontSize: 18,
		color: "#FFFFFF",
		fontWeight: "500"
	},
	regStatus: {
		padding: 10,
		borderWidth: 1,
		borderColor: COLORS.mainRed,
		backgroundColor: COLORS.mainRed,
		borderRadius: 5,
		marginTop: 10
	},
	regStatusText: {
		textAlign: "center",
		fontSize: 18,
		color: "#FFFFFF",
		fontWeight: "500"
	}
});

export default RegistrationScreen;