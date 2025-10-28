import { Map, TrendingUp, Activity } from 'lucide-react';

export default function VisitorsMap() {
  const metrics = [
    { label: 'Visitors', value: '2M', color: 'text-red-600' },
    { label: 'Online', value: '1.5M', color: 'text-gray-600' },
    { label: 'Events', value: '850K', color: 'text-gray-500' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Map size={20} className="text-gray-600" />
          <h2 className="text-lg font-semibold text-gray-800">Visitors</h2>
        </div>
        <div className="flex gap-1">
          <button className="p-1 hover:bg-gray-100 rounded">
            <TrendingUp size={16} className="text-gray-600" />
          </button>
          <button className="p-1 hover:bg-gray-100 rounded">
            <Activity size={16} className="text-gray-600" />
          </button>
        </div>
      </div>

      <div className="relative aspect-video bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg overflow-hidden mb-4">
        <svg viewBox="0 0 800 400" className="w-full h-full">
          <path
            d="M100,200 Q150,150 200,180 T300,190 T400,170 T500,200 T600,180 T700,200"
            fill="none"
            stroke="#DC143C"
            strokeWidth="2"
            opacity="0.3"
          />
          <circle cx="150" cy="180" r="8" fill="#DC143C" opacity="0.6" />
          <circle cx="250" cy="190" r="6" fill="#DC143C" opacity="0.6" />
          <circle cx="350" cy="170" r="10" fill="#DC143C" opacity="0.8" />
          <circle cx="450" cy="200" r="7" fill="#DC143C" opacity="0.6" />
          <circle cx="550" cy="180" r="9" fill="#DC143C" opacity="0.7" />
          <circle cx="650" cy="200" r="6" fill="#DC143C" opacity="0.6" />

          <text x="400" y="220" textAnchor="middle" fill="#6B7280" fontSize="48" fontWeight="bold" opacity="0.1">
            CANADA
          </text>
        </svg>

        <div className="absolute top-4 right-4 flex gap-2">
          <div className="w-2 h-2 rounded-full bg-red-600"></div>
          <div className="w-2 h-2 rounded-full bg-gray-400"></div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {metrics.map((metric, index) => (
          <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
            <div className={`text-2xl font-bold ${metric.color}`}>{metric.value}</div>
            <div className="text-xs text-gray-600 mt-1">{metric.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
