import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline content-center">
        Hello world!
      </h1>
    </div>
  )
}
