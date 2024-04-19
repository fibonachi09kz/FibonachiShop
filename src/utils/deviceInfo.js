import { addBXElement } from "./fetching";
import AsyncStorage from "@react-native-async-storage/async-storage";
import messaging from "@react-native-firebase/messaging";
import DeviceInfo from "react-native-device-info";

export async function deviceInfoAction() {
  const sendInfoToServer = async (token, device) => {
    try {
      const sendDeviceInfoRequest = await addBXElement({
        iblockId: 35,
        fields: {
          NAME: "Новое устройство",
          ACTIVE: "Y",
        },
        props: {
          DEVICE_TOKEN: token,
          DEVICE_PLATFORM: device.platform,
          DEVICE_PLATFORM_VERSION: device.version,
        },
      });
      if (sendDeviceInfoRequest) {
        console.log("Регистрация устройства пройдена успешно");
        await AsyncStorage.setItem("isDeviceInfoSaved", "true");
      }
    } catch (error) {
      console.error("Произошла ошибка регистрации устройства:", error);
    }
  };

  const isDeviceInfoSaved = await AsyncStorage.getItem("isDeviceInfoSaved");

  if (!isDeviceInfoSaved) {
    await messaging().registerDeviceForRemoteMessages();
    const token = await messaging().getToken();
    const device = {
      platform: DeviceInfo.getSystemName(),
      version: DeviceInfo.getSystemVersion(),
    };
    await sendInfoToServer(token, device);
  } else {
    console.log("Регистрация устройства на сервере уже пройдена");
  }
}
