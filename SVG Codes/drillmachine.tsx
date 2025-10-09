import React from 'react';
import { css, keyframes } from '@emotion/css';
import { GrafanaTheme2 } from '@grafana/data';
import { useStyles2 } from '@grafana/ui';
import { CanvasElementItem, CanvasElementProps } from '../element';

interface DrillMachineConfig {
  animationSpeed: number;
}

interface DrillMachineData {
  animationSpeed: number;
}

const DrillMachineDisplay: React.FC<CanvasElementProps<DrillMachineConfig, DrillMachineData>> = ({ data }) => {
  const styles = useStyles2(getStyles, data);

  return (
    <div className={styles.container}>
      <svg
        className={styles.svg}
        viewBox="0 0 446.88 446.88"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <polygon style={{fill:'#4c3c10'}} points="374.248,157.145 374.248,8.652 202.633,8.652 202.633,157.145 305.875,157.145 305.875,157.145"/>
          <rect x="134.26" y="157.145" style={{fill:'#738B93'}} width="68.373" height="239.082"/>
          <rect x="219.325" y="8.652" style={{fill:'#2e43ad'}} width="196.92" height="127.494"/>
          <g className={styles.drill}>
            <rect x="361.172" y="219.004" style={{fill:'#2e43ad'}} width="18.234" height="88.253"/>
            <polygon style={{fill:'#772f09'}} points="384.876,228.317 357.16,220.098 357.16,172.568 384.876,172.568"/>
            <polygon style={{fill:'#772f09'}} points="384.876,250.958 357.16,242.739 357.16,226.497 384.876,234.716"/>
            <polygon style={{fill:'#772f09'}} points="384.876,273.599 357.16,265.379 357.16,249.137 384.876,257.356"/>
            <polygon style={{fill:'#772f09'}} points="384.876,296.239 357.16,288.02 357.16,271.778 384.876,279.997"/>
            <polygon style={{fill:'#772f09'}} points="384.876,318.88 371.018,331.083 357.16,318.88 357.16,294.419 384.876,302.638"/>
          </g>
          <rect x="346.775" y="136.146" style={{fill:'#772f09'}} width="52.343" height="50.544"/>
          <rect x="303.832" y="72.399" style={{fill:'#772f09'}} width="138.23" height="63.747"/>
          <polygon style={{fill:'#707ac7'}} points="416.246,8.652 278.016,8.652 303.832,72.399 442.062,72.399"/>
          <rect x="346.775" y="136.146" style={{fill:'#2e43ad'}} width="16.736" height="50.544"/>
          <path style={{fill:'#697bc3'}} d="M134.26,396.227V157.145h68.373V8.652h-83.279C63.162,8.652,17.61,54.205,17.61,110.396v327.828 h259.143v-41.998H134.26z"/>
          <rect x="134.26" y="157.145" style={{fill:'#2e43ad'}} width="171.615" height="239.082"/>
          <rect x="276.753" y="396.227" style={{fill:'#4c3c10'}} width="170.124" height="41.998"/>
          <g>
            <circle style={{fill:'#214e04'}} cx="79.744" cy="213.61" r="31.112"/>
            <path style={{fill:'#214e04'}} d="M79.744,289.877c-19.542,0-39.077-7.436-53.955-22.313C11.378,253.152,3.441,233.991,3.441,213.61 s7.937-39.543,22.348-53.954c29.751-29.751,78.159-29.75,107.91-0.001v0.001c14.411,14.412,22.348,33.573,22.348,53.954 s-7.937,39.542-22.348,53.954C118.825,282.437,99.282,289.877,79.744,289.877z M79.744,158.682 c-14.073,0-28.146,5.357-38.858,16.07c-10.38,10.379-16.096,24.18-16.096,38.858s5.716,28.479,16.096,38.858 c21.425,21.428,56.291,21.427,77.716,0.001c10.38-10.38,16.096-24.18,16.096-38.858s-5.716-28.479-16.096-38.859 C107.89,164.039,93.817,158.682,79.744,158.682z"/>
            <path style={{fill:'#214e04'}} d="M155.783,289.649L155.783,289.649c-4.941,4.941-12.951,4.941-17.891,0L3.705,155.462 c-4.941-4.941-4.941-12.951,0-17.891l0,0c4.941-4.941,12.951-4.941,17.891,0l134.186,134.186 C160.724,276.698,160.724,284.708,155.783,289.649z"/>
            <path style={{fill:'#214e04'}} d="M3.705,289.649L3.705,289.649c-4.941-4.941-4.941-12.951,0-17.891l134.186-134.186 c4.941-4.941,12.951-4.941,17.891,0l0,0c4.941,4.941,4.941,12.951,0,17.891L21.597,289.649 C16.656,294.589,8.646,294.589,3.705,289.649z"/>
          </g>
          <rect x="197.835" y="251.64" style={{fill:'#772f09'}} width="44.465" height="144.587"/>
          <rect x="205.217" y="266.639" style={{fill:'#4c3c10'}} width="29.7" height="20.573"/>
          <rect x="205.217" y="300.306" style={{fill:'#4c3c10'}} width="29.7" height="20.573"/>
          <rect x="205.217" y="333.973" style={{fill:'#4c3c10'}} width="29.7" height="20.573"/>
          <rect x="236.035" y="47.879" style={{fill:'#214e04'}} width="30" height="64"/>
          <rect x="243.035" y="54.879" style={{fill:'#D3674A'}} width="16" height="50"/>
          <rect x="266.035" y="47.879" style={{fill:'#697bc3'}} width="7.333" height="64"/>
          <rect x="230.599" y="370.134" style={{fill:'#214e04'}} width="187.491" height="26.092"/>
          <rect x="331.094" y="370.134" style={{fill:'#697bc3'}} width="86.996" height="26.092"/>
        </g>
      </svg>
    </div>
  );
};

const drillAnimation = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
`;

const getStyles = (theme: GrafanaTheme2, data: DrillMachineData | undefined) => {
  const animationSpeed = data?.animationSpeed ?? 1;
  return {
    container: css`
      width: 100%;
      height: 100%;
    `,
    svg: css`
      width: 100%;
      height: 100%;
    `,
    drill: css`
      animation: ${drillAnimation} ${2 / animationSpeed}s ease-in-out infinite;
      transform-origin: bottom center;
    `,
  };
};

export const drillMachineItem: CanvasElementItem<DrillMachineConfig, DrillMachineData> = {
  id: 'drillMachine',
  name: 'Drill Machine',
  description: 'Animated drill machine',

  display: DrillMachineDisplay,

  defaultSize: {
    width: 200,
    height: 200,
  },

  getNewOptions: (options) => ({
    ...options,
    config: {
      animationSpeed: 1,
    },
  }),

  prepareData: (ctx, cfg) => {
    return {
      animationSpeed: cfg.config?.animationSpeed ?? 1,
    };
  },

  registerOptionsUI: (builder) => {
    const category = ['Drill Machine'];
    builder
      .addNumberInput({
        path: 'config.animationSpeed',
        name: 'Animation Speed',
        defaultValue: 1,
        settings: {
          min: 0.1,
          max: 5,
          step: 0.1,
        },
        category,
      });
  },
};