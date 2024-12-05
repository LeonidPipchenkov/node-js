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

async function findAllSurfaceTemperatureCMeanLess15() {
  try {
    await mongoClient.connect()
    console.log('Connection was successful!')
    const cursor = collection.find({ 'surfaceTemperatureC.mean': { $lt: 15 } })
    return await parsePlanetCursor(cursor)
  } catch (error) {
    console.dir(error)
  } finally {
    await mongoClient.close()
    console.log('Connection was closed!')
  }
}

async function findAllSurfaceTemperatureMeanLess15MinGreaterMinus100() {
  try {
    await mongoClient.connect()
    console.log('Connection was successful!')
    const cursor = collection.find({
      'surfaceTemperatureC.mean': { $lt: 15 },
      'surfaceTemperatureC.min': { $gt: -100 }
    })
    return await parsePlanetCursor(cursor)
  } catch (error) {
    console.dir(error)
  } finally {
    await mongoClient.close()
    console.log('Connection was closed!')
  }
}

async function findAllOrderFromSunBetween2and5() {
  try {
    await mongoClient.connect()
    console.log('Connection was successful!')
    const cursor = collection.find({
      $and: [
        { orderFromSun: { $gt: 2 } },
        { orderFromSun: { $lt: 5 } }
      ]
    })
    return await parsePlanetCursor(cursor)
  } catch (error) {
    console.dir(error)
  } finally {
    await mongoClient.close()
    console.log('Connection was closed!')
  }
}

async function findAllOrderFromSunBetween2and5MainAtmosphereO2() {
  try {
    await mongoClient.connect()
    console.log('Connection was successful!')
    const cursor = collection.find({
      $and: [
        { orderFromSun: { $gt: 2 } },
        { orderFromSun: { $lt: 5 } },
        { mainAtmosphere: 'O2' }
      ]
    })
    return await parsePlanetCursor(cursor)
  } catch (error) {
    console.dir(error)
  } finally {
    await mongoClient.close()
    console.log('Connection was closed!')
  }
}

async function findAllOrderFromSunNotBetween2and7() {
  try {
    await mongoClient.connect()
    console.log('Connection was successful!')
    const cursor = collection.find({
      $or: [
        { orderFromSun: { $lt: 2 } },
        { orderFromSun: { $gt: 7 } }
      ]
    })
    return await parsePlanetCursor(cursor)
  } catch (error) {
    console.dir(error)
  } finally {
    await mongoClient.close()
    console.log('Connection was closed!')
  }
}

async function countSurfaceTemperatureCMeanLess15() {
  try {
    await mongoClient.connect()
    console.log('Connection was successful!')
    return await collection.countDocuments({ 'surfaceTemperatureC.mean': { $lt: 15 } })
  } catch (error) {
    console.dir(error)
  } finally {
    await mongoClient.close()
    console.log('Connection was closed!')
  }
}

async function countSurfaceTemperatureMeanLess15MinGreaterMinus100() {
  try {
    await mongoClient.connect()
    console.log('Connection was successful!')
    return await collection.countDocuments({
      'surfaceTemperatureC.mean': { $lt: 15 },
      'surfaceTemperatureC.min': { $gt: -100 }
    })
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

export {
  findAll,
  findAllHasRings,
  findAllNotRingsMainAtmosphereAr,
  findAllOrderFromSunGreater4,
  findAllSurfaceTemperatureCMeanLess15,
  findAllSurfaceTemperatureMeanLess15MinGreaterMinus100,
  findAllOrderFromSunBetween2and5,
  findAllOrderFromSunBetween2and5MainAtmosphereO2,
  findAllOrderFromSunNotBetween2and7,
  countSurfaceTemperatureCMeanLess15,
  countSurfaceTemperatureMeanLess15MinGreaterMinus100,
  getFindAllCursor
}
