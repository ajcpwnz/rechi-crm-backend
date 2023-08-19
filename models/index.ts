import Admin from './Admin'
import FormSubmission from './FormSubmission'
import Request from './Request'
import RequestBeing from './RequestBeing'
import Comment from './Comment'



Admin.hasMany(Comment,{
  foreignKey: 'authorId'
});

Comment.belongsTo(Admin, {foreignKey: 'authorId'});
Comment.belongsTo(Request, {foreignKey: 'requestId'});
Request.hasMany(Comment, {foreignKey: 'requestId'})


export {
  Admin,
  FormSubmission,
  Request,
  RequestBeing,
  Comment
}
