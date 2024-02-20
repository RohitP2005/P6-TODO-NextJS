import {ITask} from "@/types/tasks"

interface TaskProps{
    task:ITask
}
const Task: React.FC<TaskProps> = ({task})=>{
    return(
        <tr key={task.id}>
            <td></td>
            <td>{task.id}</td>
            <td>{task.data}</td>

        </tr>
    )
}
export default Task;
