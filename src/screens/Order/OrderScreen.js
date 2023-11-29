import {ScrollView, Text, TouchableOpacity, View, StyleSheet, Image} from "react-native";
import {CURRENCIES} from "../../constants/global";
import { useEffect, useState} from "react";
import {COLORS} from "../../constants/colors";
import {getProductById} from "../../utils/products";
import {useSelector} from "react-redux";


const OrderScreen = ({ navigation }) => {
	
	const basket = useSelector(state => state.basket)

	const [sum, setSum] = useState(0)

	useEffect(() => {
		setSum((prevSum) => {
			let tempSum = 0;
			basket.forEach(({ id, count }) => {
				const product = getProductById(id);
				if (product) {
					tempSum += product.price * count;
				}
			});
			return tempSum;
		});
	}, [basket])



	return (

		<ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
			<View style={styles.fixing}>
				<Text style={styles.title}>Оформление заказа</Text>



				<View style={styles.delivery}>
					<Text style={styles.deliveryTitle}>Доставка</Text>
					<TouchableOpacity style={styles.deliveryBody} activeOpacity={0.7}>
						<Text>Иконка</Text>
						<View style={styles.deliveryPointBody}>
							<Text style={styles.deliveryPointName}>Home</Text>
							<Text style={styles.deliveryPointDetail}>4140 Parker Rd. Allentown, New Mexico 31134</Text>
						</View>
						<Text>Иконка</Text>
					</TouchableOpacity>
				</View>

				<View style={styles.pay}>
					<Text style={styles.payTitle}>Метод оплаты</Text>
					<TouchableOpacity style={styles.payBody} activeOpacity={0.7}>
						<View style={styles.payLogo}>
							<Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/800px-Mastercard_2019_logo.svg.png'}} resizeMode="contain" style={styles.payLogoImage} />
						</View>
						<View style={styles.payInfo}>
							<Text style={styles.payInfoValue}>8569 **** **** 1240</Text>
						</View>
						<Text>Иконка</Text>
					</TouchableOpacity>
				</View>

				<View style={styles.products}>
					<Text style={styles.productsTitle}>Ваш заказ</Text>
					<View style={styles.productsList}>
						{basket.length && basket.map(({ id, count }, index) => {
							const product = getProductById(id)
							if (product) {
								return (
									<View key={product.id} style={[styles.product, {borderBottomWidth: index === basket.length - 1 ? 0 : 1}]}>
										<View style={styles.imageWrapper}>
											<Image source={{uri: product.imageUrl}} style={styles.image} resizeMode="cover" />
										</View>
										<View style={styles.productBody}>
											<Text style={styles.productTitle} numberOfLines={1}>{product.title}</Text>
											<Text style={styles.productCount} numberOfLines={1}>Кол-во: {count}</Text>
										</View>
									</View>
								)
							}
						})}
					</View>
				</View>

				<View style={styles.status}>
					<View style={styles.statusLine}>
						<Text style={styles.statusLabel}>Время доставки:</Text>
						<Text style={styles.statusValue}>40 мин</Text>
					</View>
					<View style={styles.statusLine}>
						<Text style={styles.statusLabel}>Доставка:</Text>
						<Text style={styles.statusValue}>1000 {CURRENCIES[0].symbol}</Text>
					</View>
					<View style={styles.statusLine}>
						<Text style={styles.statusLabel}>Сумма заказа:</Text>
						<Text style={styles.statusValue}>{sum} {CURRENCIES[0].symbol}</Text>
					</View>
					<View style={styles.statusLine}>
						<Text style={styles.statusLabel}>Скидка по промокоду:</Text>
						<Text style={styles.statusValue}>-4000 {CURRENCIES[0].symbol}</Text>
					</View>
					<View style={styles.statusLineTotal}>
						<Text style={styles.statusLabelTotal}>Итого:</Text>
						<Text style={styles.statusValueTotal}>{sum} {CURRENCIES[0].symbol}</Text>
					</View>

				</View>

				<TouchableOpacity activeOpacity={0.7} style={styles.orderContainer}>
					<Text style={styles.orderText}>Заказать</Text>
				</TouchableOpacity>

			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	fixing: {
		marginBottom: 50
	},
	orderContainer: {
		borderRadius: 6,
		backgroundColor: COLORS.mainRed,
		marginBottom: 70,
		paddingVertical: 12,
		paddingHorizontal: 20
	},
	orderText: {
		fontSize: 20,
		color: "#FFFFFF",
		fontWeight: "500",
		textAlign: "center"
	},
	main: {
		paddingHorizontal: 16,
		paddingVertical: 32,
		flex: 1,
		backgroundColor: "#FFFFFF"
	},
	title: {
		fontSize: 24,
		fontWeight: "500",
		marginBottom: 20
	},
	products: {
		marginBottom: 20
	},
	delivery: {
		marginBottom: 20
	},
	productsTitle: {
		fontSize: 16,
		marginBottom: 10,
		fontWeight: "500"
	},
	mainCon: {
		flexDirection: "row",
		gap: 10
	},
	product: {
		flexDirection: "row",
		gap: 3,
		padding: 10,
		alignItems: "center",
		borderColor: "#eaeaea",
		borderBottomWidth: 1
	},
	productsList: {
		borderWidth: 1,
		borderColor: "#eaeaea",
		borderRadius: 6
	},
	imageWrapper: {
		width: 70,
		height: 45,
		borderRadius: 6,
		overflow: "hidden"
	},
	image: {
		width: "100%",
		height: "100%"
	},
	productBody: {
		paddingHorizontal: 10
	},
	productTitle: {
		fontSize: 16,
		fontWeight: "500",
		marginBottom: 3
	},
	productCount: {
		fontSize: 14
	},
	deliveryTitle: {
		fontSize: 16,
		marginBottom: 10,
		fontWeight: "500"
	},
	deliveryBody: {
		flexDirection: "row",
		gap: 10,
		padding: 10,
		borderWidth: 1,
		borderRadius: 6,
		borderColor: "#eaeaea"
	},
	deliveryPointBody: {
		flex: 1
	},
	deliveryPointName: {
		fontSize: 16,
		fontWeight: "500"
	},
	deliveryPointDetail: {
		fontSize: 14,
		color: "#646464"
	},
	pay: {
		marginBottom: 20
	},
	payTitle: {
		fontSize: 16,
		marginBottom: 10,
		fontWeight: "500"
	},
	payBody: {
		flexDirection: "row",
		gap: 10,
		padding: 10,
		borderWidth: 1,
		borderRadius: 6,
		borderColor: "#eaeaea",
		alignItems: "center"
	},
	payLogo: {
		backgroundColor: "#eeeeee",
		padding: 5,
		width: 40,
		height: 40,
		borderRadius: 6
	},
	payLogoImage: {
		width: "100%",
		height: "100%"
	},
	payInfo: {
		flex: 1
	},
	payInfoValue: {
		fontSize: 16,
		fontWeight: "500",
		color: "#3d3d3d"
	},
	status: {
		padding: 10,
		borderWidth: 1,
		borderRadius: 6,
		borderColor: "#eaeaea",
		marginBottom: 20
	},
	statusLine: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 10
	},
	statusLineTotal: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 10,
		marginTop: 20
	},
	statusLabel: {
		fontSize: 16
	},
	statusLabelTotal: {
		fontSize: 18
	},
	statusValue: {
		fontSize: 16,
		fontWeight: "500"
	},
	statusValueTotal: {
		fontSize: 18,
		fontWeight: "500"
	}
})

export default OrderScreen;
