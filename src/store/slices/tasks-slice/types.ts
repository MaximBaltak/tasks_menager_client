export interface ITask{
    id:number,
    title:string,
    done:boolean,
}

export interface ITasksState{
    titleInput:string,
    tasks:ITask[],
    isRequestTasks:boolean
}