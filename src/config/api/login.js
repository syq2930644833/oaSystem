import creator from  './requestCreator'
import { methods } from  './config'

const apis = {
    login: {
        name: 'login',
        title: '登录',
        uri: 'v1/user/login',
        method: methods.HTTP_POST
    }
}

const APIS = creator(apis)

export default APIS