import mongoClient from './mongoClient.js'

const DB_NAME = 'sample_guides'
const COLLECTION_NAME = 'planets'

const database = mongoClient.db(DB_NAME)
const collection = database.collection(COLLECTION_NAME)

async function findAll() {
  try {
    await mongoClient.connect()
    console.log('Connection was successful!')
    const cursor = collection.find()
    return await parsePlanetCursor(cursor)
  } catch (error) {
    console.dir(error)
  } finally {
    await mongoClient.close()
    console.log('Connection was closed!')
  }
}

async function findAllHasRings() {
  try {
    await mongoClient.connect()
    console.log('Connection was successful!')
    const cursor = collection.find({ hasRings: true })
    return await parsePlanetCursor(cursor)
  } catch (error) {
    console.dir(error)
  } finally {
    await mongoClient.close()
    console.log('Connection was closed!')
  }
}

async function findAllNotRingsMainAtmosphereAr() {
  try {
    await mongoClient.connect()
    console.log('Connection was successful!')
    const cursor = collection.find({ hasRings: false, mainAtmosphere: 'Ar' })
    return await parsePlanetCursor(cursor)
  } catch (error) {
    console.dir(error)
  } finally {
    await mongoClient.close()
    console.log('Connection was closed!')
  }
}

async function findAllOrderFromSunGreater4() {
  try {
    await mongoClient.connect()
    console.log('Connection was successful!')
    const cursor = collection.find({ orderFromSun: { $gt: 4 } })
    return await parsePlanetCursor(cursor)
  } catch (error) {
    console.dir(error)
  } finally {
    await mongoClient.close()
    console.log('Connection was closed!')
  }
}

async function getFindAllCursor() {
  try {
    await mongoClient.connect()
    console.log('Connection was successful!')
    return collection.find()
  } catch (error) {
    console.dir(error)
  } finally {
    await mongoClient.close()
    console.log('Connection was closed!')
  }
}

async function parsePlanetCursor(cursor) {
  const planets = []
  for await (const planet of cursor) {
    planets.push(planet)
  }
  return planets
}

export { findAll, findAllHasRings, findAllNotRingsMainAtmosphereAr, findAllOrderFromSunGreater4, getFindAllCursor }
