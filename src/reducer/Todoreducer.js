const defaultState=[]

export default (state=defaultState,action)=>{
    switch(action.type){
      case 'ADD_TODO':
        return{
            ...state,
            todos:[...state.todos,action.payload],
         };
         case 'DELETE_TODO':
             return{
                 ...state,
                 todos:state.todos.filter((todo)=>todo.id!==action.payload)
              };
         default :
        return state;
    }
 }

 