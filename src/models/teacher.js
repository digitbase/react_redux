import request from '../utils/request.js';
import { routerRedux } from 'dva/router';
let teacher = {
    namespace:'teacher',
    state:{ 
        isLogin:false
    },
    effects:{
        // 异步action
        *doLogin({payload},{select,put,call }) {   
            
            let res = yield call(request('/signin',{
                method:'post',
                data:payload, // {username,password}
            }));
           
           if(res.data.errcode != 0) {
                return alert('用户名或密码不正确!');
           }
            // 本地的seesion存储 localStorage
            window.sessionStorage.setItem('user',JSON.stringify(res.data.user));

            // 更改登录状态
            yield put({type:'changeLogin',payload:{ isLogin:true } });
            // 跳转页面
            yield put(routerRedux.push('/home/list'))
        }
        
    },
    reducers:{
            changeLogin(state,{payload}) {
                return {
                    isLogin : payload.isLogin
                }
            }
    }
}





export default teacher;