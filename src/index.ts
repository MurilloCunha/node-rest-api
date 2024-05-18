import express from 'express';

const DEFAULT_PORT = process.env.PORT || 8000;

const api = express();

api.listen(DEFAULT_PORT, () => {
  console.log(`Server running on port ${DEFAULT_PORT}`);
})