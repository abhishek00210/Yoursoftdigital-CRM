import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function Calendar() {
  const [currentMonth] = useState(new Date(2025, 9, 1));

  const daysInMonth = new Date(2025, 10, 0).getDate();
  const firstDayOfMonth = new Date(2025, 9, 1).getDay();

  const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  const weeks = [];
  let week = Array(firstDayOfMonth).fill(null);

  for (let day = 1; day <= daysInMonth; day++) {
    week.push(day);
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  }
  if (week.length > 0) {
    while (week.length < 7) week.push(null);
    weeks.push(week);
  }

  return (
    <div className="bg-red-600 text-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <CalendarIcon size={20} />
          <h2 className="text-lg font-semibold">Calendar</h2>
        </div>
        <div className="flex gap-2">
          <button className="p-1 hover:bg-red-700 rounded">
            <ChevronLeft size={20} />
          </button>
          <button className="p-1 hover:bg-red-700 rounded">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="text-center mb-4">
        <div className="text-xl font-semibold">October 2025</div>
      </div>

      <div className="grid grid-cols-7 gap-2 mb-2">
        {days.map((day) => (
          <div key={day} className="text-center text-sm font-medium py-2">
            {day}
          </div>
        ))}
      </div>

      <div className="space-y-2">
        {weeks.map((week, weekIndex) => (
          <div key={weekIndex} className="grid grid-cols-7 gap-2">
            {week.map((day, dayIndex) => (
              <button
                key={dayIndex}
                className={`aspect-square flex items-center justify-center rounded-lg text-sm transition-colors ${
                  day === null
                    ? ''
                    : day === 15
                    ? 'bg-white text-red-600 font-bold'
                    : 'hover:bg-red-700'
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
