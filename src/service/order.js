import axios from '../utils/axios'

export function createOrder (params) {
  return axios.post('/order/save/', params)
}

export function getOrderList (params) {
  return axios.get('/order/list/', { params })
}

export function getOrderDetail (id) {
  return axios.get(`/order/detail/${id}`)
}

export function cancelOrder (id) {
  return axios.put(`/order/${id}/cancel/`)
}

export function confirmOrder (id) {
  return axios.put(`/order/${id}/finis/`)
}

export function payOrder (params) {
  return axios.get('/order/paysuccess/', { params })
}
