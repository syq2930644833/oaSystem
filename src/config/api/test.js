import creator from  './requestCreator'
import { methods } from  './config'

const apis = {
    CreateArticle: {
        name: 'CreateArticle',
        title: '创建文章',
        uri: 'v1/test/createArticle',
        method: methods.HTTP_POST
    },
    FindArticle: {
        name: 'FindArticle',
        title: '查找文章',
        uri: 'v1/test/findArticle',
        method: methods.HTTP_GET
    },
    FindArticleType: {
        name: 'FindArticleType',
        title: '查找文章类型',
        uri: 'v1/test/findArticleType',
        method: methods.HTTP_GET
    }
}

const APIS = creator(apis)

export default APIS