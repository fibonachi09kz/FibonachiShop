import { View, Text, StyleSheet, Pressable } from "react-native";


function CategoryItem({ pressHandler, category }) {

	const icon = category.icon()

	return (
		<Pressable style={styles.container} onPress={pressHandler}>
			<View style={styles.icon}>{icon}</View>
			<Text style={styles.title}>{category.title}</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		width: 90
	},
	icon: {
		backgroundColor: "#f1f1f1",
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 8,
		flex: 0,
		marginBottom: 10
	},
	title: {
		fontSize: 14,
		textAlign: "center",
		fontWeight: "500"
	}
})

export default CategoryItem;