const express = require('express')
const bodyParser = require('body-parser')
const routes = express.Router()
//import models objects
const {users} = require('../model')
const {books} = require('../model')

// Users router
routes.get('/users', (req, res) => {
    users.fetchUsers(req, res)
})
routes.get('/user/:id', (req, res) => {
    users.fetchUser(req, res)
})
routes.post('/register', bodyParser.json(), (req, res) => {
    users.register(req, res)
})
routes.put('/user/:id', bodyParser.json(), (req, res) => {
    users.updateUser(req, res)
})
routes.patch('/user/:id', bodyParser.json(), (req, res) => {
    users.updateUser(req, res)
})
routes.delete('/user/:id', (req, res) => {
    users.deleteUser(req, res)
})

//Books router
routes.get('/books', (req, res) => {
    books.fetchBooks(req, res)
})
routes.get('/book/:id', (req, res) => {
    books.fetchBooks(req, res)
})
routes.post('/book', bodyParser.json(), (req, res) => {
    books.book(req, res)
})

module.exports = {
    express,
    routes
}