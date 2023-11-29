import { FlatList, View, StyleSheet, Text } from "react-native";
import CategoryItem from "./CategoryItem";
import { CATEGORIES } from "../../data/placeholder";
import { useNavigation } from "@react-navigation/native";

const CategoriesBlock = () => {

	const navigation = useNavigation()

	const pressHandler = (category) => {

	}

	return (
		<View style={styles.container}>

			<Text style={styles.title}>Категории</Text>

			<FlatList
				data={CATEGORIES}
				keyExtractor={(item) => item.id}
				renderItem={(category) => (
					<CategoryItem
						pressHandler={() => pressHandler(category.item)}
						category={category.item}
					/>
				)}
				horizontal={true}
				contentContainerStyle={{columnGap: 16}}
				showsHorizontalScrollIndicator={false}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingVertical: 32,
		paddingHorizontal: 16
	},
	title: {
		fontSize: 24,
		fontWeight: "500",
		marginBottom: 12
	}
})


export default CategoriesBlock;