import { Admin, Request } from '../models'
const isDev = process.env.NODE_ENV === 'development'

const dbInit = async () => {
  await Admin.sync({ alter: isDev })
  await Request.sync({ alter: isDev })
}

export default dbInit
