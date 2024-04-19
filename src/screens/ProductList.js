import { StyleSheet, Text, View, ScrollView } from "react-native";
import { PRODUCTS } from "../data/placeholder";
import ProductListed from "../components/Product/ProductListed";
import { useNavigation } from "@react-navigation/native";
import { useCallback } from "react";

const ProductList = ({ route }) => {
  const navigation = useNavigation();
  const filteredProducts = PRODUCTS.filter((item) =>
    item.categoryIds.includes(route.params.category.id)
  );
  const currentCategory = route.params.category;

  const pressHandler = useCallback(
    (product) => {
      navigation.navigate("ProductDetail", {
        product: product,
      });
    },
    [navigation]
  );

  return (
    <ScrollView style={styles.main}>
      <Text style={styles.title}>{currentCategory.title}</Text>
      <View style={styles.items}>
        {filteredProducts.map((item) => (
          <ProductListed
            key={item.id}
            product={item}
            pressHandler={pressHandler}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 16,
    paddingVertical: 32,
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  items: {
    paddingBottom: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 12,
  },
});

export default ProductList;
