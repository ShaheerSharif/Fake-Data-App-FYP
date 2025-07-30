import { Appliance } from "@/utils/load-data"

// 50 watt bulb -> (0.20 - 0.24 AC), (3.85 - 4.54 DC)
// 80 watt bulb -> (0.33 - 0.38 AC), (6.15 - 7.24 DC)

const appliances: Appliance[] = [
  {
    name: "50 watt bulb",
    min_ac: 0.2,
    max_ac: 0.24,
    min_dc: 3.85,
    max_dc: 4.54,
  },
  {
    name: "80 watt bulb",
    min_ac: 0.33,
    max_ac: 0.38,
    min_dc: 6.15,
    max_dc: 7.24,
  },
  // {
  //   name: "80 watt bulb",
  //   min_ac: 0.33,
  //   max_ac: 0.38,
  //   min_dc: 6.15,
  //   max_dc: 7.24,
  // },
  // {
  //   name: "80 watt bulb",
  //   min_ac: 0.33,
  //   max_ac: 0.38,
  //   min_dc: 6.15,
  //   max_dc: 7.24,
  // },
  // {
  //   name: "80 watt bulb",
  //   min_ac: 0.33,
  //   max_ac: 0.38,
  //   min_dc: 6.15,
  //   max_dc: 7.24,
  // },
  // {
  //   name: "80 watt bulb",
  //   min_ac: 0.33,
  //   max_ac: 0.38,
  //   min_dc: 6.15,
  //   max_dc: 7.24,
  // },
  // {
  //   name: "80 watt bulb",
  //   min_ac: 0.33,
  //   max_ac: 0.38,
  //   min_dc: 6.15,
  //   max_dc: 7.24,
  // }
]

export { appliances }
