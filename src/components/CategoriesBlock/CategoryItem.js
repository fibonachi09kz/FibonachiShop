import { View, Text, StyleSheet, Pressable } from "react-native";


function CategoryItem({ category, pressHandler }) {

	return (
		<Pressable style={styles.container} onPress={() => pressHandler(category['ID'])}>
			<Text style={styles.title}>{category['NAME']}</Text>
		</Pressable>
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
		backgroundColor: '#fff'
	},
	title: {
		fontSize: 16,
		textAlign: "center",
		fontWeight: "600"
	}
})

export default CategoryItem;
