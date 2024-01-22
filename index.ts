import { db } from './database/database'

async function main() {
  try {
    const item = await db.collection('registry').findOne({ name: 'Bun' })
    if (item) {
      throw new Error('Bun is already registered within the registry.')
    }
    await db.collection('registry').insertOne({
      name: 'Bun',
      description: 'Lifecycle events from the bun runtime.',
      avro: 'avro schema',
      currentVersion: 1,
      previousVersions: [],
    })
  } catch (err) {
    console.error(err)
  }
}

main()
