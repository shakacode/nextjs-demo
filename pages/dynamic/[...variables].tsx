import type { ReactElement } from 'react'
import type { InferGetStaticPropsType, GetStaticProps } from 'next'
import { useRouter } from 'next/router'

import Layout from '../../components/layout'
import type { NextPageWithLayout } from '../_app'

export const getStaticProps = (async (context) => {
  const source = readFileSync(`${process.cwd()}/pages/dynamic/[...variables].tsx`).toString()
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
      <p>This page demonstrates a catch-all dynamic route. The route for this page was dynamic/{router.query.variables.join("/")}
      <h3>Page Source Code</h3>
      <pre>
        {result}
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
