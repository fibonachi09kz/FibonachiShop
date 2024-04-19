import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { COLORS } from "../../constants/colors";

function CategoryItem({ category, pressHandler }) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container}
      onPress={() => pressHandler(category.ID)}
    >
      <Text style={styles.title}>{category.NAME}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#e0e0e0",
    marginBottom: 10,
    padding: 15,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "600",
    color: COLORS.mainText,
  },
});

export default CategoryItem;
