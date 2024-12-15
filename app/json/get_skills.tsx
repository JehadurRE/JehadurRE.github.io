import next from "next"
import { cache } from "react"

export interface Skill {
    category: string
    items: Item[]
  }
  
  export interface Item {
    name: string
    percentage?: number
    img?: string
  }
  


export default async function getSkills(): Promise<Skill[]> {


    try
    {
        const response = await fetch('http://localhost:3000/json/skills.json', { cache: "no-cache" });

        const data = await response.json()
        console.log(data.skills)
        console.log(data.skills[0])
        return data.skills
    }
    catch(error)
    {
        console.log(error)
        return [];
    }
}
