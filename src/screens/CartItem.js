import { memo } from "react";
import { Swipeable } from "react-native-gesture-handler";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CURRENCIES } from "../constants/global";
import Animated from "react-native-reanimated";
import { COLORS } from "../constants/colors";

const CartItem = ({ product, count, editProductCount, removeItem }) => {
  const inc = () => {
    if (count !== 99) {
      editProductCount({
        id: product.id,
        count: count + 1,
      });
    }
  };
  const dec = () => {
    if (count !== 1 && count > 1) {
      editProductCount({
        id: product.id,
        count: count - 1,
      });
    }
  };

  return (
    <Swipeable
      renderRightActions={() => (
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => removeItem(product.id)}
        >
          <Animated.Text style={styles.deleteButtonText}>
            <Text>Иконка</Text>
          </Animated.Text>
        </TouchableOpacity>
      )}
    >
      <TouchableOpacity style={styles.productItem} activeOpacity={1}>
        <View style={styles.imageWrapper}>
          <Image
            source={{ uri: product.imageUrl }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>

        <View style={styles.infoWrapper}>
          <Text style={styles.productTitle} numberOfLines={1}>
            {product.title}
          </Text>
          <Text style={styles.productDescription} numberOfLines={2}>
            {product.description}
          </Text>

          <View style={styles.itemActions}>
            <View>
              <Text style={styles.productPrice}>
                {product.price} {CURRENCIES[0].symbol}
              </Text>
              <Text style={styles.productCount}>Кол-во: {count}</Text>
            </View>
            <View style={styles.actions}>
              <View style={styles.actionsWrapper}>
                <TouchableOpacity style={styles.minus} onPress={dec}>
                  <Text>Иконка</Text>
                </TouchableOpacity>
                <Text style={styles.count}>{count}</Text>
                <TouchableOpacity style={styles.plus} onPress={inc}>
                  <Text>Иконка</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  deleteButton: {
    backgroundColor: "rgba(255,0,0,0.16)",
    justifyContent: "center",
    alignItems: "flex-end",
    marginLeft: 20,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: COLORS.mainRed,
  },
  deleteButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    padding: 20,
  },
  main: {
    paddingHorizontal: 16,
    paddingVertical: 32,
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 12,
  },
  productItem: {
    flex: 1,
    borderRadius: 6,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#e0e0e0",
    backgroundColor: "#FFFFFF",
  },
  imageWrapper: {
    height: 120,
    width: "100%",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  infoWrapper: {
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  productTitle: {
    fontWeight: "600",
    fontSize: 16,
    marginBottom: 8,
  },
  productDescription: {
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 3,
  },
  productCount: {
    fontSize: 16,
  },
  actions: {
    padding: 5,
    flexDirection: "row",
    gap: 20,
    alignItems: "stretch",
  },
  actionsWrapper: {
    backgroundColor: "rgba(255,0,0,0.14)",
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
  },
  minus: {
    padding: 14,
  },
  plus: {
    padding: 14,
  },
  count: {
    fontSize: 20,
    paddingVertical: 14,
    paddingHorizontal: 10,
    textAlign: "center",
    width: 50,
  },
  itemActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default memo(CartItem);
