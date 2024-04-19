import API_CONSTANTS from "../constants/API";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const addBXElement = async (element) => {
  const response = await fetch(API_CONSTANTS.IBLOCK_ELEMENT_ADD, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(element),
  });
  return await response.json();
};

export const getBXElement = async (params) => {
  const response = await fetch(
    API_CONSTANTS.IBLOCK_ELEMENT_GET +
      "?" +
      new URLSearchParams(params).toString()
  );
  return await response.json();
};

export const getBXElementList = async (params) => {
  const response = await fetch(
    API_CONSTANTS.IBLOCK_ELEMENT_LIST +
      "?" +
      new URLSearchParams(params).toString()
  );
  return await response.json();
};

export const getBXSectionList = async (params) => {
  const response = await fetch(
    API_CONSTANTS.IBLOCK_SECTION_LIST +
      "?" +
      new URLSearchParams(params).toString()
  );
  return await response.json();
};

export const getUserByGoogle = async (token: string) => {
  const response = await fetch(API_CONSTANTS.USER_AUTH_BY_GOOGLE, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token_id: token,
    }),
  });
  return await response.json();
};

export const getUserProfileInfo = async (params: {
  userId: string;
  tk: string;
}) => {
  const response = await fetch(
    API_CONSTANTS.USER_PROFILE_INFO +
      "?" +
      new URLSearchParams(params).toString()
  );
  console.log(
    API_CONSTANTS.USER_PROFILE_INFO +
      "?" +
      new URLSearchParams(params).toString()
  );
  return await response.json();
};
