import { CheckSquare, Plus, GripVertical } from 'lucide-react';
import { useState } from 'react';

interface Task {
  id: string;
  title: string;
  status: string;
  statusColor: string;
  completed: boolean;
}

export default function TodoList() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', title: 'Design a nice theme', status: '0 client', statusColor: 'bg-red-500', completed: false },
    { id: '2', title: 'Make the theme responsive', status: '0 client', statusColor: 'bg-red-500', completed: false },
    { id: '3', title: 'Let theme shine like a star', status: '0 d ago', statusColor: 'bg-yellow-500', completed: false },
    { id: '4', title: 'Let theme shine like a star', status: '0 d ago', statusColor: 'bg-red-500', completed: false },
    { id: '5', title: 'Check your messages and notifications', status: '0 t tools', statusColor: 'bg-gray-600', completed: false }
  ]);

  const toggleTask = (id: string) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <CheckSquare size={20} className="text-gray-600" />
          <h2 className="text-lg font-semibold text-gray-800">To Do List</h2>
        </div>
        <div className="flex gap-2">
          <button className="w-8 h-8 rounded bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600">
            1
          </button>
          <button className="w-8 h-8 rounded bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600">
            2
          </button>
          <button className="w-8 h-8 rounded bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600">
            3
          </button>
        </div>
      </div>

      <div className="space-y-2">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <GripVertical size={16} className="text-gray-400 cursor-move" />
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
              className="w-4 h-4 text-red-600 rounded border-gray-300 focus:ring-red-500"
            />
            <span className={`flex-1 text-sm ${task.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>
              {task.title}
            </span>
            <span className={`text-xs text-white px-2 py-1 rounded ${task.statusColor}`}>
              {task.status}
            </span>
          </div>
        ))}
      </div>

      <button className="w-full mt-4 flex items-center justify-center gap-2 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
        <Plus size={20} />
        <span className="text-sm font-medium">Add Item</span>
      </button>
    </div>
  );
}
