import { useState } from "react";
import { Trash2, Edit3, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const TaskList = ({ tasks, removeTask, toggleTaskCompletion, editTask }: { 
  tasks: { text: string; completed: boolean }[]; 
  removeTask: (index: number) => void; 
  toggleTaskCompletion: (index: number) => void;
  editTask: (index: number, newText: string) => void;
}) => {
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [newText, setNewText] = useState("");

  const handleEdit = (index: number) => {
    setEditingIndex(index);
    setNewText(tasks[index].text);
  };

  const handleSave = (index: number) => {
    if (newText.trim() === "") return;
    editTask(index, newText);
    setEditingIndex(null);
  };

  return (
    <ul className="mt-4 space-y-3">
      <AnimatePresence>
        {tasks.map((task, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="bg-white flex justify-between items-center shadow-md p-4 rounded-lg border border-gray-200"
          >
            {editingIndex === index ? (
              <input
                type="text"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSave(index)}
                className="border border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <span
                onDoubleClick={() => handleEdit(index)}
                onClick={() => toggleTaskCompletion(index)}
                className={`cursor-pointer ${task.completed ? "line-through text-gray-400" : ""}`}
              >
                {task.text}
              </span>
            )}
            
            <div className="flex gap-2">
              {editingIndex === index ? (
                <button onClick={() => handleSave(index)} className="text-green-500 hover:text-green-700 transition">
                  <Check size={20} />
                </button>
              ) : (
                <button onClick={() => handleEdit(index)} className="text-blue-500 hover:text-blue-700 transition">
                  <Edit3 size={20} />
                </button>
              )}
              <button onClick={() => removeTask(index)} className="text-red-500 hover:text-red-700 transition">
                <Trash2 size={20} />
              </button>
            </div>
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  );
};

export default TaskList;
