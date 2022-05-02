import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import TasksRequests from './../../../api/requests/tasks/tasks'
import {ITask,ITasksState} from "./types";
import {IAddTaskBody, IUpdateTaskBody} from "../../../api/requests/tasks/types";
import {RootState} from "../../store";

export const getTasksAsync =createAsyncThunk(
    'tasks/getTasksAsync',
    async (_,{rejectWithValue})=>{
        try {
            const {data}= await TasksRequests.getTasks()
            return data
        }catch (e){
            return rejectWithValue(e)
        }
    }
)
export const addTaskAsync =createAsyncThunk(
'task/addTaskAsync',
async (_,{rejectWithValue,getState})=>{
    const state:ITasksState=(getState() as RootState).tasks
    try {
        console.log(state)
        if(state.titleInput){
            const body:IAddTaskBody={
                title: state.titleInput,
                done:false
            }
            const {data}= await TasksRequests.addTask(body)
            return data
        }
    }catch (e){
        return rejectWithValue(e)
    }
}
)
export const updateTaskAsync =createAsyncThunk(
    'task/updateTaskAsync',
    async (id:number,{rejectWithValue})=>{
        try {
            const body:IUpdateTaskBody= {
                id,
                done:true
            }
            const {data}= await TasksRequests.updateTask(body)
            return data

        }catch (e){
            return rejectWithValue(e)
        }
    }
)
export const deleteTasksAsync =createAsyncThunk(
    'task/deleteTasksAsync',
    async (_,{rejectWithValue})=>{
        try {
            const {data}= await TasksRequests.deleteTaskOrTasks()
            return data

        }catch (e){
           return rejectWithValue(e)
        }
    }
)
export const deleteTaskAsyncId =createAsyncThunk(
    'task/deleteTaskAsyncId',
    async (taskId:number,{rejectWithValue})=>{
        try {
            const {data}= await TasksRequests.deleteTaskOrTasks(taskId)
            return data

        }catch (e){
           return rejectWithValue(e)
        }
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
                   id:Math.random()*10000.87987,
                   title:state.titleInput,
                   done:false
               }
               state.tasks.unshift(task)
           }
        },
        updateTask:(state,action:PayloadAction<number>)=>{
           state.tasks.forEach(task=>{
               if(task.id===action.payload){
                   task.done=!task.done
               }
           })
        },
        deleteTasks:(state)=>{
           state.tasks=[]
        },
        deleteTaskId:(state,action:PayloadAction<number>)=>{
            state.tasks.forEach((task,i)=>{
                if(task.id===action.payload){
                    state.tasks.splice(i,1)
                }
            })
        }
    },
    extraReducers:{
        [getTasksAsync.fulfilled.type]:(state,action:PayloadAction<ITask[]>)=>{
            state.tasks=[...action.payload]
            state.tasks.reverse()
            state.isRequestTasks=false
},
        [addTaskAsync.fulfilled.type]:state=>{
            state.titleInput=''
        }
    }
})
export const {changeTitleTask,addTask,
    updateTask,deleteTasks,deleteTaskId}=tasksSlice.actions
export default tasksSlice