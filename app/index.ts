// import { db } from '../database/database'

async function main() {
  try {
    /**
      const item = await db.collection('registry').findOne({ name: 'Bun' })
      if (item) {
        throw new Error('Bun is already registered within the registry.')
      }
    */

    /*
    const update = {
      name: 'bun',
      description: 'Lifecycle messages from the bun runtime.',
      schema: null,
      currentVersion: 1,
      previousVersions: [],
    }
    const registery = await db
      .collection('registry')
      .findOneAndUpdate({ name: update.name }, { $set: update }, { upsert: true })
    console.table(registery)
    */
    throw new Error(`this isn't doing anything, yet`)
  } catch (err) {
    console.error(err)
  }
}

main()
