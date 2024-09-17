import app from './app';
import { config } from 'dotenv';

config();

const HTTP_PORT = process.env.HTTP_PORT || 3000;

app.listen(HTTP_PORT, () => {
    console.log(`Server listening port: ${HTTP_PORT}`);
});