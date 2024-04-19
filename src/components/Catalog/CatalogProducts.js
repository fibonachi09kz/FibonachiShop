import { FlatList, ScrollView, View } from "react-native";
import ProductListed from "../Product/ProductListed";

const CatalogProducts = ({ products }) => {
  return (
    <View>
      {products.map((product) => (
        <ProductListed key={product.ID} product={product} />
      ))}
    </View>
  );
};

export default CatalogProducts;
