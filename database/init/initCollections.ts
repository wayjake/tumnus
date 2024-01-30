import { createSignalsCollection } from './signals/signals'

export const initCollections = async () => {
  try {
    await createSignalsCollection()
  } catch (err) {
    console.error(err)
  }
}
