import { TaskResult } from "@/db";
import { useState } from "react";
import DELETE from "@/src/app/api/tasks/[task_no]/route";

interface TaskProps {
    task: TaskResult;
}

const Task: React.FC<TaskProps> = ({ task }) => {
    const [error, setError] = useState<string>('');

    const handleDelete = async () => {
        try {
            // Call the DELETE function and await its response
            const response = await DELETE(`${task.task_no}`);

            if (!response) {
                throw new Error('Failed to delete task');
            }

            console.log('Task deleted successfully');
            setError("Task Deleted Refresh")

            // Handle success: Remove the task from the UI
        } catch (error) {
            console.error('Error deleting task:', error);
            setError('Failed to delete task. Please try again.');
        }
    };

    return (
        <tr key={task.task_no}>
            <td></td>
            <td>{task.task_no}</td>
            <td className="text-lg">{task.task}</td>
            <td>
                <button className="btn btn-outline btn-error btn-xs" onClick={handleDelete}>Remove</button>
                {error && <p className="text-red-500">{error}</p>}
            </td>
        </tr>
    );
};

export default Task;
