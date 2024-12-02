import { MongoClient } from 'mongodb'

const uri = 'mongodb://root:root@localhost:27017'
const client = new MongoClient(uri)

async function run() {
  try {
    await client.connect()
    console.log('Connection was successful!')
  } finally {
    await client.close()
  }
}

run().catch(console.dir)
