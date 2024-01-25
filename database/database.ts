import { MongoClient, ServerApiVersion } from 'mongodb'

const uri = process.env.mongo_uri
if (!uri) {
  throw new Error('Make sure to add your connection string to the .env file')
}
const database = process.env.mongo_database
if (!database) {
  throw new Error('Make sure to add your database name to the .env file')
}

export const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
})

export const db = client.db(process.env.mongo_database)

async function run() {
  try {
    await client.connect()
    await client.db('admin').command({ ping: 1 })
  } catch (err) {}
}

run().catch(async (err) => {
  console.error(err)
  await client.close().then(process.exit(1))
})
