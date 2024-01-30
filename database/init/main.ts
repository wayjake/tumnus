import { initCollections } from './initCollections'

async function main() {
  try {
    await initCollections()
  } catch (err) {
    console.error(err)
  }
}

main()
