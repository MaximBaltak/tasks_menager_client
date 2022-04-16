import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ITask,ITasksState} from "./types";

export const getTasksAsync =createAsyncThunk(
    'tasks/getTasksAsync',
    async ()=>{
        return 'test'
    }
)
export const addTaskAsync =createAsyncThunk(
'task/addTaskAsync',
async ()=>{
    return 'test'
}
)
export const updateTaskAsync =createAsyncThunk(
    'task/updateTaskAsync',
    async (id:string)=>{
        return 'test'
    }
)
export const deleteTasksAsync =createAsyncThunk(
    'task/deleteTasksAsync',
    async ()=>{
        return 'test'
    }
)
export const deleteTaskAsyncId =createAsyncThunk(
    'task/deleteTaskAsyncId',
    async (taskId:string)=>{
        return 'test'
    }
)
const initialState:ITasksState={
    titleInput:'',
    tasks:[],
    isRequestTasks:false
}
const tasksSlice=createSlice({
    name:'tasks',
    initialState,
    reducers:{
       changeTitleTask:(state,action:PayloadAction<string>)=>{
           state.titleInput=action.payload
       },
        addTask:(state)=>{
           if(state.titleInput){
               const task:ITask={
                   id:Math.floor(Math.random()*100).toString(),
                   title:state.titleInput,
                   done:false
               }
               state.tasks.unshift(task)
           }
           state.titleInput=''
        },
        updateTask:(state,action:PayloadAction<string>)=>{
           state.tasks.forEach(task=>{
               if(task.id===action.payload){
                   task.done=!task.done
               }
           })
        },
        deleteTasks:(state)=>{
           state.tasks=[]
        },
        deleteTaskId:(state,action:PayloadAction<string>)=>{
            state.tasks.forEach((task,i)=>{
                if(task.id===action.payload){
                    state.tasks.splice(i,1)
                }
            })
        }
    },
    extraReducers:{

    }
})
export const {changeTitleTask,addTask,
    updateTask,deleteTasks,deleteTaskId}=tasksSlice.actions
export default tasksSlice