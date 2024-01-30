import { db } from '../../database/database'
const { Binary } = require('mongodb')

export async function storeProtobufSchema(stringSchema: string) {
  await db.collection('shemas').insertOne({ name: 'schema_name', data: new Binary(binarySchema) })
}
