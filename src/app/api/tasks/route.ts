import { query } from "@/db";

export const dynamic = 'force-dynamic' // defaults to auto
export async function GET() {
    try {
        
        const records = await query('SELECT * FROM tasks');
        return Response.json(records);
    } catch (error) {
        console.error('Error fetching records:', error);
        return Response.error();
    }
}
export async function POST(request:Request) {
    try {
        // Extract the task from the request body
        const { task } = await request.json();

        // Define the SQL query to insert a new record into the 'tasks' table
        const queryString = 'INSERT INTO tasks (task) VALUES ($1) RETURNING *';

        // Execute the SQL query with the task value
        const result = await query(queryString, [task]);

        // Return the inserted record
        return new Response(JSON.stringify(result[0]), {
            status: 201, // HTTP status code for successful creation
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        console.error('Error inserting task into database:', error);
        // Return an error response
        return new Response(JSON.stringify({ message: 'Failed to insert task into database' }), {
            status: 500, // HTTP status code for internal server error
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}
