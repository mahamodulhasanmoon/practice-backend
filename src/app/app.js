import 'dotenv/config.js'
import express from 'express';
import middleware from './middleware.js';
import routes from './routes.js';
import { errorHandler, notFoundHandler } from './error.js';

const app = express();
app.use(middleware)
app.use(routes)
app.use(notFoundHandler)
app.use(errorHandler)

export default app