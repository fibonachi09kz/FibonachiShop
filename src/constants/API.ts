const SECRET_KEY_WEBHOOK: string = '2cai43fhy9monf09';
const BASE_URL: string = 'https://docs.siter.com.kz';

type apiConstantsType = {
	IBLOCK_ELEMENT_LIST: string,
	IBLOCK_ELEMENT_GET: string,
	IBLOCK_ELEMENT_ADD: string,
	USER_AUTH: string,
	USER_REGISTRATION: string
	USER_AUTH_BY_GOOGLE: string
}

const API_CONSTANTS: apiConstantsType = {
	IBLOCK_ELEMENT_LIST: `${BASE_URL}/rest/1/${SECRET_KEY_WEBHOOK}/iblock.Element.list`,
	IBLOCK_ELEMENT_GET: `${BASE_URL}/rest/1/${SECRET_KEY_WEBHOOK}/iblock.Element.get`,
	IBLOCK_ELEMENT_ADD: `${BASE_URL}/rest/1/${SECRET_KEY_WEBHOOK}/ib.elem.add`,
	USER_AUTH: `${BASE_URL}/rest/1/${SECRET_KEY_WEBHOOK}/user.auth`,
	USER_REGISTRATION: `${BASE_URL}/rest/1/${SECRET_KEY_WEBHOOK}/user.registration`,
	USER_AUTH_BY_GOOGLE: `${BASE_URL}/rest/1/${SECRET_KEY_WEBHOOK}/user.oauth2`
}

export default API_CONSTANTS;