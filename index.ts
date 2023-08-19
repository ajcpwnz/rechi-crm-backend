import express, { Express, Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import FormSubmission from './models/FormSubmission'
import { JWTstrategy } from './config/passport'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import session from 'express-session';
import passport from 'passport';
import sequelizeConnection from './config/db'
import authRoutes from './routes/auth';
import submissionRoutes from './routes/submissions';
import requestRoutes from './routes/request';

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
apiRoutes.use('/requests', requestRoutes);


app.use('/api/', apiRoutes)


app.get('/', async (req: Request, res: Response) => {
  // const admin = await Admin.create({
  //   email: 'ajcpwnz@d3feat.website',
  //   password: 'MYPASSWORD',
  //   display_name: 'alex'
  // });

  const data = await FormSubmission.findAll();

  res.send('Express + TypeScript Server' + JSON.stringify(data));
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

