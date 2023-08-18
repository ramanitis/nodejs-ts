import express, { Response, Request } from 'express';
import { config } from 'dotenv';


config();
const app = express();
const port = process.env.PORT;

app.get('/health', (_: Request, res: Response) => {
    res.json({ status: 'ok' });
});

// add your routes here














app.listen(port, () => {
    console.log('Server is up and listening on port', port);
});
