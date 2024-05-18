import express from 'express';
import defaultConfig from './default.json';

function apiSetup() { 
  const api = express();

  const DEFAULT_PORT = process.env.PORT || defaultConfig.server.port;
  
  api.set('port', DEFAULT_PORT);
}

export default apiSetup;