import router from './router'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth'
NProgress.configure({ showSpinner: false }) // NProgress Configuration

router.beforeEach((to, from, next) => {
      // start progress bar
    NProgress.start()

      // set page title
   document.title = to.meta.title || 'backStage'

   const token = getToken()
   console.log('token: ', token)
//    const tokenTwo = JSON.parse(sessionStorage.getItem('store'))
//    console.log('tokenTwo: ', tokenTwo)
    if(token){
       /* has token */
        if (to.path === '/login') {
            // if is logged in, redirect to the home page
            next()
            NProgress.done() // hack: https://github.com/PanJiaChen/vue-element-admin/pull/2939
        }else{
            // TODO 这里需要做一些权限,暂时不写
            next()
        }
    }else{
        console.log(to.path)
        /* has no token */
        if(to.path == '/' || to.path == '/homePage'){
           // in the free login whitelist, go directly
           next({path: '/login'})
        }else if(to.path == '/login'){
            next()
        }else{
            next(`/login?redirect=${to.path}`)
            NProgress.done()
        }
    }
})

router.afterEach(() => {
    // finish progress bar
    NProgress.done()
})