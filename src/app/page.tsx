import InputField from "./components/InputField";
import TaskList from "./components/TaskList";
import { getTasks } from "../../api";

export default async function Home() {
  const tasks = await getTasks();
  console.log(tasks);
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
