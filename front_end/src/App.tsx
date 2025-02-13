import { useState } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState<{ text: string; completed: boolean }[]>([]);

  const addTask = (task: string) => {
    setTasks([...tasks, { text: task, completed: false }]);
  };

  const removeTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleTaskCompletion = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="max-w-xl mx-auto p-6">
        <TaskForm addTask={addTask} />
        <TaskList tasks={tasks} removeTask={removeTask} toggleTaskCompletion={toggleTaskCompletion} />
      </div>
    </div>
  );
}

export default App;
