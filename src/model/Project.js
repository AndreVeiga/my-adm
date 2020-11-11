/**
 * Class from Project
 * @author Elton Veiga
 */

module.exports = {
  title: {
    type: String,
    required: true
  },
  description: String,
  completed: Boolean,
  creat_at: {
    type: Date,
    default: Date.now
  }
}
