import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import { PRODUCTS } from "../../data/placeholder";
import { COLORS } from "../../constants/colors";
import RecommendedItem from "./RecommendedItem";
import {useNavigation} from "@react-navigation/native";

const RecommendedBlock = ({  }) => {

	const navigation = useNavigation()

	const pressHandler = (product) => {
		navigation.navigate('ProductDetail', {
			product: product
		})
	}
	const seeAllHandler = () => {

	}


	return (
		<View style={styles.container}>

			<View style={styles.titleWrapper}>
				<Text style={styles.title}>Рекомендуемые</Text>
				<TouchableOpacity onPress={seeAllHandler}>
					<Text style={styles.seeAll}>Показать все</Text>
				</TouchableOpacity>
			</View>


			<FlatList
				data={PRODUCTS}
				keyExtractor={(item) => item.id}
				renderItem={(item) => (
					<RecommendedItem
						pressHandler={() => pressHandler(item.item)}
						product={item.item}
					/>
				)}
				horizontal={true}
				contentContainerStyle={{columnGap: 16}}
				showsHorizontalScrollIndicator={false}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingVertical: 32,
		paddingHorizontal: 16
	},
	title: {
		fontSize: 24,
		fontWeight: "500",
	},
	titleWrapper: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 12
	},
	seeAll: {
		color: COLORS.mainRed,
		fontSize: 16
	}
})

export default RecommendedBlock