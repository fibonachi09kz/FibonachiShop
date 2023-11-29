import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, Vibration } from "react-native";
import { CURRENCIES} from "../constants/global";
import { useState } from "react";
import { COLORS } from "../constants/colors";

import { useSelector } from "react-redux";
import { useActions } from "../hooks/useActions";

const ProductDetailScreen = ({ route }) => {
	
	const product = route.params.product
	
	const favorites = useSelector(state => state.favorites)
	const { toggleFavorites } = useActions()
	const isExistsFavorite = favorites.some(r => r === product.id)

	const basket = useSelector(state => state.basket)
	const { addToBasket, removeFromBasket } = useActions()
	
	const [count, setCount] = useState(1)

	let basketItem = basket.find(item => item.id === product.id);
	let countInBasket = basketItem ? basketItem.count : 0;
	
	const inc = () => {
		if (count !== 99) {
			setCount(count + 1)
		}
	}
	const dec = () => {
		if (count !== 1 && count > 1) {
			setCount(count - 1)
		}
	}

	const basketHandler = () => {
		if (countInBasket) {
			removeFromBasket(product.id)
		} else {
			addToBasket( {
				id: product.id,
				count: count
			})
			Vibration.vibrate()
		}
	}

	return (
		<>
			<ScrollView style={styles.main}>
				<View style={styles.imageWrapper}>
					<Image style={styles.image} source={{uri: product.imageUrl}} resizeMode="cover" />
				</View>
				<View style={styles.body}>
					<View style={styles.titleWrapper}>
						<Text style={styles.title} numberOfLines={1}>{product.title}</Text>
						<TouchableOpacity style={styles.favoriteBtn} onPress={() => toggleFavorites(product.id)}>
							{isExistsFavorite
								?
								<Text>Иконка</Text>
								:
								<Text>Иконка</Text>
							}
						</TouchableOpacity>
					</View>
					<View style={styles.priceWrapper}>
						<Text style={styles.price}>{product.price} {CURRENCIES[0].symbol}</Text>
					</View>
					<Text style={styles.description}>{product.description}</Text>
				</View>
			</ScrollView>
			<View style={styles.actions}>
				<View style={styles.actionsWrapper}>
					<TouchableOpacity style={styles.minus} onPress={() => dec()}>
						<Text>Иконка</Text>
					</TouchableOpacity>
					<Text style={styles.count}>{count}</Text>
					<TouchableOpacity style={styles.plus} onPress={() => inc()}>
						<Text>Иконка</Text>
					</TouchableOpacity>
				</View>
				<TouchableOpacity style={[styles.toBasket, {backgroundColor: countInBasket ? "#12af00" : COLORS.mainRed}]} onPress={() => basketHandler()}>
					{countInBasket ?
						(
							<>
								<Text style={styles.toBasketText}>В корзине {countInBasket} шт.</Text>
							</>
						)
						:
						(
							<Text style={styles.toBasketText}>В корзину {count * product.price} {CURRENCIES[0].symbol}</Text>
						)
					}
				</TouchableOpacity>
			</View>
		</>

	);
};

const styles = StyleSheet.create({
	main: {
		padding: 16,
		flex: 1,
		backgroundColor: "#FFFFFF",
		position: "relative"
	},
	inCart: {
		fontSize: 12,
		color: "#FFFFFF",
		marginTop: 3
	},
	imageWrapper: {
		width: "100%",
		height: 170,
		overflow: "hidden",
		borderRadius: 10,
		marginBottom: 20
	},
	image: {
		width: "100%",
		height: "100%"
	},
	title: {
		fontSize: 20,
		fontWeight: "500",
	},
	titleWrapper: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginBottom: 10
	},
	favoriteBtn: {
		paddingHorizontal: 5
	},
	priceWrapper: {
		paddingBottom: 10,
		borderBottomWidth: 1,
		borderBottomColor: "#efefef",
		borderStyle: "solid",
		marginBottom: 20
	},
	price: {
		fontSize: 24,
		fontWeight: "600"
	},
	actions: {
		position: "absolute",
		bottom: 0,
		left: 0,
		padding: 20,
		backgroundColor: "#f6f6f6",
		flexDirection: "row",
		gap: 20,
		alignItems: "stretch"
	},
	actionsWrapper: {
		backgroundColor: "rgba(255,0,0,0.14)",
		borderRadius: 6,
		flexDirection: "row",
		alignItems: "center"
	},
	minus: {
		padding: 14
	},
	plus: {
		padding: 14
	},
	count: {
		fontSize: 20,
		paddingVertical: 14,
		paddingHorizontal: 10,
		textAlign: "center",
		width: 50
	},
	toBasket: {
		backgroundColor: COLORS.mainRed,
		flex: 1,
		borderRadius: 6,
		alignItems: "center",
		justifyContent: "center",
		paddingHorizontal: 10
	},
	toBasketText: {
		fontSize: 18,
		color: "#FFFFFF"
	}
})

export default ProductDetailScreen;
