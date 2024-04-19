import { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { COLORS } from "../../constants/colors";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import { googleConfig } from "../../data/googleConfig";
import { getUserByGoogle } from "../../utils/fetching";
import { useSelector } from "react-redux";
import { useActions } from "../../hooks/useActions";
import { useNavigation } from "@react-navigation/native";
import { Colors, LoaderScreen } from "react-native-ui-lib";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Fontisto from "react-native-vector-icons/Fontisto";
import { Screen } from "react-native-screens";

GoogleSignin.configure(googleConfig);

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Неверный email")
    .required("Email обязателен к заполнению"),
  password: Yup.string().required("Пароль обязателен к заполнению"),
});

const LoginScreen = ({ navigation }) => {
  const user = useSelector((state) => state.user);
  const { loginUser } = useActions();

  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);

  const router = useNavigation();

  async function onGoogleButtonPress() {
    try {
      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });

      const { idToken } = await GoogleSignin.signIn();
      if (idToken) {
        setLoader(true);
        const fetchedUserFromBackend = await getUserByGoogle(idToken);
        if (fetchedUserFromBackend.result?.user) {
          console.log(fetchedUserFromBackend.result.user);
          loginUser({
            user: fetchedUserFromBackend.result.user,
            token: fetchedUserFromBackend.result.token,
          });
          router.navigate("ProfileStack");
        }
        setLoader(false);
      }
    } catch (error) {
      console.log(error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        setLoader(false);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.ONE_TAP_START_FAILED) {
        // starting the one tap dialog failed
      } else if (error.code === statusCodes.NO_SAVED_CREDENTIAL_FOUND) {
        // No saved credentials found. Launch the One Tap sign-up flow (use GoogleOneTapSignIn.signUp)
        // or do nothing and continue presenting the signed-out UI.
      } else {
      }
    }
  }

  const loginHandler = async (values) => {
    let { email, password } = values;
    email = email.trim();
    password = password.trim();

    try {
      setLoader(true);
      setError(false);
      const token = await getToken(email, password);
      setLoader(false);
      authCtx.authenticate(token);
    } catch (error) {
      setError(true);
      setLoader(false);
    }
  };

  if (loader) {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollView}
          keyboardShouldPersistTaps="handled"
        >
          <LoaderScreen
            message={"Загрузка, пожалуйста подождите..."}
            loaderColor={"#777"}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.textContainer}>
          <Text style={styles.title}>Добро пожаловать!</Text>
        </View>
        <TouchableOpacity
          style={styles.googleBtn}
          onPress={() => onGoogleButtonPress()}
        >
          <Fontisto
            style={styles.googleBtnIcon}
            name={"google"}
            size={22}
            color={"#000"}
          />
          <Text style={styles.googleBtnText}>Войти через Google</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        keyboardShouldPersistTaps="handled"
      >
        {/*{userInfo ? (*/}
        {/*	<View style={styles.logoContainer}>*/}
        {/*		<Text>Авторизационные данные:</Text>*/}
        {/*		<Text>{userInfo.name}</Text>*/}
        {/*		<Text>{userInfo.email}</Text>*/}
        {/*	</View>*/}
        {/*) : null}*/}

        <View style={styles.textContainer}>
          <Text style={styles.title}>Добро пожаловать!</Text>
          <Text style={styles.subtitle}>
            Чтобы продолжить, войдите в аккаунт!
          </Text>
        </View>

        {error && (
          <Text style={styles.authError}>
            Неправильный логин или пароль, попробуйте ещё раз
          </Text>
        )}

        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={loginHandler}
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

              {loader ? (
                <View style={styles.regStatus}>
                  <Text style={styles.regStatusText}>Вход ...</Text>
                </View>
              ) : (
                <TouchableOpacity
                  onPress={handleSubmit}
                  style={styles.submitBtn}
                  activeOpacity={0.7}
                >
                  <Text style={styles.submitBtnText}>Войти</Text>
                </TouchableOpacity>
              )}
            </View>
          )}
        </Formik>
        <View style={styles.bottomText}>
          <TouchableOpacity onPress={() => navigation.navigate("Registration")}>
            <Text style={styles.relinkText}>Зарегистрироваться</Text>
          </TouchableOpacity>
        </View>

        <Text>{user.email}</Text>
        <Text>{user.token}</Text>
        <Text>{user.isAuthenticated}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
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
    fontSize: 12,
  },
  inputContainer: {
    marginBottom: 10,
  },
  inputLabel: {
    fontSize: 14,
    marginBottom: 3,
  },
  relinkText: {
    fontSize: 16,
    textAlign: "center",
    color: COLORS.mainRed,
    fontWeight: "500",
  },
  submitBtn: {
    padding: 10,
    borderWidth: 1,
    borderColor: COLORS.mainRed,
    backgroundColor: COLORS.mainRed,
    borderRadius: 5,
    marginTop: 10,
  },
  submitBtnText: {
    textAlign: "center",
    fontSize: 18,
    color: "#FFFFFF",
    fontWeight: "500",
  },
  regStatus: {
    padding: 10,
    borderWidth: 1,
    borderColor: COLORS.mainRed,
    backgroundColor: COLORS.mainRed,
    borderRadius: 5,
    marginTop: 10,
  },
  regStatusText: {
    textAlign: "center",
    fontSize: 18,
    color: "#FFFFFF",
    fontWeight: "500",
  },
  authError: {
    fontSize: 14,
    color: COLORS.mainRed,
    marginBottom: 8,
  },
  appleAuthButton: {
    borderWidth: 1,
    marginTop: 10,
    height: 44,
    borderRadius: 6,
  },
  googleBtn: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#99999970",
    backgroundColor: "#fff",
    borderRadius: 5,
    marginTop: 30,
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  googleBtnText: {
    color: COLORS.mainText,
    fontSize: 18,
    marginHorizontal: "auto",
    display: "flex",
    flex: 1,
    textAlign: "center",
  },
  googleBtnIcon: {
    marginRight: "auto",
    position: "absolute",
    left: 10,
  },
});

export default LoginScreen;
