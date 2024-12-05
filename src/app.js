import { findAllOrderFromSunBetween2and5MainAtmosphereO2 } from './service.js'

async function run() {
  const planets = await findAllOrderFromSunBetween2and5MainAtmosphereO2()
  console.log(planets)
}

run()
