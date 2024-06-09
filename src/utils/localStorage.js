const ACCESS_TOKEN = 'ACCESS_TOKEN';
const SELECT_PRODUCT_NAME = 'SELECT_PRODUCT_NAME'

export const setAccessToken = (token) => localStorage.setItem(ACCESS_TOKEN,token);
export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN);
export const removeAccessToken = () => localStorage.removeItem(ACCESS_TOKEN);

export const setSelectedProduct = (productName) => localStorage.setItem(SELECT_PRODUCT_NAME,productName)
export const getSelectedProduct = () => localStorage.getItem(SELECT_PRODUCT_NAME)
export const removeSelectedProduct = () => localStorage.removeItem(SELECT_PRODUCT_NAME)
