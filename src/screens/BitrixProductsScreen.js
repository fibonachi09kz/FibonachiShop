import { useEffect, useLayoutEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import API_CONSTANTS from "../constants/API";

const BitrixProductsScreen = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      let response = await fetch(
        `${API_CONSTANTS.IBLOCK_ELEMENT_LIST}?iblockId=26&select[]=ID&select[]=NAME&select[]=DETAIL_PICTURE&select[]=DETAIL_TEXT`
      );
      let productsData = await response.json();

      setProducts(productsData.result.elements);
      setIsLoading(false);
    }
    fetchProducts();
  }, []);

  return (
    <ScrollView style={styles.main}>
      <Text style={styles.title}>Продукты с битрикса</Text>
      {isLoading ? (
        <Text>Загрузка...</Text>
      ) : isError ? (
        <Text>Произошла ошибка</Text>
      ) : products.length ? (
        <View style={styles.items}>
          {products.map((item) => (
            <View key={item.ID}>
              {/*<View style={styles.imageWrapper}>*/}
              {/*	<Image*/}
              {/*		source={{*/}
              {/*			uri: product.imageUrl,*/}
              {/*		}}*/}
              {/*		style={styles.image}*/}
              {/*		resizeMode="cover"*/}
              {/*	/>*/}
              {/*</View>*/}
              <Text style={styles.itemName}>{item.NAME}</Text>
              <Text style={styles.itemDetailText}>{item.DETAIL_TEXT}</Text>
            </View>
          ))}
        </View>
      ) : (
        <Text>Продуктов нет</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 16,
    paddingVertical: 32,
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  items: {
    paddingBottom: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 12,
  },
  itemName: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 12,
  },
  itemDetailText: {
    fontSize: 14,
    fontWeight: "400",
  },
  imageWrapper: {
    height: 170,
    width: "100%",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default BitrixProductsScreen;
