export interface ITask{
    id:string,
    title:string,
    done:boolean,
}

export interface ITasksState{
    titleInput:string,
    tasks:ITask[],
    isRequestTasks:boolean
}