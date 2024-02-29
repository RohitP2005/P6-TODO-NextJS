"use server";
import { query } from "@/db";

const dynamic = 'force-dynamic'; 

export default async function DELETE(task_no:string){
    try {
        const taskno = task_no;
        console.log(taskno);

        // Define the SQL query to delete the task from the 'tasks' table
        const queryString = 'DELETE FROM tasks WHERE task_no = $1 RETURNING *';

        // Execute the SQL query with the task_no value
        const result = await query(queryString, [taskno]);

        // Check if any task was deleted
        if (result.length === 0) {
            // return new Response(JSON.stringify({ message: 'Task not found' }), {
            //     status: 404, // HTTP status code for not found
            //     headers: {
            //         'Content-Type': 'application/json'
            //     }
            // });
            return "Task Not Found"
        }

        // Task deleted successfully
        // return new Response(JSON.stringify({ message: 'Task deleted successfully' }), {
        //     status: 200, // HTTP status code for successful deletion
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // });
        return "Task Deleted"
    } catch (error) {
        console.error('Error deleting task:', error);
        // Return an error response
        // return new Response(JSON.stringify({ message: 'Failed to delete task' }), {
        //     status: 500, // HTTP status code for internal server error
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // });
        return "Failed to delete task"
    }
}
