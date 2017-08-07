import * as Types from './mutation-types'

const mutations={
  [Types.ADD_COLLECT](state,obj){
    let flag = state.collect.some(item=>item.id===obj.id);
    !flag && state.collect.push(obj);
    localStorage.setItem('collects',JSON.stringify(state.collect))
  },
  [Types.REMOVE_COLLECT](state,id){
    state.collect=state.collect.filter(item=>item.id!==id);
    localStorage.setItem('collects',JSON.stringify(state.collect))
  }
};
export default mutations;
