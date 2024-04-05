import type { ReactElement } from 'react'
import type { InferGetStaticPropsType, GetStaticProps } from 'next'
import { useRouter } from 'next/router'

import Layout from '../../components/layout'
import type { NextPageWithLayout } from '../_app'

export const getStaticProps = (async (context) => {
  const source = readFileSync(`${process.cwd()}/pages/dynamic/[variable].tsx`).toString()
  return { source }
}) satisfies GetStaticProps<{
  source: string
}>

const Page: NextPageWithLayout = ({
  source,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter()
  return (
    <>
      <p>The route for this page was dynamic/{router.query.variable}</p>
      <h3>Page Source Code</h3>
      <pre>
        {source}
      </pre>
    </>
  )
}
 
Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>{page}</Layout>
  )
}
 
export default Page
