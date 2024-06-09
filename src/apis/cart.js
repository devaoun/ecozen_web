import axios from "../config/axios"

const cartApi = {}

cartApi.createCartItem = (data) => axios.post('cart/item',data)
cartApi.getCartItemByUserId = (userId) => axios.get(`cart/item/get/${userId}`)
cartApi.deleteCartItemByCartId = (cartId) => axios.delete(`cart/item/delete/${cartId}`)

export default cartApi