import mongoClient from './mongoClient.js'

async function run() {
  try {
    await mongoClient.connect()
    console.log('Connection was successful!')

    const db = mongoClient.db('sample_guides')
    const coll = db.collection('planets')

    const cursor = coll.find()
    console.log(cursor)

    for await (const planet of cursor) {
      console.log(planet)
    }
  } catch (error) {
    console.dir(error)
  } finally {
    await mongoClient.close()
    console.log('Connection was closed!')
  }
}

run()
