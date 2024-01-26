// import { db } from '../database/database'
import { createSignalsCollection } from '../database/init/signals'

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
      description: 'Lifecycle events from the bun runtime.',
      schema: null,
      currentVersion: 1,
      previousVersions: [],
    }
    const registery = await db
      .collection('registry')
      .findOneAndUpdate({ name: update.name }, { $set: update }, { upsert: true })
    console.table(registery)
    */
    await createSignalsCollection()
  } catch (err) {
    console.error(err)
  }
}

main()
