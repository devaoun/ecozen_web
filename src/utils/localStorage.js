const ACCESS_TOKEN = 'ACCESS_TOKEN';
const SELECT_PRODUCT_ID = 'SELECT_PRODUCT_ID'

export const setAccessToken = (token) => localStorage.setItem(ACCESS_TOKEN,token);
export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN);
export const removeAccessToken = () => localStorage.removeItem(ACCESS_TOKEN);

export const setSelectedProduct = (productId) => localStorage.setItem(SELECT_PRODUCT_ID,productId)
export const getSelectedProduct = () => localStorage.getItem(SELECT_PRODUCT_ID)
export const removeSelectedProduct = () => localStorage.removeItem(SELECT_PRODUCT_ID)
