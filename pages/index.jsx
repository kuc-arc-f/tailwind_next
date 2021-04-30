import Head from 'next/head'
import Container from '../components/container'
import Layout from '../components/layout'

export default function Index({ allPosts}) {
  return (
    <>
    <Layout preview="">
      <Head>
        <title>tailwindcss Next.js sample</title>
      </Head>
      <Container>
        <h1 className="text-4xl text-center">Hello, world</h1>
        <hr className="my-2" />
        Button :
        <div className="my-2">
          <button className="btn-blue m-1">button</button>
          <button className="btn-green m-1">button</button>
          <button className="btn-red" m-1>button</button>
        </div>
        <hr className="my-2" />
      </Container>
    </Layout>
    </>
  )
}

export async function getStaticProps() {
  var allPosts = []
  return {
    props: { allPosts },
  }
}
