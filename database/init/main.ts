import { createSignalsCollection } from './signals'

async function main() {
  try {
    await createSignalsCollection()
  } catch (err) {
    console.error(err)
  }
}

main()
