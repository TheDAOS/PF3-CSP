'use client';

import React, { useState, useEffect } from 'react';
import { Responsive, WidthProvider, Layout } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const ResponsiveGridLayout = WidthProvider(Responsive);

type WidgetSize = 'small' | 'medium' | 'large';

interface WidgetSizeConfig {
  w: number;
  h: number;
  label: string;
}

const WIDGET_SIZES: Record<WidgetSize, WidgetSizeConfig> = {
  small: { w: 2, h: 2, label: 'Small' },
  medium: { w: 4, h: 2, label: 'Medium' },
  large: { w: 4, h: 4, label: 'Large' },
};

interface Widget {
  id: string;
  title: string;
  size: WidgetSize;
  content: (size: WidgetSize) => React.ReactNode;
  availableSizes: WidgetSize[];
  gradient: string;
  icon: React.ReactNode;
}

// Apple Control Center style widgets
const renderConnectivityWidget = (size: WidgetSize) => {
  const [isWifiOn, setIsWifiOn] = useState(true);
  const [isBluetoothOn, setIsBluetoothOn] = useState(false);
  const [isAirplaneMode, setIsAirplaneMode] = useState(false);

  if (size === 'small') {
    return (
      <div className="p-4 flex-1 overflow-hidden flex flex-col justify-center items-center">
        <div className="text-3xl mb-2">📶</div>
        <div className="text-xs text-white/80">WiFi</div>
        <div className="text-xs text-white/60 mt-1">{isWifiOn ? 'Connected' : 'Off'}</div>
      </div>
    );
  }

  return (
    <div className="p-4 flex-1 overflow-hidden">
      <div className="grid grid-cols-2 gap-3 h-full">
        <button 
          onClick={() => setIsWifiOn(!isWifiOn)}
          className={`glass-card rounded-2xl p-4 flex flex-col items-center justify-center apple-bounce transition-all ${
            isWifiOn ? 'bg-blue-500/30' : 'bg-white/10'
          }`}
        >
          <svg className="w-8 h-8 text-white mb-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.076 13.308-5.076 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.24 0 1 1 0 01-1.415-1.414 5 5 0 017.07 0 1 1 0 01-1.415 1.414zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
          <div className="text-xs text-white/80 font-medium">Wi-Fi</div>
        </button>

        <button 
          onClick={() => setIsBluetoothOn(!isBluetoothOn)}
          className={`glass-card rounded-2xl p-4 flex flex-col items-center justify-center apple-bounce transition-all ${
            isBluetoothOn ? 'bg-blue-500/30' : 'bg-white/10'
          }`}
        >
          <svg className="w-8 h-8 text-white mb-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v5.323l3.954-2.582a1 1 0 011.091 1.678L13.584 9l2.461 1.581a1 1 0 01-1.091 1.678L11 10.677V16a1 1 0 01-1.707.707L6.586 14H4a1 1 0 01-1-1v-2a1 1 0 011-1h2.586l2.707-2.707A1 1 0 0110 8V2z" clipRule="evenodd" />
          </svg>
          <div className="text-xs text-white/80 font-medium">Bluetooth</div>
        </button>

        <button 
          onClick={() => setIsAirplaneMode(!isAirplaneMode)}
          className={`glass-card rounded-2xl p-4 flex flex-col items-center justify-center apple-bounce transition-all ${
            isAirplaneMode ? 'bg-orange-500/30' : 'bg-white/10'
          }`}
        >
          <svg className="w-8 h-8 text-white mb-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/>
          </svg>
          <div className="text-xs text-white/80 font-medium">Airplane</div>
        </button>

        <button className="glass-card rounded-2xl p-4 flex flex-col items-center justify-center apple-bounce bg-green-500/30">
          <svg className="w-8 h-8 text-white mb-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
          </svg>
          <div className="text-xs text-white/80 font-medium">Hotspot</div>
        </button>
      </div>
    </div>
  );
};

const renderMediaWidget = (size: WidgetSize) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(75);

  if (size === 'small') {
    return (
      <div className="p-4 flex-1 overflow-hidden flex flex-col justify-center items-center">
        <button 
          onClick={() => setIsPlaying(!isPlaying)}
          className="apple-bounce"
        >
          <div className="text-3xl mb-2">{isPlaying ? '⏸️' : '▶️'}</div>
        </button>
        <div className="text-xs text-white/80">Music</div>
      </div>
    );
  }

  return (
    <div className="p-4 flex-1 overflow-hidden flex flex-col">
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="flex-1">
          <div className="text-white font-medium text-sm">Now Playing</div>
          <div className="text-white/70 text-xs">Midnight Dreams</div>
          <div className="text-white/50 text-xs">Artist Name</div>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-6 mb-4">
        <button className="apple-bounce">
          <svg className="w-6 h-6 text-white/80" fill="currentColor" viewBox="0 0 20 20">
            <path d="M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z"/>
          </svg>
        </button>

        <button 
          onClick={() => setIsPlaying(!isPlaying)}
          className="glass-card w-12 h-12 rounded-full flex items-center justify-center apple-bounce"
        >
          {isPlaying ? (
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          )}
        </button>

        <button className="apple-bounce">
          <svg className="w-6 h-6 text-white/80" fill="currentColor" viewBox="0 0 20 20">
            <path d="M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z"/>
          </svg>
        </button>
      </div>

      <div className="flex items-center space-x-3">
        <svg className="w-4 h-4 text-white/60" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM15.657 6.343a1 1 0 011.414 0A9.972 9.972 0 0119 12a9.972 9.972 0 01-1.929 5.657 1 1 0 11-1.414-1.414A7.971 7.971 0 0017 12c0-2.21-.896-4.21-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 12a5.984 5.984 0 01-.757 2.828 1 1 0 01-1.415-1.414A3.984 3.984 0 0013 12a3.983 3.983 0 00-.172-1.172 1 1 0 010-1.415z" clipRule="evenodd" />
        </svg>
        <div className="flex-1 h-1 bg-white/20 rounded-full">
          <div className="h-full bg-white rounded-full" style={{ width: `${volume}%` }}></div>
        </div>
        <span className="text-xs text-white/60">{volume}%</span>
      </div>
    </div>
  );
};

const renderSystemWidget = (size: WidgetSize) => {
  const [brightness, setBrightness] = useState(80);
  const [volume, setVolume] = useState(65);

  if (size === 'small') {
    return (
      <div className="p-4 flex-1 overflow-hidden flex flex-col justify-center items-center">
        <div className="text-3xl mb-2">🔆</div>
        <div className="text-xs text-white/80">Brightness</div>
        <div className="text-xs text-white/60 mt-1">{brightness}%</div>
      </div>
    );
  }

  return (
    <div className="p-4 flex-1 overflow-hidden space-y-6">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <svg className="w-5 h-5 text-white/80" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
          </svg>
          <span className="text-xs text-white/60">{brightness}%</span>
        </div>
        <div className="h-2 bg-white/20 rounded-full">
          <div className="h-full bg-white rounded-full transition-all" style={{ width: `${brightness}%` }}></div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <svg className="w-5 h-5 text-white/80" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM15.657 6.343a1 1 0 011.414 0A9.972 9.972 0 0119 12a9.972 9.972 0 01-1.929 5.657 1 1 0 11-1.414-1.414A7.971 7.971 0 0017 12c0-2.21-.896-4.21-2.343-5.657a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          <span className="text-xs text-white/60">{volume}%</span>
        </div>
        <div className="h-2 bg-white/20 rounded-full">
          <div className="h-full bg-white rounded-full transition-all" style={{ width: `${volume}%` }}></div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <button className="glass-card rounded-xl p-3 flex flex-col items-center apple-bounce">
          <svg className="w-6 h-6 text-white mb-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
          </svg>
          <div className="text-xs text-white/80">Settings</div>
        </button>
        <button className="glass-card rounded-xl p-3 flex flex-col items-center apple-bounce">
          <svg className="w-6 h-6 text-white mb-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
          <div className="text-xs text-white/80">Menu</div>
        </button>
      </div>
    </div>
  );
};

const renderStatsWidget = (size: WidgetSize) => {
  if (size === 'small') {
    return (
      <div className="p-4 flex-1 overflow-hidden flex flex-col justify-center items-center">
        <div className="text-2xl font-bold text-white mb-1">87%</div>
        <div className="text-xs text-white/80">CPU</div>
      </div>
    );
  }

  return (
    <div className="p-4 flex-1 overflow-hidden">
      <div className="grid grid-cols-2 gap-4 h-full">
        <div className="flex flex-col justify-center items-center">
          <div className="w-16 h-16 rounded-full border-4 border-white/20 flex items-center justify-center mb-2">
            <div className="text-lg font-bold text-white">87%</div>
          </div>
          <div className="text-xs text-white/80">CPU Usage</div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="w-16 h-16 rounded-full border-4 border-white/20 flex items-center justify-center mb-2">
            <div className="text-lg font-bold text-white">64%</div>
          </div>
          <div className="text-xs text-white/80">Memory</div>
        </div>
      </div>
    </div>
  );
};

const renderWeatherWidget = (size: WidgetSize) => {
  if (size === 'small') {
    return (
      <div className="p-4 flex-1 overflow-hidden flex flex-col justify-center items-center">
        <div className="text-3xl mb-2">☀️</div>
        <div className="text-lg font-bold text-white">72°</div>
        <div className="text-xs text-white/80">Sunny</div>
      </div>
    );
  }

  return (
    <div className="p-4 flex-1 overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-2xl font-bold text-white">72°F</div>
          <div className="text-white/80 text-sm">San Francisco</div>
          <div className="text-white/60 text-xs">Sunny</div>
        </div>
        <div className="text-5xl">☀️</div>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between text-xs">
          <span className="text-white/80">High: 78°F</span>
          <span className="text-white/80">Low: 65°F</span>
        </div>
        <div className="flex justify-between text-xs">
          <span className="text-white/60">Humidity: 45%</span>
          <span className="text-white/60">Wind: 12 mph</span>
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [widgets, setWidgets] = useState<Widget[]>([
    {
      id: 'connectivity',
      title: 'Connectivity',
      size: 'large',
      availableSizes: ['small', 'medium', 'large'],
      content: renderConnectivityWidget,
      gradient: 'gradient-bg',
      icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.076 13.308-5.076 18.384 0a1 1 0 01-1.414 1.414z" clipRule="evenodd" /></svg>,
    },
    {
      id: 'media',
      title: 'Music',
      size: 'large',
      availableSizes: ['small', 'medium', 'large'],
      content: renderMediaWidget,
      gradient: 'gradient-bg-2',
      icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" clipRule="evenodd" /></svg>,
    },
    {
      id: 'system',
      title: 'System',
      size: 'large',
      availableSizes: ['small', 'medium', 'large'],
      content: renderSystemWidget,
      gradient: 'gradient-bg-3',
      icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" /></svg>,
    },
    {
      id: 'stats',
      title: 'Performance',
      size: 'medium',
      availableSizes: ['small', 'medium', 'large'],
      content: renderStatsWidget,
      gradient: 'gradient-bg-4',
      icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"/><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"/></svg>,
    },
    {
      id: 'weather',
      title: 'Weather',
      size: 'medium',
      availableSizes: ['small', 'medium', 'large'],
      content: renderWeatherWidget,
      gradient: 'gradient-bg-5',
      icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414z" clipRule="evenodd" /></svg>,
    },
  ]);

  // Generate layout based on widget sizes
  const generateLayout = () => {
    let x = 0;
    let y = 0;
    const layout: Layout[] = [];

    widgets.forEach((widget) => {
      const sizeConfig = WIDGET_SIZES[widget.size];
      
      // If widget doesn't fit in current row, move to next row
      if (x + sizeConfig.w > 12) {
        x = 0;
        y += 2;
      }

      layout.push({
        i: widget.id,
        x,
        y,
        w: sizeConfig.w,
        h: sizeConfig.h,
        isResizable: false,
      });

      x += sizeConfig.w;
    });

    return layout;
  };

  const [layouts, setLayouts] = useState({
    lg: generateLayout(),
  });

  const handleLayoutChange = (layout: Layout[], layouts: any) => {
    setLayouts(layouts);
  };

  const changeWidgetSize = (widgetId: string, newSize: WidgetSize) => {
    const updatedWidgets = widgets.map(widget => 
      widget.id === widgetId ? { ...widget, size: newSize } : widget
    );
    setWidgets(updatedWidgets);
  };

  // Update layout when widgets change
  useEffect(() => {
    const newLayout = generateLayout();
    setLayouts({ lg: newLayout });
  }, [widgets]);

  return (
    <div className="min-h-screen main-background">
      {/* Floating Particles */}
      <div className="particle" style={{ top: '20%' }}></div>
      <div className="particle" style={{ top: '60%' }}></div>
      <div className="particle" style={{ top: '80%' }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Dashboard Header */}
        <div className="mb-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-2 drop-shadow-lg">Control Center</h1>
          <p className="text-white/80 text-lg drop-shadow-md">Drag and customize your controls</p>
        </div>

        {/* Grid Layout */}
        <ResponsiveGridLayout
          className="layout"
          layouts={layouts}
          onLayoutChange={handleLayoutChange}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
          rowHeight={80}
          isDraggable={true}
          isResizable={false}
          margin={[20, 20]}
          containerPadding={[0, 0]}
          useCSSTransforms={true}
        >
          {widgets.map((widget) => (
            <div
              key={widget.id}
              className={`glass-card-dark rounded-3xl apple-hover overflow-hidden ${widget.gradient}`}
            >
              {/* Widget Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/10">
                <div className="flex items-center space-x-2">
                  {widget.icon}
                  <h3 className="font-semibold text-white text-sm">{widget.title}</h3>
                </div>
                <div className="flex items-center space-x-1">
                  {/* Size Controls */}
                  {widget.availableSizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => changeWidgetSize(widget.id, size)}
                      className={`w-3 h-3 rounded-full border transition-all apple-bounce ${
                        widget.size === size
                          ? 'bg-white border-white'
                          : 'border-white/40 hover:border-white/70'
                      }`}
                      title={WIDGET_SIZES[size].label}
                    />
                  ))}
                </div>
              </div>
              
              {/* Widget Content */}
              <div className="flex-1 min-h-0 overflow-hidden">
                {widget.content(widget.size)}
              </div>
            </div>
          ))}
        </ResponsiveGridLayout>
      </div>
    </div>
  );
};

export default Dashboard;