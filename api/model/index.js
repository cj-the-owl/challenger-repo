const Users = require('./users')

const Books = require('./books')

module.exports = {
    users: new Users(),
    books: new Books()
}