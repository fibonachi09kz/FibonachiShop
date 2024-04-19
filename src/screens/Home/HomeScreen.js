import {
  Alert,
  Button,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import RecommendedBlock from "../../components/RecommendedBlock/RecommendedBlock";
import PromoSlider from "../../components/PromoSlider/PromoSlider";

const HomeScreen = () => {
  return (
    <ScrollView style={styles.main}>
      <PromoSlider />
      <RecommendedBlock />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
});
export default HomeScreen;
