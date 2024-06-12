import axios from "../config/axios"

const orderApi = {}

orderApi.createOrder = (data) => axios.post('order/newOrder/', data)
orderApi.getUserOrder = (userId) => axios.get(`order/myOrder/${userId}`)

export default orderApi
// input = {
//     "slip": "asdiajoasdj",
//     "userId": 1,
//     "product": [
//         {
//             "productId": 4,
//             "price": 750,
//             "size": "US09"
//         },
//         {
//             "productId": 5,
//             "price": 500,
//             "size": "US09"
//         },
//         {
//             "productId": 6,
//             "price": 1000,
//             "size": "US09"
//         }
//     ]
// }


// createOrder(input).then(res => console.log(res)).catch(err => console.log(err))