import { FlatList, ScrollView } from "react-native";
import CategoryItem from "../CategoriesBlock/CategoryItem";
import ProductListed from "../Product/ProductListed";

const CatalogProducts = ({products}) => {
	console.log(products)
	return (
			<FlatList
				data={products}
				keyExtractor={(item) => item['ID']}
				renderItem={(product) => (
					<ProductListed product={product.item} />
				)}
				contentContainerStyle={{columnGap: 16}}
				showsHorizontalScrollIndicator={false}
			/>
	)
}

export default CatalogProducts;
