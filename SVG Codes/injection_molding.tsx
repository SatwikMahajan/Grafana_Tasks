import React from 'react';
import { css } from '@emotion/css';
import { GrafanaTheme2 } from '@grafana/data';
import { ScalarDimensionConfig } from '@grafana/schema';
import { useStyles2 } from '@grafana/ui';
import { DimensionContext } from 'app/features/dimensions';
import { ScalarDimensionEditor } from 'app/features/dimensions/editors';
import { CanvasElementItem, CanvasElementOptions, CanvasElementProps } from '../element';

interface InjectionMoldingData {
  cycleTime: number;
  temperature: number;
  pressure: number;
}

interface InjectionMoldingConfig {
  cycleTime?: ScalarDimensionConfig;
  temperature?: ScalarDimensionConfig;
  pressure?: ScalarDimensionConfig;
}

const InjectionMoldingDisplay: React.FC<CanvasElementProps<InjectionMoldingConfig, InjectionMoldingData>> = ({ data }) => {
  const styles = useStyles2(getStyles(data || { cycleTime: 10, temperature: 200, pressure: 50 }));

  // Early return if data is undefined
  if (!data) {
    return <div>No data available</div>;
  }

  return ( 
    <svg width="300" height="200" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="metalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E3A8A" />
          <stop offset="50%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#1E3A8A" />
        </linearGradient>
        <linearGradient id="moldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#065F46" />
          <stop offset="100%" stopColor="#047857" />
        </linearGradient>
        <filter id="shadow">
          <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.3" />
        </filter>
      </defs>
      <style>
        {`
          @keyframes inject {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(-20px); }
          }
          @keyframes mold {
            0%, 20%, 80%, 100% { transform: scaleY(1); }
            50% { transform: scaleY(0.98); }
          }
          @keyframes flow {
            0%, 100% { stopColor: #93C5FD; }
            50% { stopColor: #EF4444; }
          }
        `}
      </style>
      
      {/* Machine base */}
      <rect x="10" y="150" width="280" height="50" fill="url(#metalGradient)" filter="url(#shadow)" />
      
      {/* Injection unit */}
      <g className={styles.injectionUnit}>
        <rect x="10" y="70" width="120" height="80" fill="url(#metalGradient)" filter="url(#shadow)" />
        <circle cx="70" cy="110" r="30" fill="#065F46" stroke="#047857" strokeWidth="2" />
        <path d="M40 110 L100 110" stroke="#047857" strokeWidth="4" />
      </g>
      
      {/* Mold unit */}
      <g className={styles.moldUnit}>
        <rect x="130" y="60" width="160" height="90" fill="url(#metalGradient)" filter="url(#shadow)" />
        <rect x="140" y="70" width="140" height="70" fill="#065F46" />
        <rect x="150" y="80" width="120" height="50" fill="url(#moldGradient)" className={styles.mold} />
      </g>
      
      {/* Injection nozzle */}
      <path d="M130 110 L150 110" stroke="url(#flowGradient)" strokeWidth="6" strokeLinecap="round">
        <animate attributeName="stroke-opacity" values="0;1;0" dur={`${data.cycleTime}s`} repeatCount="indefinite" />
      </path>
      <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#93C5FD">
          <animate attributeName="stopColor" values="#93C5FD;#EF4444;#93C5FD" dur={`${data.cycleTime}s`} repeatCount="indefinite" />
        </stop>
        <stop offset="100%" stopColor="#93C5FD">
          <animate attributeName="stopColor" values="#93C5FD;#EF4444;#93C5FD" dur={`${data.cycleTime}s`} repeatCount="indefinite" />
        </stop>
      </linearGradient>
      
      {/* Gauges */}
      <g transform="translate(220, 20)">
        <circle cx="0" cy="0" r="15" fill="#065F46" stroke="#047857" strokeWidth="2" />
        <path d={`M 0 0 L ${Math.cos(data.temperature/400*Math.PI)*12} ${-Math.sin(data.temperature/400*Math.PI)*12}`} stroke="#EF4444" strokeWidth="2" />
        <text x="0" y="20" textAnchor="middle" fill="#F0FDF4" fontSize="10">{`${data.temperature}°C`}</text>
      </g>
      <g transform="translate(260, 20)">
        <circle cx="0" cy="0" r="15" fill="#065F46" stroke="#047857" strokeWidth="2" />
        <path d={`M 0 0 L ${Math.cos(data.pressure/200*Math.PI)*12} ${-Math.sin(data.pressure/200*Math.PI)*12}`} stroke="#3B82F6" strokeWidth="2" />
        <text x="0" y="20" textAnchor="middle" fill="#F0FDF4" fontSize="10">{`${data.pressure} Bar`}</text>
      </g>
      
      {/* Cycle time */}
      <text x="10" y="20" fill="#F0FDF4" fontSize="12">{`Cycle Time: ${data.cycleTime}s`}</text>
  
      {/* Additional details for realism */}
      <line x1="10" y1="150" x2="290" y2="150" stroke="#047857" strokeWidth="2" />
      <circle cx="25" cy="175" r="8" fill="#FCD34D" /> {/* Wheel or foot */}
      <circle cx="275" cy="175" r="8" fill="#FCD34D" /> {/* Wheel or foot */}
      <rect x="45" y="85" width="50" height="10" fill="#FCD34D" rx="2" /> {/* Control panel */}
      <rect x="240" y="75" width="40" height="20" fill="#FCD34D" rx="2" /> {/* Additional control */}
    </svg>
  );
};

const getStyles = (data: InjectionMoldingData) => (theme: GrafanaTheme2) => ({
  injectionUnit: css`
    animation: inject ${data.cycleTime}s ease-in-out infinite;
  `,
  moldUnit: css`
    animation: mold ${data.cycleTime}s ease-in-out infinite;
  `,
  mold: css`
    animation: mold ${data.cycleTime}s ease-in-out infinite;
  `,
});

export const injectionMoldingItem: CanvasElementItem<InjectionMoldingConfig> = {
  id: 'injectionMolding',
  name: 'Injection Molding Machine',
  description: 'Animated injection molding machine with real-time parameters',

  display: InjectionMoldingDisplay,

  defaultSize: {
    width: 300,
    height: 200,
  },

  getNewOptions: (options) => ({
    ...options,
    config: {
      ...options?.config,
      cycleTime: { fixed: 10 },
      temperature: { fixed: 200 },
      pressure: { fixed: 50 },
    },
    background: {
      color: {
        fixed: 'transparent',
      },
    },
  }),

  prepareData: (ctx: DimensionContext, cfg: CanvasElementOptions<InjectionMoldingConfig>) => {
    const data: InjectionMoldingData = {
      cycleTime: cfg.config?.cycleTime ? ctx.getScalar(cfg.config.cycleTime).value() : 10,
      temperature: cfg.config?.temperature ? ctx.getScalar(cfg.config.temperature).value() : 200,
      pressure: cfg.config?.pressure ? ctx.getScalar(cfg.config.pressure).value() : 50,
    };

    return data;
  },

  registerOptionsUI: (builder) => {
    const category = ['Injection Molding Machine'];
    builder.addCustomEditor({
      category,
      id: 'cycleTime',
      path: 'config.cycleTime',
      name: 'Cycle Time',
      editor: ScalarDimensionEditor,
    });
    builder.addCustomEditor({
      category,
      id: 'temperature',
      path: 'config.temperature',
      name: 'Temperature',
      editor: ScalarDimensionEditor,
    });
    builder.addCustomEditor({
      category,
      id: 'pressure',
      path: 'config.pressure',
      name: 'Pressure',
      editor: ScalarDimensionEditor,
    });
  },
};

export default injectionMoldingItem;