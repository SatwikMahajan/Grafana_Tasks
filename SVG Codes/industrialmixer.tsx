import React from 'react';
import { css } from '@emotion/css';
import { GrafanaTheme2, LinkModel } from '@grafana/data';
import { ScalarDimensionConfig } from '@grafana/schema';
import { useStyles2 } from '@grafana/ui';
import { DimensionContext } from 'app/features/dimensions';
import { ScalarDimensionEditor } from 'app/features/dimensions/editors';
import { CanvasElementItem, CanvasElementOptions, CanvasElementProps, defaultBgColor } from '../element';

interface IndustrialMixerData {
  speed?: number;
  links?: LinkModel[];
}

interface IndustrialMixerConfig {
  speed?: ScalarDimensionConfig;
}

const IndustrialMixerDisplay: React.FC<CanvasElementProps<IndustrialMixerConfig, IndustrialMixerData>> = ({ data }) => {
  const styles = useStyles2(getStyles);

  const mixingSpeed = data?.speed ? Math.abs(data.speed) : 1;
  const animationDuration = 5 / mixingSpeed; // Adjust base speed as needed

  return (
    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Base */}
      <rect x="25" y="170" width="150" height="20" fill="#444444" />
      
      {/* Main body */}
      <path d="M40 170 L60 50 H140 L160 170 Z" fill="#888888" stroke="#666666" strokeWidth="2" />
      
      {/* Lid */}
      <path d="M55 50 Q100 30 145 50" fill="none" stroke="#666666" strokeWidth="3" />
      
      {/* Control panel */}
      <rect x="85" y="120" width="30" height="40" fill="#333333" stroke="#222222" strokeWidth="2" />
      <circle cx="100" cy="140" r="6" fill="#ff0000" /> {/* Power button */}
      <rect x="90" y="150" width="20" height="10" fill="#cccccc" /> {/* Display */}
      
      {/* Mixing shaft */}
      <line x1="100" y1="50" x2="100" y2="110" stroke="#999999" strokeWidth="4" />
      
      {/* Mixing arms */}
      <g className={styles.mixingArms} style={{ animation: `${animationDuration}s linear infinite mixingAnimation` }}>
        <line x1="100" y1="100" x2="85" y2="115" stroke="#999999" strokeWidth="4" />
        <line x1="100" y1="100" x2="115" y2="115" stroke="#999999" strokeWidth="4" />
      </g>
      
      {/* Content (simplified representation) */}
      <path d="M60 170 Q100 150 140 170" fill="#aaddff" opacity="0.6" />
    </svg>
  );
};

export const industrialMixerItem: CanvasElementItem<IndustrialMixerConfig> = {
  id: 'industrialMixer',
  name: 'Industrial Mixer',
  description: 'Animated industrial mixer with adjustable speed',

  display: IndustrialMixerDisplay,

  defaultSize: {
    width: 200,
    height: 200,
  },

  getNewOptions: (options) => ({
    ...options,
    config: {
      ...options?.config,
      speed: { fixed: 1 },
    },
    background: {
      color: {
        fixed: 'transparent',
      },
    },
  }),

  prepareData: (ctx: DimensionContext, cfg: CanvasElementOptions<IndustrialMixerConfig>) => {
    const data: IndustrialMixerData = {
      speed: cfg.config?.speed ? ctx.getScalar(cfg.config.speed).value() : 1,
    };

    return data;
  },

  registerOptionsUI: (builder) => {
    const category = ['Industrial Mixer'];
    builder.addCustomEditor({
      category,
      id: 'speed',
      path: 'config.speed',
      name: 'Mixing Speed',
      description: 'Set the speed of the mixing arms',
      editor: ScalarDimensionEditor,
    });
  },
};

const getStyles = (theme: GrafanaTheme2) => ({
  mixingArms: css`
    transform-origin: 100px 100px;
    @keyframes mixingAnimation {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
  `,
});

export default industrialMixerItem;
