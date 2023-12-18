import Home from "@/components/screens/home/Home";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Homepage',
  description: 'Search Guardian news',
}


export default function HomePage() {
  return <Home />
}
