import { Type } from "@angular/core"

export interface Project{
  id: number
  title: string
  imageUrl?: string
  content?: Type<object>
}
