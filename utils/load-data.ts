type Appliance = {
  name: string
  min_ac: number
  max_ac: number
  min_dc: number
  max_dc: number
}

type ApplianceData = {
  ac: number
  dc: number
}

function randomNum(min: number, max: number) {
  return Math.random() * (max - min) + min
}

function randomizeData(load: Appliance) {
  return {
    ac: randomNum(load.min_ac, load.max_ac),
    dc: randomNum(load.min_dc, load.max_dc)
  }
}

export { Appliance, ApplianceData, randomizeData }
