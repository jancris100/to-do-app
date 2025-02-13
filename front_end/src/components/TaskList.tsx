import { Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const TaskList = ({ tasks, removeTask, toggleTaskCompletion }: { tasks: { text: string; completed: boolean }[]; removeTask: (index: number) => void; toggleTaskCompletion: (index: number) => void }) => {
  return (
    <ul className="mt-4 space-y-3">
      <AnimatePresence>
        {tasks.map((task, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: -10 }} // Efecto de entrada
            animate={{ opacity: 1, y: 0 }} // Estado final
            exit={{ opacity: 0, x: -50 }} // Efecto de salida
            transition={{ duration: 0.3 }}
            className="bg-white flex justify-between items-center shadow-md p-4 rounded-lg border border-gray-200"
          >
            <span
              onClick={() => toggleTaskCompletion(index)} // Hacer clic para completar tarea
              className={`text-gray-800 ${task.completed ? "line-through text-gray-400" : ""} cursor-pointer`}
            >
              {task.text}
            </span>
            <button onClick={() => removeTask(index)} className="text-red-500 hover:text-red-700 transition">
              <Trash2 size={20} />
            </button>
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  );
};

export default TaskList;
