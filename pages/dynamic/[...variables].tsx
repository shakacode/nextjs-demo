import type { ReactElement } from 'react'
import { useRouter } from 'next/router'
import useSWR from 'swr'

import Layout from '../../components/layout'
import type { NextPageWithLayout } from '../_app'

const fetcher = (url) => fetch(url).then((res) => res.json())
 
const Page: NextPageWithLayout = () => {
  const { data, error } = useSWR('/api/pages/dynamic/[...variables]', fetcher)
  let result = "Loading..."
  if (error) {
    result = "Failed to load"
  }
  if (data) {
    result = JSON.stringify(data)
  }
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
