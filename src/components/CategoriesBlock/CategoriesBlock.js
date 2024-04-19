import { FlatList, View, StyleSheet, Text } from "react-native";
import CategoryItem from "./CategoryItem";
import { CATEGORIES } from "../../data/placeholder";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { LoaderScreen } from "react-native-ui-lib";
import { getBXSectionList } from "../../utils/fetching";

const CategoriesBlock = () => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      const catList = await getBXSectionList({
        iblockId: 26,
      });
    }
  }, []);
  const navigation = useNavigation();

  const pressHandler = (category) => {};

  return (
    <View style={styles.container}>
      {loading ? (
        <LoaderScreen
          message={"Загрузка категорий, пожалуйста подождите..."}
          loaderColor={"#777"}
        />
      ) : (
        <>
          <Text style={styles.title}>Категорииss</Text>
          <FlatList
            data={categories}
            keyExtractor={(item) => item.id}
            renderItem={(category) => <CategoryItem category={category.item} />}
            horizontal={true}
            contentContainerStyle={{ columnGap: 16 }}
            showsHorizontalScrollIndicator={false}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 32,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 12,
  },
});

export default CategoriesBlock;
