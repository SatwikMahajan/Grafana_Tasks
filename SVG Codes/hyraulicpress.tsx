import { css } from '@emotion/css';
import React from 'react';
import { GrafanaTheme2, LinkModel, OneClickMode } from '@grafana/data';
import { ScalarDimensionConfig } from '@grafana/schema';
import { useStyles2 } from '@grafana/ui';
import { DimensionContext } from 'app/features/dimensions';
import { ScalarDimensionEditor } from 'app/features/dimensions/editors';

import { CanvasElementItem, CanvasElementOptions, CanvasElementProps } from '../element';

interface HydraulicPressData {
  pressSpeed?: number;
  links?: LinkModel[];
}

interface HydraulicPressConfig {
  pressSpeed?: ScalarDimensionConfig;
}

const HydraulicPressDisplay = ({ data }: CanvasElementProps<HydraulicPressConfig, HydraulicPressData>) => {
  const styles = useStyles2(getStyles);

  const pressAnimation = `press ${data?.pressSpeed ? data.pressSpeed : 5}s ease-in-out infinite`;

  return (
    <svg viewBox="0 0 200 300" preserveAspectRatio="xMidYMid meet" style={{ fill: 'blue' }}>
      <g id="hydraulic-press">
        {/* Base */}
        <rect x="10" y="270" width="180" height="30" fill="#4D4D4D" />
        
        {/* Columns */}
        <rect x="20" y="50" width="20" height="220" fill="#808080" />
        <rect x="160" y="50" width="20" height="220" fill="#808080" />
        
        {/* Top Beam */}
        <rect x="10" y="20" width="180" height="30" fill="#4D4D4D" />
        
        {/* Hydraulic Cylinder */}
        <rect x="70" y="50" width="60" height="100" fill="#FFD700" />
        <g className={styles.blackStripes}>
          <rect x="70" y="55" width="60" height="10" fill="#000" />
          <rect x="70" y="75" width="60" height="10" fill="#000" />
          <rect x="70" y="95" width="60" height="10" fill="#000" />
          <rect x="70" y="115" width="60" height="10" fill="#000" />
          <rect x="70" y="135" width="60" height="10" fill="#000" />
        </g>
        
        {/* Piston */}
        <g className={styles.piston} style={{ animation: pressAnimation }}>
          <rect x="80" y="150" width="40" height="100" fill="#555555" />
          <rect x="70" y="250" width="60" height="20" fill="#A9A9A9" />
        </g>
        
        {/* Work Piece */}
        <rect x="60" y="260" width="80" height="10" fill="#B22222" />
      </g>
    </svg>
  );
};

export const hydraulicPressItem: CanvasElementItem = {
  id: 'hydraulicPress',
  name: 'Hydraulic Press',
  description: 'Pressing up and down',

  display: HydraulicPressDisplay,

  defaultSize: {
    width: 100,
    height: 150,
  },

  getNewOptions: (options) => ({
    ...options,
    background: {
      color: {
        fixed: 'transparent',
      },
    },
    placement: {
      width: options?.placement?.width ?? 100,
      height: options?.placement?.height ?? 150,
      top: options?.placement?.top,
      left: options?.placement?.left,
      rotation: options?.placement?.rotation ?? 0,
    },
    oneClickMode: options?.oneClickMode ?? OneClickMode.Off,
    links: options?.links ?? [],
  }),

  prepareData: (dimensionContext: DimensionContext, elementOptions: CanvasElementOptions<HydraulicPressConfig>) => {
    const hydraulicPressConfig = elementOptions.config;

    const data: HydraulicPressData = {
      pressSpeed: hydraulicPressConfig?.pressSpeed ? dimensionContext.getScalar(hydraulicPressConfig.pressSpeed).value() : 5,
    };

    return data;
  },

  registerOptionsUI: (builder) => {
    const category = ['Hydraulic Press'];
    builder.addCustomEditor({
      category,
      id: 'pressSpeed',
      path: 'config.pressSpeed',
      name: 'Press Speed (seconds)',
      editor: ScalarDimensionEditor,
    });
  },
};

const getStyles = (theme: GrafanaTheme2) => ({
  piston: css({
    animation: 'press 5s ease-in-out infinite',
    transformOrigin: 'center bottom',
    '@keyframes press': {
      '0%, 100%': {
        transform: 'translateY(0)',
      },
      '50%': {
        transform: 'translateY(50px)',
      },
    },
  }),
  blackStripes: css({
    '& rect': {
      fill: '#000',
    },
  }),
});
