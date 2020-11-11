/**
 * Class from configuration project
 * @author Elton Veiga
 */
const AdminBro = require('admin-bro')
const AdminBroExpress = require('@admin-bro/express')
const AdminBroMongoose = require('@admin-bro/mongoose')
const ProjetcConfigDB = require('./src/config/mongoose-config')

AdminBro.registerAdapter(AdminBroMongoose)

const adminBroOptions = new AdminBro({
  resources: [ProjetcConfigDB.Project],
  rootPath: '/admin'
})

const router = AdminBroExpress.buildRouter(adminBroOptions)

const express = require('express')
const server = express()
const PORT = process.env.PORT || 3000

const log = () => console.log(`Server starting in ${PORT}`)
server.use(adminBroOptions.options.rootPath, router)

const run = async () => {
  await ProjetcConfigDB.connect()
  await server.listen(PORT, log())
}

run()