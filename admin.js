const AdminBro = require('admin-bro')
const AdminBroExpress = require('@admin-bro/express')

const adminBro = new AdminBro({
  databases: [],
  rootPath: '/admin'
})

const route = AdminBroExpress.buildRouter(adminBro)

const express = require('express')
const server = express()
const PORT = 3000

server
  .use(adminBro.options.rootPath, route)
  .listen(PORT, () => console.log(`Server starting in ${PORT}`))