import axios from '../utils/axios'

export function addCart (params) {
  return axios.post('/cart/save/', params)
}

export function modifyCart(params) {
  return axios.put('/cart/modify/', params);
}

export function getCart (params) {
  return axios.get('/cart/list/', { params })
}

export function deleteCartItem (id) {
  return axios.delete(`/cart/remove/${id}`)
}

export function getByCartItemIds (params) {
  return axios.get('/cart/settle/', { params })
}
