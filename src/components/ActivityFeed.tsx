import { MessageSquare, Send, User } from 'lucide-react';
import { useState } from 'react';

interface Activity {
  id: string;
  user: string;
  message: string;
  time: string;
  attachment?: string;
}

export default function ActivityFeed() {
  const [activities] = useState<Activity[]>([
    {
      id: '1',
      user: 'John Smith',
      message: 'I would like to meet you to discuss the latest news about the arrival of the new theme. They say it is going to be one of the best themes on the market',
      time: '5:15',
      attachment: 'theme-thumbnail-image.jpg',
    },
    {
      id: '2',
      user: 'Sarah Johnson',
      message: 'I would like to meet you to discuss the latest news about the arrival of the new theme. They say it is going to be one of the best themes on the market',
      time: '5:15',
    },
    {
      id: '3',
      user: 'Michael Brown',
      message: 'I would like to meet you to discuss the latest news about the arrival of the new theme. They say it is going to be one of the best themes on the market',
      time: '5:30',
    },
  ]);

  const [message, setMessage] = useState('');

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center gap-2 mb-4">
        <MessageSquare size={20} className="text-gray-600" />
        <h2 className="text-lg font-semibold text-gray-800">Activity Feed</h2>
      </div>

      <div className="space-y-4 mb-4 max-h-96 overflow-y-auto">
        {activities.map((activity) => (
          <div key={activity.id} className="border-b border-gray-100 pb-4 last:border-0">
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <User size={16} className="text-red-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium text-sm text-gray-800">{activity.user}</span>
                  <span className="text-xs text-gray-500">{activity.time}</span>
                </div>
                <p className="text-sm text-gray-600">{activity.message}</p>
                {activity.attachment && (
                  <div className="mt-2 inline-flex items-center gap-2 text-xs text-red-600 bg-red-50 px-3 py-1 rounded">
                    Attachment: {activity.attachment}
                    <button className="text-red-600 hover:text-red-700">Open</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-2 pt-4 border-t">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type message..."
          className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
        />
        <button className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 transition-colors">
          <Send size={20} />
        </button>
      </div>
    </div>
  );
}
