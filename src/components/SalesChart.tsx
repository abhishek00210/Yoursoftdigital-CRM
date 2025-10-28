import { LineChart } from 'lucide-react';
import { useState } from 'react';

export default function SalesChart() {
  const [chartType, setChartType] = useState<'area' | 'donut'>('area');

  const salesData = [
    { month: 'Jan', value: 7500 },
    { month: 'Feb', value: 8200 },
    { month: 'Mar', value: 8800 },
    { month: 'Apr', value: 9500 },
    { month: 'May', value: 11200 },
    { month: 'Jun', value: 13500 },
    { month: 'Jul', value: 15800 },
    { month: 'Aug', value: 18200 },
    { month: 'Sep', value: 20500 },
    { month: 'Oct', value: 19800 },
    { month: 'Nov', value: 17500 },
    { month: 'Dec', value: 15200 },
  ];

  const maxValue = Math.max(...salesData.map(d => d.value));

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <LineChart size={20} className="text-gray-600" />
          <h2 className="text-lg font-semibold text-gray-800">Sales</h2>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setChartType('donut')}
            className={`px-3 py-1 rounded text-sm ${chartType === 'donut' ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600'}`}
          >
            Donut
          </button>
          <button
            onClick={() => setChartType('area')}
            className={`px-3 py-1 rounded text-sm ${chartType === 'area' ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600'}`}
          >
            Area
          </button>
        </div>
      </div>

      <div className="relative h-64">
        <div className="absolute inset-0 flex items-end justify-between gap-2">
          {salesData.map((data, index) => {
            const height = (data.value / maxValue) * 100;
            return (
              <div key={index} className="flex-1 flex flex-col items-center gap-2">
                <div className="relative w-full group cursor-pointer">
                  <div
                    className="w-full bg-gradient-to-t from-red-500 to-red-400 rounded-t hover:from-red-600 hover:to-red-500 transition-all"
                    style={{ height: `${height}%` }}
                  />
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    ${data.value.toLocaleString()}
                  </div>
                </div>
                <span className="text-xs text-gray-500">{data.month}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex items-center gap-4 mt-6 pt-4 border-t">
        <div className="text-sm text-gray-600">
          Total Revenue: <span className="font-semibold text-gray-800">${salesData.reduce((sum, d) => sum + d.value, 0).toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}
