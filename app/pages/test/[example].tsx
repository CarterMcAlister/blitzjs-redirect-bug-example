import Layout from "app/core/layouts/Layout"
import { Head, Routes } from "blitz"

function Example() {
  return (
    <>
      <Head>
        <title>Example page</title>
      </Head>
      <div>Example</div>
    </>
  )
}

Example.redirectAuthenticatedTo = Routes.Home()
Example.getLayout = (page) => <Layout title="Example">{page}</Layout>

export default Example
