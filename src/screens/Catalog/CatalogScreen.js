import { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import CatalogCategories from "../../components/Catalog/CatalogCategories";
import { getBXElementList, getBXSectionList } from "../../utils/fetching";
import CatalogProducts from "../../components/Catalog/CatalogProducts";
import { LoaderScreen } from "react-native-ui-lib";

const CatalogScreen = ({navigation}) => {
	const [categories, setCategories] = useState([]);
	const [products, setProducts] = useState([]);
	const [tempProducts, setTempProducts] = useState(products)
	const [loading, setLoading] = useState(true);

	function setProductsByCategory(categoryID) {
		setTempProducts(products.filter(prod => prod['IBLOCK_SECTION_ID'] === Number(categoryID)))
	}

	useEffect(() => {
		async function getCategories() {
			const data = await getBXSectionList({
				iblockId: 26
			})
			if (data.result.length) {
				setCategories(data.result)
				setLoading(false)
			}
		}
		async function getProducts() {
			const data = await getBXElementList({
				iblockId: 26
			})
			if (data.result.elements.length) {
				setProducts(data.result.elements)
				setTempProducts(data.result.elements)
				setLoading(false)
			}
		}
		getCategories()
		getProducts()

	}, [])

	return (
		<ScrollView>
			{loading ? <LoaderScreen message={'Загрузка категорий, пожалуйста подождите...'} loaderColor={'#777'}/> : (
				<>
					<View style={styles.catalogCategories}>
						{categories.length ? <CatalogCategories categories={categories} pressHandler={setProductsByCategory} /> : null}

					</View>
					<View style={styles.catalogProducts}>
						{tempProducts.length ? <CatalogProducts products={tempProducts} /> : null}
					</View>
				</>
			)}

		</ScrollView>

	)

}

const styles = StyleSheet.create({
	catalogContainer: {
		flex: 1
	},
	catalogCategories: {
		marginTop: 10,
		paddingHorizontal: 10
	},
	catalogProducts: {
		marginTop: 10
	}
})

export default CatalogScreen;
