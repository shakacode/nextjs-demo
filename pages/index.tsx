import type { ReactElement } from 'react'
import Layout from '../components/layout'
import type { NextPageWithLayout } from './_app'
 
const Page: NextPageWithLayout = () => {
  return (
    <div>
      <p>Welcome to Shakacode's demonstration of NextJS functionalty!</p>
    </div>
  )
}
 
Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>{page}</Layout>
  )
}
 
export default Page
