import { data } from "@/data";

export default function handler({query: {id}}, res) {
    const plant = data.find(plant => plant.id == id)
    res.status(200).json(plant)
  }
  
  