import express from 'express';
import cors from 'cors';
import uploadRouter from './routes/upload';
import { envConfig } from './config/config';

const app = express();
app.use(cors());
app.use(express.json({ limit: '1mb' }));

app.get('/health', (_req, res) => res.json({ status: 'ok' }));
app.use('/bulkUpload', uploadRouter);

const port = envConfig.port;
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
