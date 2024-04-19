import {
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Text,
  SafeAreaView,
  View,
} from "react-native";
import { CATEGORIES } from "../data/placeholder";
import { useNavigation } from "@react-navigation/native";

const SidebarMenu = () => {
  const navigation = useNavigation();
  const pressHandler = (category) => {
    navigation.navigate("ProductList", { category: category });
  };

  const pressHandler2 = () => {
    navigation.navigate("BitrixProductsScreen");
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <FlatList
          data={CATEGORIES}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => pressHandler(item)}
            >
              <Text style={styles.menuItemText}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
        <TouchableOpacity style={styles.menuItem} onPress={pressHandler2}>
          <Text style={styles.menuItemText}>Продукты с битрикса</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  menuItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 12,
    borderRadius: 6,
    backgroundColor: "#f5f5f5",
  },
  menuItemText: {
    fontSize: 16,
    fontWeight: "500",
  },
});

export default SidebarMenu;
