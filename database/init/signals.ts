import signalsSchema from './signals.schema.json'
import { db } from '../database'

export async function createSignalsCollection() {
  const collectionName = 'signals'

  const collections = await db.listCollections({ name: collectionName }).toArray()
  if (collections.length > 0) {
    console.log(`Collection ${collectionName} already exists.`)
    return
  }

  await db.createCollection(collectionName, {
    validator: signalsSchema,
  })
  const collection = db.collection(collectionName)
  await collection.createIndex({ name: 1 }, { unique: true })

  console.log(`Collection ${collectionName} created with an index on 'name'.`)
}
