import creator from  './requestCreator'
import { methods } from  './config'

const apis = {
    upload: {
        name: 'upload',
        title: '图片上传',
        uri: 'v1/test/upload',
        method: methods.HTTP_POST
    }
}

const APIS = creator(apis)

export default APIS