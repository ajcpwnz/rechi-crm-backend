import { Admin } from '../models'
const isDev = process.env.NODE_ENV === 'development'

const dbInit = () => {
  Admin.sync({ alter: isDev })
}

export default dbInit
