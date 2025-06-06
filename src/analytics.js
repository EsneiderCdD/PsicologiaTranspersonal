// src/analytics.js
import ReactGA from 'react-ga4';

const MEASUREMENT_ID = 'G-4LMXM6VQPJ'; // Tu ID

export const initGA = () => {
  ReactGA.initialize(MEASUREMENT_ID);
};

export const sendPageView = (path) => {
  ReactGA.send({ hitType: "pageview", page: path });
};
