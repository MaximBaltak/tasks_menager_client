
export interface IUpdateTaskBody{
    id:number,
    done:boolean,
}
export interface IAddTaskBody {
    title:string,
    done:boolean,
}
export interface ITasksRequests{
    getTasks():Promise<any>
    addTask(body:IAddTaskBody):Promise<any>
    updateTask(body:IUpdateTaskBody):Promise<any>
    deleteTaskOrTasks(query?:number):Promise<any>

}