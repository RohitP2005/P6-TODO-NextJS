import {ITask} from "./types/tasks";
const baseUrl = "http://localhost:3002";

export const getTasks = async ():Promise<ITask[]> =>{
    const res = await fetch(`${baseUrl}/tasks`);
    const tasks = await res.json();
    return tasks;

}
export const addTask = async (task: ITask): Promise<ITask> => {
    const res = await fetch(`${baseUrl}/tasks`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    });

    const addedTask = await res.json();
    return addedTask;
}
