import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import CalendarContainer from '@/components/CalendarContainer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
        <title>Crow Seconds</title>
        <meta
          name="description"
          content="A practice app showing the current seconds on the clock, but with CROWS"
        />
      </Head>
    <main
      className={`flex flex-col min-h-screen items-center justify-between p-12 ${inter.className}`}
    >
   <CalendarContainer />
    </main>

    </>
  )
}
