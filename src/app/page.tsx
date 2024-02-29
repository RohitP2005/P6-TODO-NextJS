"use client"
import React, { useEffect, useState } from 'react';
import InputField from "./components/InputField";
import TaskList from "./components/TaskList";

export default function Home() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchTasks() {
      try {
        // Fetch tasks from your API endpoint
        const response = await fetch('/api/tasks'); // Assuming your API endpoint is '/api/tasks'
        if (!response.ok) {
          throw new Error('Failed to fetch tasks');
        }
        const tasksData = await response.json();
        setTasks(tasksData);
        console.log(tasksData) // Update the tasks state with the fetched data
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    }

    fetchTasks();
  }, []);

  return (
   <>
   <main className="max-w-4xl mx-auto mt-4">
    <div className="text-center my-5 flex flex-col gap-4">
    <h1 className="text-2xl font-bold">Task List</h1>
    <InputField/>
    </div>
    <TaskList tasks={tasks}/>
   </main>
   </>
  );
}
