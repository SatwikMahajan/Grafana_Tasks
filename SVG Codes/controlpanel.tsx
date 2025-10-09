import React from 'react';
import { css } from '@emotion/css';
import { GrafanaTheme2 } from '@grafana/data';
import { useStyles2 } from '@grafana/ui';
import { CanvasElementItem, CanvasElementProps } from '../element';

interface ControlPanelConfig {}

const ControlPanelDisplay: React.FC<CanvasElementProps<ControlPanelConfig>> = () => {
  const styles = useStyles2(getStyles);

  return (
    <svg
      viewBox="0 0 633.363 633.363"
      className={styles.svg}
    >
      <g>
        <path style={{ fill: "#7F7F7F" }} d="M105.737,633.363h370.089V0H290.562 C188.486,0,105.737,82.749,105.737,184.825V633.363z"/>
        <rect x="306.885" y="0" style={{ fill: "#CACACA" }} width="265.632" height="330.105"/>
        <rect x="344.3" y="419.311" style={{ fill: "#CACACA" }} width="265.632" height="214.053"/>
        <polygon style={{ fill: "#979797" }} points="609.931,419.311 344.3,419.311 306.885,330.105 572.516,330.105"/>
        <polygon style={{ fill: "#1eb1e6" }} points="578.896,398.685 358.024,398.685 341.518,359.328 337.907,350.732 558.797,350.732"/>
        <polygon style={{ fill: "#C2E2F2" }} points="570.127,398.685 358.024,398.685 341.518,359.328 553.638,359.328"/>
        {/* Green buttons */}
        <g>
          <rect x="506.95" y="215.472" style={{ fill: "#17a642" }} width="38.056" height="87.822"/>
          <rect x="497.192" y="215.472" style={{ fill: "#2a5a36" }} width="9.758" height="87.822"/>
          <rect x="518.66" y="227.182" style={{ fill: "#2a5a36" }} width="14.637" height="64.403"/>
          <polygon style={{ fill: "#7F7F7F" }} points="582.321,304.036 574.046,312.311 518.66,256.924 518.66,240.375"/>
          <circle style={{ fill: "#dc4109" }} cx="578.184" cy="308.173" r="13.661"/>
        </g>
        {/* Repeat for other buttons */}
        {/* ... */}
        <path style={{ fill: "#1ac6ff" }} d="M178.177,633.363H93.354v-17.194h84.823c9.797,0,17.767-7.97,17.767-17.766V486.449 c0-19.278,15.684-34.961,34.96-34.961v17.194c-9.797,0-17.766,7.971-17.766,17.767v111.954 C213.138,617.68,197.454,633.363,178.177,633.363z"/>
        <path style={{ fill: "#f7e308" }} d="M126.022,633.363H41.199v-17.194h84.823c9.797,0,17.767-7.97,17.767-17.766V486.449 c0-19.278,15.684-34.961,34.961-34.961v17.194c-9.797,0-17.767,7.971-17.767,17.767v111.954 C160.983,617.68,145.299,633.363,126.022,633.363z"/>
        <path style={{ fill: "#dc4109" }} d="M230.331,633.363H32.029c-4.748,0-8.597-3.849-8.597-8.597l0,0c0-4.748,3.849-8.597,8.597-8.597 h198.303c9.812,0,17.766-7.954,17.766-17.766V486.449c0-19.278,15.684-34.961,34.961-34.961v17.194 c-9.797,0-17.767,7.971-17.767,17.767v111.954C265.292,617.711,249.639,633.363,230.331,633.363z"/>
        {/* Control knobs */}
        <g>
          <circle style={{ fill: "#dc4109" }} cx="390.992" cy="67.575" r="18.899"/>
          <circle style={{ fill: "#17a642" }} cx="453.018" cy="67.575" r="18.899"/>
          <circle style={{ fill: "#dc4109" }} cx="515.044" cy="67.575" r="18.899"/>
          <circle style={{ fill: "#17a642" }} cx="390.992" cy="125.588" r="18.899"/>
          <circle style={{ fill: "#dc4109" }} cx="453.018" cy="125.588" r="18.899"/>
          <circle style={{ fill: "#17a642" }} cx="515.044" cy="125.588" r="18.899"/>
        </g>
        {/* Large circular control */}
        <path style={{ fill: "#556A71" }} d="M521.48,460.902c-22.819-22.819-59.815-22.819-82.633,0c-22.819,22.819-22.819,59.815,0,82.633 c22.819,22.819,59.815,22.819,82.633,0C544.299,520.716,544.299,483.72,521.48,460.902z M510.723,525.994l-17.912-17.912 c1.721-3.713,1.72-8.015,0-11.728l17.912-17.912C521.599,492.387,521.599,512.05,510.723,525.994z M503.939,471.659l-17.912,17.912 c-3.713-1.72-8.015-1.721-11.728,0l-17.912-17.912C470.332,460.783,489.995,460.783,503.939,471.659z M449.604,478.443 l17.912,17.912c-1.721,3.713-1.72,8.015,0,11.728l-17.912,17.912C438.729,512.05,438.729,492.387,449.604,478.443z M456.388,532.778l17.912-17.912c3.713,1.72,8.015,1.721,11.728,0l17.912,17.912C489.995,543.653,470.332,543.653,456.388,532.778z"/>
      </g>
    </svg>
  );
};

export const controlPanelItem: CanvasElementItem<ControlPanelConfig> = {
  id: 'controlPanel',
  name: 'Control Panel',
  description: 'A static control panel display',

  display: ControlPanelDisplay,

  defaultSize: {
    width: 300,
    height: 300,
  },

  getNewOptions: (options) => ({
    ...options,
  }),
};

const getStyles = (theme: GrafanaTheme2) => ({
  svg: css({
    width: '100%',
    height: '100%',
  }),
});