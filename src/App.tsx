// src/App.tsx
import { useState } from 'react';
import { ShoppingCart, TrendingUp, Users, Eye, Bell, User } from 'lucide-react';
import Sidebar from './components/Sidebar';
import StatCard from './components/StatCard';
import SalesChart from './components/SalesChart';
import ActivityFeed from './components/ActivityFeed';
import TodoList from './components/TodoList';
import QuickEmail from './components/QuickEmail';
import VisitorsMap from './components/VisitorsMap';
import Calendar from './components/Calendar';
import TaskProgress from './components/TaskProgress';
import SalesGraph from './components/SalesGraph';
import ClientPage from './components/ClientPage'; // Handles Client List + Add Client
import ClientContactList from './components/ClientContactList'; // The Client Contact List page

function App() {
  const [activeId, setActiveId] = useState('dashboard');

  // Helper function to get the correct header label
  const getLabel = (id: string) => {
    if (id === 'dashboard') return 'Dashboard';
    if (id === 'clientList') return 'Client'; // Client List and Add Client use 'Client' header
    if (id === 'clientContactList') return 'Client Contact'; // Client Contact List uses 'Client Contact' header
    // Fallback for other menu items (you can expand this as needed)
    return id.charAt(0).toUpperCase() + id.slice(1);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar Component */}
      <Sidebar activeId={activeId} setActiveId={setActiveId} />

      {/* Main Content Area */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-10">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-800">
              {getLabel(activeId)}
            </h1>
            <div className="flex items-center gap-4">
              <button className="relative p-2 hover:bg-gray-100 rounded-lg">
                <Bell size={20} className="text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-600 rounded-full"></span>
              </button>
              <div className="flex items-center gap-3 pl-4 border-l">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <User size={20} className="text-red-600" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-800">SAdmin</div>
                  <div className="text-xs text-gray-500">Administrator</div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          {/* Conditional Rendering based on activeId */}

          {/* Show Dashboard */}
          {activeId === 'dashboard' && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <StatCard
                  title="New Orders"
                  value="150"
                  icon={ShoppingCart}
                  color="white"
                />
                <StatCard
                  title="Bounce Rate"
                  value="53%"
                  icon={TrendingUp}
                  color="white"
                />
                <StatCard
                  title="User Registrations"
                  value="44"
                  icon={Users}
                  color="gray"
                />
                <StatCard
                  title="Unique Visitors"
                  value="65"
                  icon={Eye}
                  color="red"
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                <div className="lg:col-span-2">
                  <SalesChart />
                </div>
                <div>
                  <VisitorsMap />
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                <div>
                  <ActivityFeed />
                </div>
                <div>
                  <TodoList />
                </div>
                <div>
                  <QuickEmail />
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div>
                  <SalesGraph />
                </div>
                <div>
                  <Calendar />
                </div>
                <div>
                  <TaskProgress />
                </div>
              </div>
            </>
          )}

          {/* Show Client Page (handles List or Add Form) */}
          {activeId === 'clientList' && <ClientPage />}

          {/* Show Client Contact List Page */}
          {activeId === 'clientContactList' && <ClientContactList />}

          {/* Placeholder for all other pages */}
          {activeId !== 'dashboard' &&
            activeId !== 'clientList' &&
            activeId !== 'clientContactList' && (
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h2 className="text-xl font-semibold">
                  Content Area for: {getLabel(activeId)}
                </h2>
                <p className="mt-2 text-gray-600">
                  The main page content for the selected menu item ({activeId})
                  would go here.
                </p>
              </div>
            )}
        </main>
      </div>
    </div>
  );
}

export default App;