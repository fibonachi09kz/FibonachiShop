import {
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  ScrollView,
} from "react-native";
import { CATEGORIES } from "../../data/placeholder";
import { useEffect, useState } from "react";
import { getBXSectionList } from "../../utils/fetching";
import CategoryItem from "../../components/CategoriesBlock/CategoryItem";
import { LoaderScreen } from "react-native-ui-lib";

const CategoriesScreen = ({ navigation }) => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const pressHandler = (category) => {
    navigation.navigate("ProductList", {
      category: category.item.ID,
    });
  };

  useEffect(() => {
    async function getCategories() {
      const cats = await getBXSectionList({
        iblockId: 26,
      });
      if (cats.result.length) {
        setCategories(cats.result);
        setLoading(false);
      }
    }
    getCategories();
  }, []);

  return (
    <View style={styles.main}>
      {loading ? (
        <LoaderScreen
          message={"Загрузка категорий, пожалуйста подождите..."}
          loaderColor={"#777"}
        />
      ) : (
        <>
          <Text style={styles.title}>Категории</Text>
          <FlatList
            data={categories}
            keyExtractor={(item) => item.ID}
            renderItem={(category) => (
              <TouchableOpacity
                key={category.item.ID}
                style={styles.categoryItem}
                activeOpacity={0.7}
                onPress={() => pressHandler(category)}
              >
                <View style={styles.categoryInner}>
                  <View style={styles.categoryBody}>
                    <Text style={styles.categoryTitle}>
                      {category.item.NAME}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            contentContainerStyle={{ columnGap: 16 }}
            showsHorizontalScrollIndicator={false}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  categoryImageWrapper: {
    width: "100%",
    height: 200,
    borderRadius: 6,
    overflow: "hidden",
  },
  categoryImage: {
    height: "100%",
    width: "100%",
  },
  items: {
    paddingBottom: 50,
  },
  main: {
    paddingHorizontal: 16,
    paddingVertical: 32,
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingBottom: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 12,
  },
  categoryItem: {
    borderRadius: 6,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#e0e0e0",
    marginBottom: 10,
  },
  categoryBody: {
    padding: 15,
  },
  categoryInner: {
    alignItems: "center",
  },
  categoryTitle: {
    fontWeight: "600",
    fontSize: 18,
  },
});

export default CategoriesScreen;
