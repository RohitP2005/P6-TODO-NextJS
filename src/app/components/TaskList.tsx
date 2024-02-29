import React from "react";
import Task from "./Task";
import { TaskResult } from '@/db';

interface TaskProps{
tasks:TaskResult[]
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
        <Task key={task.task_no} task={task}/>
      ))}
    </tbody>
  </table>
</div>
    </div>
  )
}
export default TaskList;
