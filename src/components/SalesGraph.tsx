import { TrendingUp } from 'lucide-react';

export default function SalesGraph() {
  const data = [
    { month: 'Jan', value: 5000 },
    { month: 'Feb', value: 7500 },
    { month: 'Mar', value: 6800 },
    { month: 'Apr', value: 9200 },
    { month: 'May', value: 11500 },
    { month: 'Jun', value: 13800 },
    { month: 'Jul', value: 15200 },
    { month: 'Aug', value: 16800 },
    { month: 'Sep', value: 18500 },
    { month: 'Oct', value: 17200 },
    { month: 'Nov', value: 15800 },
    { month: 'Dec', value: 13500 },
  ];

  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <div className="bg-red-600 text-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <TrendingUp size={20} />
          <h2 className="text-lg font-semibold">Sales Graph</h2>
        </div>
      </div>

      <div className="relative h-48">
        <svg viewBox="0 0 1200 200" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="white" stopOpacity="0.3" />
              <stop offset="100%" stopColor="white" stopOpacity="0.05" />
            </linearGradient>
          </defs>

          <path
            d={`M 0 ${200 - (data[0].value / maxValue) * 180} ${data.map((d, i) =>
              `L ${(i * 1200) / (data.length - 1)} ${200 - (d.value / maxValue) * 180}`
            ).join(' ')} L 1200 200 L 0 200 Z`}
            fill="url(#areaGradient)"
          />

          <polyline
            points={data.map((d, i) =>
              `${(i * 1200) / (data.length - 1)},${200 - (d.value / maxValue) * 180}`
            ).join(' ')}
            fill="none"
            stroke="white"
            strokeWidth="3"
          />

          {data.map((d, i) => (
            <circle
              key={i}
              cx={(i * 1200) / (data.length - 1)}
              cy={200 - (d.value / maxValue) * 180}
              r="5"
              fill="white"
            />
          ))}
        </svg>
      </div>

      <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/20">
        <span className="text-sm opacity-90">2025</span>
        <span className="text-sm opacity-90">2026</span>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
          <div className="text-2xl font-bold">2M</div>
          <div className="text-xs opacity-80 mt-1">Mail Orders</div>
        </div>
        <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
          <div className="text-2xl font-bold">5%</div>
          <div className="text-xs opacity-80 mt-1">Online</div>
        </div>
        <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
          <div className="text-2xl font-bold">3M</div>
          <div className="text-xs opacity-80 mt-1">In-Store</div>
        </div>
      </div>
    </div>
  );
}
