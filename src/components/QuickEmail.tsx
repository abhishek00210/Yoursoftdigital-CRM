import { Mail, Bold, Italic, Underline, Link2, List, Image, RotateCcw } from 'lucide-react';
import { useState } from 'react';

export default function QuickEmail() {
  const [emailTo, setEmailTo] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = () => {
    console.log('Sending email:', { emailTo, subject, message });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center gap-2 mb-4">
        <Mail size={20} className="text-gray-600" />
        <h2 className="text-lg font-semibold text-gray-800">Quick Email</h2>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm text-gray-600 mb-1">Email to:</label>
          <input
            type="email"
            value={emailTo}
            onChange={(e) => setEmailTo(e.target.value)}
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            placeholder="recipient@example.com"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1">Subject:</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            placeholder="Email subject"
          />
        </div>

        <div>
          <div className="flex items-center gap-1 mb-2 pb-2 border-b border-gray-200">
            <button className="p-1.5 hover:bg-gray-100 rounded text-gray-600">
              <Bold size={16} />
            </button>
            <button className="p-1.5 hover:bg-gray-100 rounded text-gray-600">
              <Italic size={16} />
            </button>
            <button className="p-1.5 hover:bg-gray-100 rounded text-gray-600">
              <Underline size={16} />
            </button>
            <div className="w-px h-4 bg-gray-300 mx-1" />
            <button className="p-1.5 hover:bg-gray-100 rounded text-gray-600">
              <Link2 size={16} />
            </button>
            <button className="p-1.5 hover:bg-gray-100 rounded text-gray-600">
              <List size={16} />
            </button>
            <button className="p-1.5 hover:bg-gray-100 rounded text-gray-600">
              <Image size={16} />
            </button>
            <div className="w-px h-4 bg-gray-300 mx-1" />
            <button className="p-1.5 hover:bg-gray-100 rounded text-gray-600">
              <RotateCcw size={16} />
            </button>
          </div>

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
            rows={6}
            placeholder="Message"
          />
        </div>

        <button
          onClick={handleSend}
          className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors font-medium"
        >
          Send
        </button>
      </div>
    </div>
  );
}
