import Image from 'next/image'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <h1 className="text-7xl text-tbp font-bold">
      Hello, Next.js!
    </h1>
  )
}
