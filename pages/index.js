import Head from 'next/head'
import Link from 'next/link'


export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">
            Home
          </Link>
        </li>

        <li>
          <Link href="/photos">
            photos
          </Link>
        </li>
      </ul>

      <Head>
        <title>My Blog</title>
        <meta keyword="My Blog Powerd by Next js" />
      </Head>
      <h1>Welcome to My Blog -freshMan2</h1>
    </div >
  )
}
