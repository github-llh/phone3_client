import axios from '../utils/axios'

export function addAddress (params) {
  return axios.post('/addr/save/', params)
}

export function EditAddress (params) {
  return axios.put('/addr/modify/', params)
}

export function DeleteAddress (id) {
  return axios.delete(`/addr/remove/${id}`)
}

export function getDefaultAddress () {
  return axios.get('/addr/default/')
}

export function getAddressList () {
  return axios.get('/addr/list/', { pageNumber: 1, pageSize: 1000 })
}

export function getAddressDetail (id) {
  return axios.get(`/addr/detail/${id}`)
}
