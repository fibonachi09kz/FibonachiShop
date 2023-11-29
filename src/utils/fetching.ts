import API_CONSTANTS from "../constants/API";

export const addBXElement = async (element) => {
    const response = await fetch(API_CONSTANTS.IBLOCK_ELEMENT_ADD, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(element)
    });
    return await response.json();
}

export const getBXElement = async (params) => {
    const response = await fetch(API_CONSTANTS.IBLOCK_ELEMENT_GET + '?' + new URLSearchParams(params).toString());
    return await response.json();
}

export const getBXElementList = async (params) => {
    const response = await fetch(API_CONSTANTS.IBLOCK_ELEMENT_LIST + '?' + new URLSearchParams(params).toString());
    return await response.json();
}


export const getUserByGoogle = async (token) => {
    const response = await fetch(API_CONSTANTS.USER_AUTH_BY_GOOGLE, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            token_id: token
        })
    });
    return await response.json();
}