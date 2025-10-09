import React from 'react';
import { css } from '@emotion/css';
import { GrafanaTheme2 } from '@grafana/data';
import { ScalarDimensionConfig } from '@grafana/schema';
import { useStyles2 } from '@grafana/ui';
import { DimensionContext } from 'app/features/dimensions';
import { ScalarDimensionEditor } from 'app/features/dimensions/editors';
import { CanvasElementItem, CanvasElementOptions, CanvasElementProps } from '../element';

interface PickAndPlaceData {
  speed: number;
  componentCount: number;
}

interface PickAndPlaceConfig {
  speed?: ScalarDimensionConfig;
  componentCount?: ScalarDimensionConfig;
}

const PickAndPlaceDisplay: React.FC<CanvasElementProps<PickAndPlaceConfig, PickAndPlaceData>> = ({ data }) => {
  const styles = useStyles2(getStyles(data ?? { speed: 1, componentCount: 0 }));

  return (
    <svg width="300" height="200" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="metalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B8B8B8" />
          <stop offset="50%" stopColor="#E8E8E8" />
          <stop offset="100%" stopColor="#B8B8B8" />
        </linearGradient>
        <filter id="shadow">
          <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.3" />
        </filter>
      </defs>
      
      {/* Base */}
      <rect x="10" y="180" width="280" height="20" fill="url(#metalGradient)" filter="url(#shadow)" />
      
      {/* Vertical support */}
      <rect x="20" y="20" width="20" height="160" fill="url(#metalGradient)" filter="url(#shadow)" />
      
      {/* Horizontal arm */}
      <rect x="20" y="20" width="260" height="15" fill="url(#metalGradient)" filter="url(#shadow)" />
      
      {/* Vertical arm */}
      <rect x="140" y="35" width="10" height="80" fill="url(#metalGradient)" filter="url(#shadow)" />
      
      {/* Gripper */}
      <g className={styles.gripper}>
        <path d="M135 115 L140 125 L155 125 L160 115 Z" fill="#666" filter="url(#shadow)" />
        <rect x="138" y="125" width="4" height="10" fill="#666" className={styles.gripperLeft} />
        <rect x="153" y="125" width="4" height="10" fill="#666" className={styles.gripperRight} />
      </g>
      
      {/* Component beneath the moving jaw */}
      <rect x="140" y="140" width="20" height="10" fill="#ddd" stroke="#999" />
      
      {/* Component source */}
      <rect x="10" y="150" width="50" height="30" fill="#ddd" stroke="#999" />
      
      {/* PCB */}
      <rect x="240" y="150" width="50" height="30" fill="#1a5f7a" stroke="#0c2d3a" />
      
      {/* Component count */}
      <text x="245" y="145" fill="white" fontSize="12">{`Components: ${data?.componentCount ?? 0}`}</text>
    </svg>
  );
};

const getStyles = (data: PickAndPlaceData) => (theme: GrafanaTheme2) => {
  const animationDuration = 5 / data.speed; // Adjusted for smoother animation
  return {
    gripper: css`
      @keyframes moveY {
        0% { transform: translateY(0); }
        50% { transform: translateY(20px); }
        100% { transform: translateY(0); }
      }
      animation: moveY ${animationDuration}s ease-in-out infinite;
      transform-origin: center bottom;
    `,
    gripperLeft: css`
      @keyframes grab {
        0% { transform: scaleY(1); }
        50% { transform: scaleY(0.8); }
        100% { transform: scaleY(1); }
      }
      animation: grab ${animationDuration / 2}s ease-in-out infinite;
      transform-origin: top right;
    `,
    gripperRight: css`
      @keyframes grab {
        0% { transform: scaleY(1); }
        50% { transform: scaleY(0.8); }
        100% { transform: scaleY(1); }
      }
      animation: grab ${animationDuration / 2}s ease-in-out infinite;
      transform-origin: top left;
    `,
  };
};

export const pickAndPlaceItem: CanvasElementItem<PickAndPlaceConfig> = {
  id: 'pickAndPlace',
  name: 'Pick and Place Machine',
  description: 'Animated pick and place machine for electronics assembly',

  display: PickAndPlaceDisplay,

  defaultSize: {
    width: 300,
    height: 200,
  },

  getNewOptions: (options) => ({
    ...options,
    config: {
      ...options?.config,
      speed: { fixed: 1 },
      componentCount: { fixed: 0 },
    },
    background: {
      color: {
        fixed: 'transparent',
      },
    },
  }),

  prepareData: (ctx: DimensionContext, cfg: CanvasElementOptions<PickAndPlaceConfig>) => {
    const data: PickAndPlaceData = {
      speed: cfg.config?.speed ? ctx.getScalar(cfg.config.speed).value() : 1,
      componentCount: cfg.config?.componentCount ? ctx.getScalar(cfg.config.componentCount).value() : 0,
    };

    return data;
  },

  registerOptionsUI: (builder) => {
    const category = ['Pick and Place Machine'];
    builder.addCustomEditor({
      category,
      id: 'speed',
      path: 'config.speed',
      name: 'Speed',
      editor: ScalarDimensionEditor,
    });
    builder.addCustomEditor({
      category,
      id: 'componentCount',
      path: 'config.componentCount',
      name: 'Component Count',
      editor: ScalarDimensionEditor,
    });
  },
};

export default pickAndPlaceItem;
