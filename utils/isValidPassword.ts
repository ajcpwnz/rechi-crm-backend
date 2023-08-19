import bCrypt from 'bcryptjs'

export const isValidPassword = function(userpass: string, password: string) {
  return bCrypt.compareSync(password, userpass);
}
