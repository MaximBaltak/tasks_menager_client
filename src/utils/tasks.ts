import {AppDispatch} from "../store/store";
import {
    addTask,
    addTaskAsync,
    deleteTaskAsyncId,
    deleteTaskId,
    deleteTasks,
    deleteTasksAsync,
    updateTask,
    updateTaskAsync
} from "../store/slices/tasks-slice/tasks-slice";
export interface IAdd{
    (dispatch:AppDispatch):void
}
export interface IUpdate{
    (id:string,dispatch:AppDispatch):void
}
export interface IDeleteAll{
    (dispatch:AppDispatch):void
}
export interface IDeleteId{
    (id:string,dispatch:AppDispatch):void
}
export const add:IAdd=(dispatch)=>{
    dispatch(addTask())
    dispatch(addTaskAsync())
}
export const update:IUpdate=(id,dispatch)=>{
    dispatch(updateTask(id))
    dispatch(updateTaskAsync(id))
}
export const deleteAll:IDeleteAll=(dispatch)=>{
    dispatch(deleteTasks())
    dispatch(deleteTasksAsync())
}
export const deleteId:IDeleteId=(id,dispatch)=>{
    dispatch(deleteTaskId(id))
    dispatch(deleteTaskAsyncId(id))
}