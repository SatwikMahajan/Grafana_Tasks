import React from 'react';
import { css, keyframes } from '@emotion/css';
import { GrafanaTheme2 } from '@grafana/data';
import { ScalarDimensionConfig } from '@grafana/schema';
import { useStyles2 } from '@grafana/ui';
import { DimensionContext } from 'app/features/dimensions';
import { ScalarDimensionEditor } from 'app/features/dimensions/editors';
import { CanvasElementItem, CanvasElementOptions, CanvasElementProps } from '../element';

interface ConveyorBeltData {
  speed: number;
  boxCount: number;
}

interface ConveyorBeltConfig {
  speed?: ScalarDimensionConfig;
  boxCount?: ScalarDimensionConfig;
}

const ConveyorBeltDisplay: React.FC<CanvasElementProps<ConveyorBeltConfig, ConveyorBeltData>> = ({ data }) => {
  const defaultData: ConveyorBeltData = { speed: 1, boxCount: 3 };
  const safeData = data ?? defaultData;
  const styles = useStyles2(getStyles(safeData));

  const renderBoxes = () => {
    const boxes: JSX.Element[] = [];
    for (let i = 0; i < safeData.boxCount; i++) {
      boxes.push(
        <g key={`box-${i}`} className={styles.box} style={{ animationDelay: `${i * (10 / safeData.boxCount)}s` }}>
          <rect x="0" y="0" width="40" height="30" fill={i % 2 === 0 ? '#FF6347' : '#FFD700'} />
          <rect x="0" y="0" width="40" height="30" fill="url(#boxTopGradient)" />
          <rect x="0" y="30" width="40" height="10" fill="#5D2E0C" />
        </g>
      );
    }
    return boxes;
  };

  return (
    <svg width="400" height="200" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="beltGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0099FF" />
          <stop offset="50%" stopColor="#66CCFF" />
          <stop offset="100%" stopColor="#0099FF" />
        </linearGradient>
        <linearGradient id="boxTopGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A0522D" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#8B4513" stopOpacity="0.1" />
        </linearGradient>
        <pattern id="beltPattern" patternUnits="userSpaceOnUse" width="20" height="20">
          <rect width="20" height="20" fill="url(#beltGradient)" />
          <line x1="0" y1="0" x2="20" y2="20" stroke="#555" strokeWidth="1" />
          <line x1="20" y1="0" x2="0" y2="20" stroke="#555" strokeWidth="1" />
        </pattern>
      </defs>

      {/* Conveyor frame */}
      <rect x="20" y="100" width="360" height="60" fill="#333" />
      
      {/* Conveyor belt */}
      <g className={styles.belt}>
        <rect x="30" y="110" width="340" height="40" fill="url(#beltPattern)" />
      </g>

      {/* Rollers */}
      <circle cx="30" cy="130" r="20" fill="#555" />
      <circle cx="370" cy="130" r="20" fill="#555" />

      {/* Boxes */}
      <g className={styles.boxContainer}>
        {renderBoxes()}
      </g>

      {/* Frame details */}
      <rect x="10" y="160" width="380" height="10" fill="#444" />
      <rect x="20" y="170" width="10" height="30" fill="#444" />
      <rect x="370" y="170" width="10" height="30" fill="#444" />

      {/* Speed indicator */}
      <text x="20" y="30" fill="white" fontSize="14">{`Speed: ${safeData.speed.toFixed(1)} m/s`}</text>
      
      {/* Box count */}
      <text x="20" y="50" fill="white" fontSize="14">{`Boxes: ${safeData.boxCount}`}</text>
    </svg>
  );
};

const moveBox = keyframes`
  0% { transform: translateX(-50px); }
  100% { transform: translateX(350px); }
`;

const moveBelt = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-20px); }
`;

const getStyles = (data: ConveyorBeltData) => (theme: GrafanaTheme2) => {
  const animationDuration = 10 / data.speed;
  return {
    belt: css`
      animation: ${moveBelt} ${animationDuration}s linear infinite;
    `,
    boxContainer: css`
      transform: translateY(75px);
    `,
    box: css`
      animation: ${moveBox} ${animationDuration}s linear infinite;
      fill: #FF6347; /* Initial color */
      animation: ${moveBox} ${animationDuration}s linear infinite, changeColor ${animationDuration / 2}s infinite alternate;
    `,
  };
};

const changeColor = keyframes`
  0% { fill: #FF6347; }
  100% { fill: #FFD700; }
`;

export const conveyorBeltNewUniqueItem: CanvasElementItem<ConveyorBeltConfig> = {
  id: 'conveyorBeltNewUnique',
  name: 'Conveyor Belt New Unique',
  description: 'Animated conveyor belt with moving boxes (new unique version)',

  display: ConveyorBeltDisplay,

  defaultSize: {
    width: 400,
    height: 200,
  },

  getNewOptions: (options) => ({
    ...options,
    config: {
      ...options?.config,
      speed: { fixed: 1 },
      boxCount: { fixed: 3 },
    },
    background: {
      color: {
        fixed: 'transparent',
      },
    },
  }),

  prepareData: (ctx: DimensionContext, cfg: CanvasElementOptions<ConveyorBeltConfig>) => {
    const data: ConveyorBeltData = {
      speed: cfg.config?.speed ? ctx.getScalar(cfg.config.speed).value() : 1,
      boxCount: cfg.config?.boxCount ? Math.round(ctx.getScalar(cfg.config.boxCount).value()) : 3,
    };

    return data;
  },

  registerOptionsUI: (builder) => {
    const category = ['Conveyor Belt New Unique'];
    builder.addCustomEditor({
      category,
      id: 'speed',
      path: 'config.speed',
      name: 'Speed (m/s)',
      editor: ScalarDimensionEditor,
    });
    builder.addCustomEditor({
      category,
      id: 'boxCount',
      path: 'config.boxCount',
      name: 'Number of Boxes',
      editor: ScalarDimensionEditor,
    });
  },
};

export default conveyorBeltNewUniqueItem;
