const RecoveryPasswords = require('./recoveryPasswords.models')

const Users = require('./users.models')
const Posts = require('./posts.models')
const Likes = require('./likes.models')
const Follows = require('./follows.models')
const Comments = require('./comments.models')


const initModels = () => {
    //? FK = RecoveryPasswords
    Users.hasMany(RecoveryPasswords)
    RecoveryPasswords.belongsTo(Users)

    //? Users-Posts
    Users.hasMany(Posts)
    Posts.belongsTo(Users)

    //? Users-Likes
    Users.hasMany(Likes)
    Likes.belongsTo(Users)

    //? Posts-Likes
    Posts.hasMany(Likes)
    Likes.belongsTo(Posts)
    
    //?
    Users.hasMany(Follows)
    Follows.belongsTo(Users)

     //? users - comments
     Users.hasMany(Comments)
     Comments.belongsTo(Users)

    //? Posts-comments
    Posts.hasMany(Comments)
    Comments.belongsTo(Posts)
}

module.exports = initModels