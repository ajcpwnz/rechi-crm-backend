import express, { Express, Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { Status } from './models/enums/Status'
import { JWTstrategy } from './config/passport'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import session from 'express-session';
import passport from 'passport';
import sequelizeConnection from './config/db'
import authRoutes from './routes/auth';
import submissionRoutes from './routes/submissions';

import {Request as DBRequest} from './models';

dotenv.config();

interface CustomError extends Error {
  status?: number;
}

const app: Express = express();
const port = process.env.PORT || '8000';

app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(session({ secret: 'SECRET', resave: true, saveUninitialized:true}));
app.use(cors());
app.use(passport.initialize())

passport.use(JWTstrategy);

const apiRoutes = express();

apiRoutes.use(authRoutes);
apiRoutes.use('/submissions', submissionRoutes);


app.use('/api/', apiRoutes)


app.get('/', async (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.use((req: Request, res: Response) => {
  res.status(404).json({ message: 'Not found' })
});

app.use((err: CustomError, req: Request, res: Response, next: NextFunction) => {
  res.status(err.status || 500).json({ message: err.message });
});

app.listen(port, async () => {
  await sequelizeConnection.sync();

  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

