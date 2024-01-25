const validationRules = {
  $jsonSchema: {
    bsonType: 'object',
    required: ['name', 'description', 'schema', 'currentVersion', 'previousVersions'],
    properties: {
      name: {
        bsonType: 'string',
        description: 'the name of must be a string and is required',
      },
      description: {
        bsonType: 'string',
        description: 'must be a string and is required',
      },
      schema: {
        bsonType: 'objectId',
        description: 'must be an ObjectId and is required',
      },
      currentVersion: {
        bsonType: 'int',
        description: 'must be an integer and is required',
      },
      previousVersions: {
        bsonType: 'array',
        items: {
          bsonType: 'objectId',
        },
        description: 'must be an array of ObjectIds',
      },
    },
  },
}
