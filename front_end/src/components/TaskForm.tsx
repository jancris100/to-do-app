import { useState } from "react";
import { PlusCircle } from "lucide-react";
import { motion } from "framer-motion";

const TaskForm = ({ addTask }: { addTask: (task: string) => void }) => {
  const [task, setTask] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!task.trim()) {
      setError("⚠️ Por favor, llena el campo antes de agregar una tarea.");
      return;
    }
    addTask(task);
    setTask("");
    setError("");
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="flex gap-2 my-4"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <input
        type="text"
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
          setError("");
        }} className="border border-gray-300 p-3 rounded-lg w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Añadir una nueva tarea..."
      />
      {error && <p className="text-red-500 text-sm">{error}</p>} {/* Mensaje de error */}

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-black px-4 py-3 rounded-lg flex items-center gap-2 transition"
      >
        <PlusCircle size={20} /> Agregar
      </button>
    </motion.form>
  );
};

export default TaskForm;
