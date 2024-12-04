import { findAllOrderFromSunGreater4 } from './service.js'

async function run() {
  const planets = await findAllOrderFromSunGreater4()
  console.log(planets)
}

run()
