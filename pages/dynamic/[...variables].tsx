import type { ReactElement } from 'react'
import type { InferGetStaticPropsType, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { readFileSync } from 'fs'

import Layout from '../../components/layout'
import type { NextPageWithLayout } from '../_app'

export const getStaticProps = (async (context) => {
  const source = readFileSync(`${process.cwd()}/pages/dynamic/[...variables].tsx`).toString()
  return { props: { source } }
}) satisfies GetStaticProps<{
  source: string
}>

export async function getStaticPaths() {
  return {
    paths: [
      // String variant:
      '/dynamic/routing/with/any/path/you/want/as/long/as/it/starts/with/dynamic',
      // Object variant:
      { params: { variables: ['not', 'sure', 'this', 'works', 'with', 'multiple', 'words'] } },
    ],
    fallback: true,
  }
}

const Page: NextPageWithLayout<{source: string}> = ({
  source,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter()
  return (
    <>
      <p>This page demonstrates a catch-all dynamic route. The route for this page was dynamic/{[router.query?.variables].join("/")}</p>
      <p>Feel free to experiment with different paths (as long as they start with "/dynamic/")!</p>
      <h3>Page Source Code:</h3>
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
