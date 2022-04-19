import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Home - Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        {/* Header */}
        <Header />
        <main>
          {/* Banner */}
          <section>

          </section>
        </main>
    </div>
  )
}

export default Home
