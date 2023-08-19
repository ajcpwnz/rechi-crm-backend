import express, { Express, Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { JWTstrategy } from './config/passport'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import session from 'express-session';
import passport from 'passport';
import sequelizeConnection from './config/db'
import { Admin } from './models'
import authRoutes from './routes/auth';

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

app.use('/api/', apiRoutes)


app.get('/', async (req: Request, res: Response) => {
  const admin = await Admin.create({
    email: 'ajcpwnz@d3feat.website',
    password: 'MYPASSWORD',
    display_name: 'alex'
  });

  res.send('Express + TypeScript Server' + JSON.stringify(admin));
});


app.listen(port, async () => {
  await sequelizeConnection.sync();

  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

