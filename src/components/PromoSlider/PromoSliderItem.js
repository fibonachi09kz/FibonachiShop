import {View, StyleSheet, Image, useWindowDimensions} from "react-native";


const PromoSliderItem = ({ item }) => {

	const { width } = useWindowDimensions()

	return (
		<View style={[styles.container, { width }]}>
			<Image source={{uri: item.imageUrl}} style={[styles.image, { width, resizeMode: "cover" }]} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		height: 200
	},
	image: {
		width: "100%",
		height: "100%"
	}
})

export default PromoSliderItem;