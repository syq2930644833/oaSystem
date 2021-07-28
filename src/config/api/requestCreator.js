import request from './request'

const creator = (APIS)=>{
    const funs = {}
    Object.keys(APIS).forEach(key => {
        const Api = APIS[key]
        funs[Api.lodname || key] = (params = {}, config = {}) => {
            return request(Api.method, Api.uri, params, config)
        }
    })
    return funs
}
export default creator