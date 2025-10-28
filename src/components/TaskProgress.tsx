import { Target } from 'lucide-react';

interface Task {
  id: string;
  name: string;
  progress: number;
  color: string;
}

export default function TaskProgress() {
  const tasks: Task[] = [
    { id: '1', name: 'Task #1', progress: 90, color: 'bg-red-600' },
    { id: '2', name: 'Task #2', progress: 70, color: 'bg-red-500' },
    { id: '3', name: 'Task #3', progress: 60, color: 'bg-red-600' },
    { id: '4', name: 'Task #4', progress: 40, color: 'bg-red-500' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center gap-2 mb-6">
        <Target size={20} className="text-gray-600" />
        <h2 className="text-lg font-semibold text-gray-800">Task Progress</h2>
      </div>

      <div className="space-y-6">
        {tasks.map((task) => (
          <div key={task.id}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">{task.name}</span>
              <span className="text-sm font-semibold text-gray-800">{task.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div
                className={`h-full ${task.color} rounded-full transition-all duration-500`}
                style={{ width: `${task.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
