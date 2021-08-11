import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Creative and entrepreneurial Software Engineer and Actuarial Scientist with background working in dynamic and progressive
          environments as both an actuary and a developer in large and small organizations.<br /><br />
          Fluent in a multitude of programming languages and frameworks used to develop software within a wide variety of industries.<br /><br />
          Collaborative team player focused on scoping projects and achieving objectives with speed and accuracy.
          Successful history of identifying patterns, making interpretations, and producing results.
        </p>
        <p>
          <em>(This is a sample website - you’ll be building a site like this on{' '}
            <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)</em>
        </p>
      </section>
    </Layout>
  )
}
