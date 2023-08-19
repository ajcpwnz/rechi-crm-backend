import { Admin } from '../models'
import JWT from 'passport-jwt'

let JwtStrategy = JWT.Strategy;
const ExtractJwt = JWT.ExtractJwt;

export const JWTstrategy = new JwtStrategy({
  jwtFromRequest:  ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'MY_SECRET'
}, function(jwt_payload, next) {
  let user = Admin.findOne({where: { id: jwt_payload.id }});

  if (user) {
    next(null, user);
  } else {
    next(null, false);
  }
});
