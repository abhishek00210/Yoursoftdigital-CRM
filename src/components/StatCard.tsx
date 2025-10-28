import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  color: 'red' | 'gray' | 'white';
}

export default function StatCard({ title, value, icon: Icon, color }: StatCardProps) {
  const colorClasses = {
    red: 'bg-gradient-to-br from-red-500 to-red-600 text-white',
    gray: 'bg-gradient-to-br from-gray-600 to-gray-700 text-white',
    white: 'bg-white border border-gray-200 text-gray-800',
  };

  return (
    <div className={`rounded-xl p-6 shadow-sm ${colorClasses[color]}`}>
      <div className="flex items-start justify-between">
        <div>
          <h3 className={`text-sm font-medium ${color === 'white' ? 'text-gray-600' : 'text-white/80'}`}>
            {title}
          </h3>
          <p className="text-3xl font-bold mt-2">{value}</p>
        </div>
        <div className={`p-3 rounded-lg ${color === 'white' ? 'bg-red-50' : 'bg-white/20'}`}>
          <Icon size={24} className={color === 'white' ? 'text-red-600' : 'text-white'} />
        </div>
      </div>
      <button className={`text-sm mt-4 ${color === 'white' ? 'text-red-600' : 'text-white/90'} hover:underline`}>
        More info →
      </button>
    </div>
  );
}
