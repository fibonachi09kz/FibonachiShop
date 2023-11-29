import {Text, FlatList, TouchableOpacity, StyleSheet, View, Image, ScrollView} from "react-native";
import {CATEGORIES} from "../../data/placeholder";


const CategoriesScreen = ({ navigation }) => {

	const pressHandler = (category) => {
		navigation.navigate("ProductList", {
			category: category
		})
	}

	return (
		<ScrollView style={styles.main} >
			<Text style={styles.title}>Категории</Text>
			<View style={styles.items}>
				{CATEGORIES.map((item) => (
					<TouchableOpacity
						key={item.id}
						style={styles.categoryItem}
						activeOpacity={0.7}
						onPress={() => pressHandler(item)
						}>
						<View style={styles.categoryInner}>
							<View style={styles.categoryImageWrapper}>
								<Image style={styles.categoryImage} source={{uri: item.imageUrl ? item.imageUrl : "https://icon-library.com/images/not-found-icon/not-found-icon-28.jpg"}} resizeMode="cover" />
							</View>
							<View style={styles.categoryBody}>
								<Text style={styles.categoryTitle}>{item.title}</Text>
							</View>
						</View>
					</TouchableOpacity>
				))}
			</View>
		</ScrollView>
	)
}


const styles = StyleSheet.create({
	categoryImageWrapper: {
		width: "100%",
		height: 200,
		borderRadius: 6,
		overflow: "hidden"
	},
	categoryImage: {
		height: "100%",
		width: "100%"
	},
	items: {
		paddingBottom: 50
	},
	main: {
		paddingHorizontal: 16,
		paddingVertical: 32,
		flex: 1,
		backgroundColor: "#FFFFFF",
		paddingBottom: 100
	},
	title: {
		fontSize: 24,
		fontWeight: "500",
		marginBottom: 12
	},
	categoryItem: {
		borderRadius: 6,
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: "#e0e0e0",
		marginBottom: 10
	},
	categoryBody: {
		padding: 15
	},
	categoryInner: {
		alignItems: "center"
	},
	categoryTitle: {
		fontWeight: "600",
		fontSize: 18
	}
})

export default CategoriesScreen;
