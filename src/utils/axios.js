import axios from 'axios'
import {Toast} from 'vant'
import router from '../router'
import {getLocal} from "@/common/js/utils";

axios.defaults.baseURL = process.env.NODE_ENV == 'development' ? '//127.0.0.1:8000/api_v1' : '//127.0.0.1:8000/api'
axios.defaults.withCredentials = true
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers['token'] = getLocal('token') || ''
axios.defaults.headers.post['Content-Type'] = 'application/json'

axios.interceptors.response.use(res => {
    if (typeof res.data !== 'object') {
        Toast.fail('服务端异常！')
        return Promise.reject(res)
    }
    if (res.data.resultCode != 200) {
        if (res.data.message) Toast.fail(res.data.message)
        if (res.data.resultCode == 416) {
            router.push({path: '/login'})
        }
        return Promise.reject(res.data)
    }
    return res.data
})
export default axios
