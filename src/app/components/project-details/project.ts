import { Type } from "@angular/core"

export interface Project{
  id: number
  title: string
  imageUrl?: string
  gallery?: string[]
  description?: string
  technologies?: string[]
  content?: Type<object>
}
