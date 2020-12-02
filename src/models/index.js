import request from '../utils/request.js';
let index = {
    namespace:'index',
    state:{ num:0 },
    effects:{
        // 异步action
        *changeNum({payload},{select,put,call }) {   //{payload:{num:5}}
            
            let res = yield call(request('teachers/search'));
            console.log(res);
            // 一会发一个请求
            console.log('changeNum')
            yield put({ type:'addNum',payload })
        }
        
    },
    reducers:{
        addNum(state,{payload}) {
            return {  // 返回一个新值,值不可变性
                num: state.num + payload.num
            }
        }
    }
}





export default index;