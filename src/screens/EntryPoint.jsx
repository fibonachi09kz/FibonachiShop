import { StatusBar, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigation from "../navigation/DrawerNavigation";
import { useActions } from "../hooks/useActions";
import { useEffect } from "react";
import { deviceInfoAction } from "../utils/deviceInfo";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { api, useGetProductsQuery } from "../store/api/api";
import { objectToQueryString } from "../functions/objectToQueryString";

const EntryPoint = () => {
  useGetProductsQuery(
    objectToQueryString({
      iblockId: 26,
      select: [
        'DETAIL_PICTURE',
        'IBLOCK_SECTION_ID',
        'NAME',
        'MINIMUM_PRICE',
        'MAXIMUM_PRICE',
      ],
    })
  );

  const { loginUser } = useActions();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const restoreUser = async () => {
      const authToken = await AsyncStorage.getItem('authToken');
      if (authToken && !user.isAuthenticated) {
        console.log(authToken);
      }
    };
    restoreUser();
    deviceInfoAction();
  }, []);

  return (
    <>
      <StatusBar />

      <View style={{ flex: 1 }}>
        <NavigationContainer>
          <DrawerNavigation />
        </NavigationContainer>
      </View>
    </>
  );
};
export default EntryPoint;
