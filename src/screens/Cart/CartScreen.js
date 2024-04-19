import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  Vibration,
} from "react-native";
import { CURRENCIES } from "../../constants/global";
import { useCallback, useEffect, useState } from "react";
import { COLORS } from "../../constants/colors";
import { useNavigation } from "@react-navigation/native";
import { useSelector, shallowEqual } from "react-redux";
import { getProductById } from "../../utils/products";
import { useActions } from "../../hooks/useActions";
import CartItem from "../CartItem";

const CartScreen = () => {
  const [sum, setSum] = useState(0);
  const navigation = useNavigation();
  const basket = useSelector((state) => state.basket, shallowEqual);
  const { removeFromBasket, editProductCount } = useActions();

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
  }, [basket]);

  const removeItem = useCallback(
      (id) => {
        removeFromBasket(id);
        Vibration.vibrate();
      },
      [removeFromBasket]
  );

  if (basket.length) {
    return (
        <ScrollView style={styles.main}>
          <View>
            <Text style={styles.title}>Корзина</Text>
            {basket.map(({ id, count }) => {
              const product = getProductById(id);
              if (product) {
                return (
                    <View key={product.id} style={styles.mainCon}>
                      <CartItem
                          product={product}
                          count={count}
                          editProductCount={editProductCount}
                          removeItem={removeItem}
                      />
                    </View>
                );
              }
            })}
            <View style={styles.cartBottom}>
              <View style={styles.delivery}>
                <Text style={styles.deliveryLabel}>Доставка:</Text>
                <Text style={styles.deliveryValue}>Бесплатно</Text>
              </View>
              <View style={styles.sale}>
                <Text style={styles.saleLabel}>Скидка по купону:</Text>
                <Text style={styles.saleValue}>-1000 {CURRENCIES[0].symbol}</Text>
              </View>
              <View style={styles.sum}>
                <Text style={styles.sumLabel}>Итого:</Text>
                <Text style={styles.sumValue}>
                  {sum} {CURRENCIES[0].symbol}
                </Text>
              </View>
            </View>

            <TouchableOpacity
                style={styles.orderContainer}
                activeOpacity={0.7}
                onPress={() => navigation.navigate("OrderScreen")}
            >
              <Text style={styles.orderText}>Оформить заказ</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
    );
  } else {
    return (
        <View style={styles.cartEmpty}>
          <Text style={styles.cartEmptyText}>Товаров нет</Text>
          <TouchableOpacity
              style={styles.cartEmptyBtn}
              onPress={() => navigation.navigate("HomeStack")}
          >
            <Text style={styles.cartEmptyBtnText}>Перейти к покупкам</Text>
          </TouchableOpacity>
        </View>
    );
  }
};

const styles = StyleSheet.create({
  orderContainer: {
    borderRadius: 6,
    backgroundColor: COLORS.mainRed,
    marginBottom: 70,
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  orderText: {
    fontSize: 20,
    color: "#FFFFFF",
    fontWeight: "500",
    textAlign: "center",
  },
  mainCon: {
    marginBottom: 20,
  },
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
  cartBottom: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: "#FFFFFF",
    marginBottom: 20,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  cartCoupon: {
    fontSize: 18,
    fontWeight: "400",
    marginBottom: 10,
  },
  cartSum: {
    fontSize: 20,
    fontWeight: "600",
  },
  cartEmpty: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    paddingVertical: 16,
  },
  cartEmptyText: {
    fontSize: 24,
    fontWeight: "500",
    textAlign: "center",
  },
  cartEmptyBtn: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: COLORS.mainRed,
    borderRadius: 6,
    marginTop: 20,
  },
  cartEmptyBtnText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "500",
  },
  delivery: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  deliveryLabel: {
    fontSize: 18,
  },
  deliveryValue: {
    fontSize: 18,
    color: "green",
  },
  sale: {
    marginBottom: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  saleLabel: {
    fontSize: 18,
  },
  saleValue: {
    fontSize: 18,
  },
  sum: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sumLabel: {
    fontSize: 22,
    fontWeight: "500",
  },
  sumValue: {
    fontSize: 22,
    fontWeight: "500",
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

export default CartScreen;
