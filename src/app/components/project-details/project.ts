import { Type } from "@angular/core"

export interface Project {
  id: number;
  title: string;
  imageUrl?: string;
  gallery?: string[];
  description?: string;
  technologies?: string[];
  liveUrl?: string;
  // Case Study Additions
  challenge?: string;
  solution?: string;
  role?: string;
  duration?: string;
  category?: 'Web Applications' | 'Mobile Applications';
  marketingTagline?: string; // Cinematic Showtime: Marketing "Marketing Beat" tagline
}
