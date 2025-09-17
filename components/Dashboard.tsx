'use client';

import React, { useState } from 'react';
import { Responsive, WidthProvider, Layout } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const ResponsiveGridLayout = WidthProvider(Responsive);

interface Widget {
  id: string;
  title: string;
  content: React.ReactNode;
  defaultSize: { w: number; h: number };
}

const Dashboard = () => {
  // Default layout configuration
  const [layouts, setLayouts] = useState({
    lg: [
      { i: 'analytics', x: 0, y: 0, w: 6, h: 4 },
      { i: 'chart', x: 6, y: 0, w: 6, h: 4 },
      { i: 'stats', x: 0, y: 4, w: 4, h: 4 },
      { i: 'tasks', x: 4, y: 4, w: 4, h: 4 },
      { i: 'notifications', x: 8, y: 4, w: 4, h: 4 },
    ],
  });

  // Widget definitions
  const widgets: Widget[] = [
    {
      id: 'analytics',
      title: 'Analytics Overview',
      content: (
        <div className="p-4 flex-1 overflow-hidden">
          <div className="grid grid-cols-2 gap-3 h-full">
            <div className="bg-blue-50 rounded-lg p-4 flex flex-col justify-center items-center min-h-0">
              <div className="text-3xl font-bold text-blue-600 mb-1">1,234</div>
              <div className="text-xs text-gray-600 text-center">Total Users</div>
              <div className="text-xs text-green-600 mt-1">+12% ↗</div>
            </div>
            <div className="bg-green-50 rounded-lg p-4 flex flex-col justify-center items-center min-h-0">
              <div className="text-3xl font-bold text-green-600 mb-1">98.5%</div>
              <div className="text-xs text-gray-600 text-center">Uptime</div>
              <div className="text-xs text-green-600 mt-1">+0.2% ↗</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 flex flex-col justify-center items-center min-h-0">
              <div className="text-3xl font-bold text-purple-600 mb-1">$12.5k</div>
              <div className="text-xs text-gray-600 text-center">Revenue</div>
              <div className="text-xs text-green-600 mt-1">+8% ↗</div>
            </div>
            <div className="bg-orange-50 rounded-lg p-4 flex flex-col justify-center items-center min-h-0">
              <div className="text-3xl font-bold text-orange-600 mb-1">456</div>
              <div className="text-xs text-gray-600 text-center">New Orders</div>
              <div className="text-xs text-red-600 mt-1">-3% ↘</div>
            </div>
          </div>
        </div>
      ),
      defaultSize: { w: 6, h: 4 },
    },
    {
      id: 'chart',
      title: 'Performance Chart',
      content: (
        <div className="p-4 flex-1 overflow-hidden">
          <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg h-full flex flex-col items-center justify-center text-white">
            <div className="text-4xl mb-3">📊</div>
            <div className="text-lg font-semibold mb-2">Performance Metrics</div>
            <div className="text-sm opacity-90 text-center mb-4">Real-time analytics dashboard</div>
            <div className="flex space-x-4 text-center">
              <div>
                <div className="text-xl font-bold">87%</div>
                <div className="text-xs opacity-75">CPU</div>
              </div>
              <div>
                <div className="text-xl font-bold">64%</div>
                <div className="text-xs opacity-75">Memory</div>
              </div>
              <div>
                <div className="text-xl font-bold">23ms</div>
                <div className="text-xs opacity-75">Response</div>
              </div>
            </div>
          </div>
        </div>
      ),
      defaultSize: { w: 6, h: 4 },
    },
    {
      id: 'stats',
      title: 'Quick Stats',
      content: (
        <div className="p-4 flex-1 overflow-hidden">
          <div className="space-y-4 h-full">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">Active Sessions</span>
              </div>
              <span className="font-bold text-green-600 text-lg">142</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">Bounce Rate</span>
              </div>
              <span className="font-bold text-red-600 text-lg">23.4%</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">Conversion</span>
              </div>
              <span className="font-bold text-blue-600 text-lg">3.2%</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">Page Views</span>
              </div>
              <span className="font-bold text-purple-600 text-lg">8,394</span>
            </div>
          </div>
        </div>
      ),
      defaultSize: { w: 4, h: 4 },
    },
    {
      id: 'tasks',
      title: 'Task Manager',
      content: (
        <div className="p-4 flex-1 overflow-hidden flex flex-col">
          <div className="flex-1 space-y-3 overflow-y-auto">
            <div className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
              <input type="checkbox" className="w-4 h-4 text-blue-600 rounded border-gray-300" />
              <span className="text-sm flex-1">Update dashboard design</span>
              <span className="text-xs text-gray-500">High</span>
            </div>
            <div className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
              <input type="checkbox" checked className="w-4 h-4 text-blue-600 rounded border-gray-300" />
              <span className="text-sm line-through text-gray-500 flex-1">Review user feedback</span>
              <span className="text-xs text-green-500">Done</span>
            </div>
            <div className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
              <input type="checkbox" className="w-4 h-4 text-blue-600 rounded border-gray-300" />
              <span className="text-sm flex-1">Deploy new features</span>
              <span className="text-xs text-orange-500">Medium</span>
            </div>
            <div className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
              <input type="checkbox" className="w-4 h-4 text-blue-600 rounded border-gray-300" />
              <span className="text-sm flex-1">Team meeting at 3 PM</span>
              <span className="text-xs text-red-500">Urgent</span>
            </div>
            <div className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
              <input type="checkbox" className="w-4 h-4 text-blue-600 rounded border-gray-300" />
              <span className="text-sm flex-1">Code review session</span>
              <span className="text-xs text-gray-500">Low</span>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-gray-200">
            <button className="w-full text-left text-sm text-blue-600 hover:text-blue-800 font-medium">
              + Add new task
            </button>
          </div>
        </div>
      ),
      defaultSize: { w: 4, h: 4 },
    },
    {
      id: 'notifications',
      title: 'Activity Feed',
      content: (
        <div className="p-4 flex-1 overflow-hidden flex flex-col">
          <div className="flex-1 space-y-4 overflow-y-auto">
            <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                U
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-gray-900">New user registered</div>
                <div className="text-xs text-gray-500 mt-1">John Doe joined the platform</div>
                <div className="text-xs text-blue-600 mt-1">2 minutes ago</div>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                $
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-gray-900">Payment received</div>
                <div className="text-xs text-gray-500 mt-1">$250.00 from Premium subscription</div>
                <div className="text-xs text-green-600 mt-1">5 minutes ago</div>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg">
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                ⚠
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-gray-900">System maintenance</div>
                <div className="text-xs text-gray-500 mt-1">Scheduled maintenance completed</div>
                <div className="text-xs text-yellow-600 mt-1">1 hour ago</div>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 bg-purple-50 rounded-lg">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                📊
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-gray-900">Report generated</div>
                <div className="text-xs text-gray-500 mt-1">Monthly analytics report is ready</div>
                <div className="text-xs text-purple-600 mt-1">2 hours ago</div>
              </div>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-gray-200">
            <button className="w-full text-left text-sm text-gray-600 hover:text-gray-800">
              View all notifications →
            </button>
          </div>
        </div>
      ),
      defaultSize: { w: 4, h: 4 },
    },
  ];

  const handleLayoutChange = (layout: Layout[], layouts: any) => {
    setLayouts(layouts);
  };

  const addWidget = () => {
    const newWidget = {
      id: `widget-${Date.now()}`,
      title: 'New Widget',
      content: (
        <div className="p-4 h-full flex items-center justify-center">
          <div className="text-center text-gray-500">
            <div className="text-lg mb-2">📦</div>
            <div>New Widget</div>
          </div>
        </div>
      ),
      defaultSize: { w: 4, h: 3 },
    };

    widgets.push(newWidget);

    const newLayout = {
      i: newWidget.id,
      x: 0,
      y: 0,
      w: newWidget.defaultSize.w,
      h: newWidget.defaultSize.h,
    };

    setLayouts({
      ...layouts,
      lg: [...layouts.lg, newLayout],
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Dashboard Header */}
        <div className="mb-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 mt-1">Drag and resize widgets to customize your view</p>
          </div>
          <button
            onClick={addWidget}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2"
          >
            <span>+</span>
            <span>Add Widget</span>
          </button>
        </div>

        {/* Grid Layout */}
        <ResponsiveGridLayout
          className="layout"
          layouts={layouts}
          onLayoutChange={handleLayoutChange}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
          rowHeight={60}
          isDraggable={true}
          isResizable={true}
          margin={[16, 16]}
          containerPadding={[0, 0]}
          useCSSTransforms={true}
        >
          {widgets.map((widget) => (
            <div
              key={widget.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow flex flex-col h-full"
            >
              {/* Widget Header */}
              <div className="flex items-center justify-between p-3 border-b border-gray-100 flex-shrink-0">
                <h3 className="font-semibold text-gray-900 text-sm">{widget.title}</h3>
                <div className="flex items-center space-x-1">
                  <button className="text-gray-400 hover:text-gray-600 p-1 rounded hover:bg-gray-100 transition-colors">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                  </button>
                  <button className="text-gray-400 hover:text-red-500 p-1 rounded hover:bg-gray-100 transition-colors">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Widget Content */}
              <div className="flex-1 min-h-0 overflow-hidden">
                {widget.content}
              </div>
            </div>
          ))}
        </ResponsiveGridLayout>
      </div>
    </div>
  );
};

export default Dashboard;
