import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import CalendarContainer from '@/components/CalendarContainer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
        <title>Calendar Countup</title>
        <meta
          name="description"
          content="A calendar countup with different words and pictures for each day"
        />
      </Head>
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
   <CalendarContainer />
    </main>

    </>
  )
}
