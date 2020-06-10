export const addTodoAction = (todo)=>({
    type:'ADD_TODO',
    payload:todo
})

export const deleteTodoAction = todoid=>({
    type:'DELETE_TODO',
    payload:todoid
})  