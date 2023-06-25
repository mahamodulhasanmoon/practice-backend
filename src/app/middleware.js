import cors from 'cors';
import morgan from 'morgan';
import express  from 'express';


const middleware = [
    morgan('dev',
    cors(),
    express.json())
]

export default middleware;