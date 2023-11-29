import { useState, useRef } from "react";
import {View, StyleSheet, FlatList, Animated} from "react-native";
import {SLIDES} from "../../data/promoSlides";
import PromoSliderItem from "./PromoSliderItem";
import {COLORS} from "../../constants/colors";


const PromoSlider = () => {
	const [imgActive, setImgActive] = useState(0)

	const onChange = (nativeEvent) => {
		if (nativeEvent) {
			const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
			if (slide !== imgActive) {
				setImgActive(slide)
			}
		}
	}

	return (
		<View style={styles.container}>
			<FlatList
				data={SLIDES}
				renderItem={({ item } ) => <PromoSliderItem item={item} />}
				horizontal
				showsHorizontalScrollIndicator={false}
				pagingEnabled
				bounces={false}
				keyExtractor={(item) => item.id}
				onScroll={({ nativeEvent }) => onChange(nativeEvent)}
			/>
			<View style={styles.dots}>
				{SLIDES.map((item, index) => (
					<View key={item.id} style={[styles.dot, {backgroundColor: imgActive === index ? COLORS.mainRed : "#FFFFFF"}]}></View>
				))}
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		position: "relative"
	},
	dots: {
		position: "absolute",
		bottom: 20,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: 10,
		width: "100%"
	},
	dot: {
		width: 10,
		height: 10,
		borderRadius: 9999,
	}
})

export default PromoSlider;