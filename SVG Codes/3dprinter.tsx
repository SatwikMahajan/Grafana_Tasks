import React from 'react';
import { css, keyframes } from '@emotion/react';
import { GrafanaTheme2, LinkModel } from '@grafana/data';
import { ScalarDimensionConfig } from '@grafana/schema';
import { useStyles2 } from '@grafana/ui';
import { DimensionContext } from 'app/features/dimensions';
import { ScalarDimensionEditor } from 'app/features/dimensions/editors';
import { CanvasElementItem, CanvasElementOptions, CanvasElementProps } from '../element';

// Define the data and configuration types
interface ThreeDPrinterData {
  speed?: number;
  links?: LinkModel[];
}

interface ThreeDPrinterConfig {
  speed?: ScalarDimensionConfig;
}

// Define keyframes for the animation
const printingAnimation = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(-80px); }
`;

// Component for the 3D Printer Display
const ThreeDPrinterDisplay: React.FC<CanvasElementProps<ThreeDPrinterConfig, ThreeDPrinterData>> = ({ data }) => {
  const styles = useStyles2(getStyles);
  
  const animationDuration = data?.speed ? 10 / Math.abs(data.speed) : 5;

  return (
    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 396.007 396.007" xmlSpace="preserve" width="200px" height="200px" fill="#000000" className={styles.printer}>
      {/* Original SVG content */}
      <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
      <g id="SVGRepo_iconCarrier">
        <g>
          <rect x="258.454" y="67.511" style={{ fill: '#638591' }} width="80.667" height="33.333"/>
          <rect x="339.121" y="67.511" style={{ fill: '#99B5C4' }} width="22.126" height="33.333"/>
          <rect x="15.004" y="67.512" style={{ fill: '#4D4D4D' }} width="167.99" height="221.99"/>
          <path style={{ fill: '#EF7954' }} d="M247.454,128.242h-7v-7.296c0-8.659-7.045-15.704-15.704-15.704h-35.592c-12.52,0-22.704-10.185-22.704-22.704V67.511h7v15.027c0,8.659,7.045,15.704,15.704,15.704h35.592c12.52,0,22.704,10.185,22.704,22.704V128.242z"/>
          <path style={{ fill: '#F9ED82' }} d="M264.454,128.242h-7v-21.296c0-8.659-7.045-15.704-15.704-15.704h-2.176c-12.52,0-22.704-10.185-22.704-22.704V53.511h7v15.027c0,8.659,7.045,15.704,15.704,15.704h2.176c12.52,0,22.704,10.185,22.704,22.704V128.242z"/>
          <rect x="321.913" y="100.844" style={{ fill: '#1a7edb' }} width="13.333" height="59.333"/>
          <rect x="275.662" y="100.844" style={{ fill: '#1a7edb' }} width="46.251" height="59.333"/>
          <path style={{ fill: '#CCCCCC' }} d="M298.787,148.908h-195c-3.13,0-5.667-2.537-5.667-5.667v0c0-3.13,2.537-5.667,5.667-5.667h195c3.13,0,5.667,2.537,5.667,5.667v0C304.454,146.371,301.917,148.908,298.787,148.908z"/>
          <rect x="0" y="304.498" style={{ fill: '#1a7edb' }} width="395.98" height="23.143"/>
          <rect x="197.99" y="304.498" style={{ fill: '#0c3264' }} width="197.99" height="23.143"/>
          <polygon style={{ fill: '#1a7edb' }} points="55.497,327.642 0,327.642 11.587,368.995 43.91,368.995"/>
          <polygon style={{ fill: '#1a7edb' }} points="223.86,327.642 168.362,327.642 179.95,368.995 212.272,368.995"/>
          <polygon style={{ fill: '#1a7edb' }} points="396.007,327.642 340.51,327.642 352.097,368.995 384.42,368.995"/>
          <rect x="52.657" y="265.575" style={{ fill: '#E6E6E6' }} width="290.667" height="23.923"/>
          <rect x="52.657" y="265.575" style={{ fill: '#B3B3B3' }} width="136.797" height="23.923"/>
          <polygon style={{ fill: '#0c3264' }} points="197.99,327.642 197.99,368.995 212.272,368.995 223.886,327.642"/>
          <polygon style={{ fill: '#1a7edb' }} points="29.601,327.642 29.601,368.995 43.883,368.995 55.497,327.642"/>
          <polygon style={{ fill: '#0c3264' }} points="370.111,327.642 370.111,368.995 384.393,368.995 396.007,327.642"/>
          <rect x="58.662" y="67.511" style={{ fill: '#638591' }} width="80.667" height="33.333"/>
          <rect x="122.121" y="100.844" style={{ fill: '#1a7edb' }} width="13.333" height="59.333"/>
          <rect x="75.87" y="100.844" style={{ fill: '#1a7edb' }} width="46.251" height="59.333"/>
          <rect x="139.328" y="67.511" style={{ fill: '#99B5C4' }} width="22.126" height="33.333"/>
          <rect x="245.454" y="128.242" style={{ fill: '#0c3264' }} width="40.667" height="36.667"/>
          <rect x="228.787" y="128.242" style={{ fill: '#1a7edb' }} width="20.333" height="36.667"/>
          <path style={{ fill: '#CCCCCC' }} d="M237.454,148.908h-12.333c-3.13,0-5.667-2.537-5.667-5.667v0c0-3.13,2.537-5.667,5.667-5.667h12.333c3.13,0,5.667,2.537,5.667,5.667v0C243.121,146.371,240.584,148.908,237.454,148.908z"/>
          <g>
            <rect x="239.954" y="164.908" style={{ fill: '#99B5C4' }} width="35.5" height="28.833"/>
            <rect x="239.954" y="164.908" style={{ fill: '#638591' }} width="15" height="28.833"/>
          </g>
          <rect x="251.704" y="193.742" style={{ fill: '#99B5C4' }} width="12" height="10"/>
          <polygon style={{ fill: '#EF7954' }} points="305.994,265.572 89.994,265.572 115.954,229.242 280.024,229.242"/>
          <polygon style={{ fill: '#D3674A' }} points="197.994,229.242 197.994,265.572 89.994,265.572 115.954,229.242"/>
          <path style={{ fill: '#EF7954' }} d="M241.379,232.742h-43.385v-7h43.385c6.75,0,12.242-5.492,12.242-12.242v-9.758h7v9.758C260.621,224.11,251.989,232.742,241.379,232.742z"/>
          <path style={{ fill: '#0c3264' }} d="M197.99,27.012v277.486h197.99V27.012H197.99z M380.98,289.498H212.99V67.511h167.99V289.498z"/>
          <path style={{ fill: '#1a7edb' }} d="M0,27.012v277.486h197.99V27.012H0z M182.99,289.498H15V67.511h167.99V289.498z"/>
          <g>
            <polygon style={{ opacity: 0.49, fill: '#F2F2F2' }} points="15.004,67.512 15.004,170.922 118.414,67.512"/>
            <polygon style={{ opacity: 0.49, fill: '#F2F2F2' }} points="93.124,289.502 182.994,289.502 182.994,199.632"/>
            <polygon style={{ opacity: 0.49, fill: '#F2F2F2' }} points="15.004,274.622 15.004,289.502 46.274,289.502 182.994,152.782 182.994,106.632"/>
          </g>
        </g>
      </g>
    </svg>
  );
};

// Configuration for the 3D Printer item
export const threeDPrinterItem: CanvasElementItem<ThreeDPrinterConfig> = {
  id: 'threeDPrinter',
  name: '3D Printer',
  description: '3D printer with an integrated SVG and animation',
  display: ThreeDPrinterDisplay,
  defaultSize: {
    width: 200,
    height: 200,
  },
  getNewOptions: (options) => ({
    ...options,
    config: {
      ...options?.config,
      speed: { fixed: 0.5 },
    },
    background: {
      color: {
        fixed: 'transparent',
      },
    },
  }),
  prepareData: (ctx: DimensionContext, cfg: CanvasElementOptions<ThreeDPrinterConfig>) => {
    const data: ThreeDPrinterData = {
      speed: cfg.config?.speed ? ctx.getScalar(cfg.config.speed).value() : 0.5,
    };
    return data;
  },
  registerOptionsUI: (builder) => {
    const category = ['3D Printer'];
    builder.addCustomEditor({
      category,
      id: 'speed',
      path: 'config.speed',
      name: 'Speed',
      editor: ScalarDimensionEditor,
    });
  },
};

// Styles for the component
const getStyles = (theme: GrafanaTheme2) => ({
  printer: css`
    width: 100%;
    height: auto;
  `,
});

export default threeDPrinterItem;
