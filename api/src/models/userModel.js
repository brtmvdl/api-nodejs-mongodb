const { mongoose, Schema } = require('../../database')

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  permissions: {
    type: [String],
    default: () => []
  }
})

const UserModel = mongoose.model('User', UserSchema)

module.exports = {
  UserSchema,
  UserModel
}
