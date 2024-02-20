import {ITask} from "../../../types/tasks";
import React from "react";
import Task from "./Task";

interface TaskProps{
tasks:ITask[]
}

const TaskList: React.FC<TaskProps> = ({tasks}) =>{
  return (
    <div>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Task</th>
      </tr>
    </thead>
    <tbody>
      {tasks.map(task=>(
        <Task key={task.id} task={task}/>
      ))}
    </tbody>
  </table>
</div>
    </div>
  )
}
export default TaskList;
