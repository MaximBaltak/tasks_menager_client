
export interface IUpdateTaskBody{
    done:boolean,
}
export interface IAddTaskBody extends IUpdateTaskBody{
    title:string,
}
export interface ITasksRequests{
    getTasks():Promise<any>
    addTask(body:IAddTaskBody):Promise<any>
    updateTask(body:IAddTaskBody):Promise<any>
    deleteTaskOrTasks(query?:number):Promise<any>

}