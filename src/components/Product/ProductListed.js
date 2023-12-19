import { Image, Text, TouchableOpacity, View, StyleSheet, Vibration } from "react-native";
import { CURRENCIES } from "../../constants/global";
import { useState } from "react";
import { COLORS } from "../../constants/colors";
import { useSelector } from "react-redux";
import { useActions } from "../../hooks/useActions";
import { memo } from "react";
import AntDesign from 'react-native-vector-icons/AntDesign'

const ProductListed = ({ product, pressHandler }) => {

	const price = product['MINIMUM_PRICE']['VALUE'];
	const name = product['NAME'];
	const id = product['ID'];

	const [count, setCount] = useState(1)

	const isFavorite = useSelector(state => state.favorites.includes(id));
	const { toggleFavorites } = useActions()

	const basketItem = useSelector(state => state.basket.find(item => item.id === id));
	const { addToBasket, removeFromBasket } = useActions()
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
			removeFromBasket(id);
		} else {
			addToBasket({
				id: id,
				count: count
			});
		}
	}

	return (
		<TouchableOpacity key={product.id} style={styles.productItem} activeOpacity={0.7}>
			<View style={styles.imageWrapper}>
				<Image
					source={{
						uri: product.imageUrl,
					}}
					style={styles.image}
					resizeMode="cover"
				/>
			</View>

			<View style={styles.infoWrapper}>
				<View style={styles.titleWrapper}>
					<Text style={styles.productTitle} numberOfLines={1}>{name}</Text>
					<TouchableOpacity style={styles.favoriteBtn} onPress={() => toggleFavorites(id)}>
						{isFavorite
							?
							<AntDesign name="heart" size={24} color="#d7000f" />
							:
							<AntDesign name="hearto" size={24} color="#d7000f" />
						}
					</TouchableOpacity>
				</View>

				<Text style={styles.productDescription} numberOfLines={2}>{product.description}</Text>
				<Text style={styles.productPrice}>{price} <Text>{CURRENCIES[0].symbol}</Text></Text>

				<View style={styles.actions}>
					<View style={styles.actionsWrapper}>
						<TouchableOpacity style={styles.minus} onPress={dec}>
							<AntDesign name="minus" size={24} color="#d7000f" />
						</TouchableOpacity>
						<Text style={styles.count}>{count}</Text>
						<TouchableOpacity style={styles.plus} onPress={inc}>
							<AntDesign name="plus" size={24} color="#d7000f" />
						</TouchableOpacity>
					</View>
					<TouchableOpacity activeOpacity={0.5} style={[styles.toBasket, {backgroundColor: countInBasket ? "#12af00" : COLORS.mainRed}]} onPress={() => basketHandler()}>
						{countInBasket ?
							(
								<Text style={styles.toBasketText}>В корзине {countInBasket} шт.</Text>
							)
							:
							(
								<Text style={styles.toBasketText}>В корзину {count * price} {CURRENCIES[0].symbol}</Text>
							)
						}
					</TouchableOpacity>
				</View>

			</View>



		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	productItem: {
		flex: 1,
		borderRadius: 6,
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: "#e0e0e0",
		marginBottom: 20
	},
	titleWrapper: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginBottom: 8
	},
	favoriteBtn: {
		paddingHorizontal: 5
	},
	imageWrapper: {
		height: 170,
		width: "100%",
		borderTopLeftRadius: 6,
		borderTopRightRadius: 6,
		overflow: "hidden"
	},
	image: {
		width: "100%",
		height: "100%"
	},
	infoWrapper: {
		paddingVertical: 15,
		paddingHorizontal: 10
	},
	productTitle: {
		fontWeight: "600",
		fontSize: 18,
		color: COLORS.mainText
	},
	productDescription: {
		marginBottom: 10
	},
	productPrice: {
		fontSize: 22,
		fontWeight: "600",
		marginBottom: 15
	},
	actions: {
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
		paddingHorizontal: 8,
		paddingVertical: 14
	},
	plus: {
		paddingHorizontal: 8,
		paddingVertical: 14
	},
	count: {
		fontSize: 16,
		paddingVertical: 8,
		paddingHorizontal: 6,
		textAlign: "center",
		width: 50
	},
	toBasket: {
		backgroundColor: COLORS.mainRed,
		flex: 1,
		borderRadius: 6,
		alignItems: "center",
		justifyContent: "center",
		paddingHorizontal: 10,
		paddingVertical: 5
	},
	toBasketText: {
		fontSize: 18,
		color: "#FFFFFF"
	},
	inCart: {
		fontSize: 12,
		color: "#FFFFFF",
		marginTop: 1
	}
})
export default memo(ProductListed);
