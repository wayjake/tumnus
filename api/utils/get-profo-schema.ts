import { MongoClient, Binary } from 'mongodb';
import { load } from 'protobufjs';

async function getProtobufSchema(schemaName: string): Promise<any> {
    const client = await MongoClient.connect('mongodb_connection_string');
    const db = client.db('your_db');
    const collection = db.collection('protobuf_schemas');

    const document = await collection.findOne({ name: schemaName });
    if (!document) {
        throw new Error('Schema not found');
    }

    const binarySchema = document.data.buffer;
    const root = await load(binarySchema); // Adjust based on how your protobuf library handles binary input
    client.close();

    return root;
}
