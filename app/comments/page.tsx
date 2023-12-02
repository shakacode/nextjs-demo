async function getData(url: string, reevalutationPeriodInSeconds: integer) {
  const options = {}
  if(reevalutationPeriodInSeconds) {
    options["next"] = { revalidate: reevalutationPeriodInSeconds }
  }
  const res = await fetch(url, options)
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error(`Failed to fetch data from ${url}`)
  }
 
  return res.json()
}
 
export default async function Page() {
  const data = JSON.stringify(await getData('https://reactrails.com/comments.json', 5))
  const source = JSON.stringify(await getData(`${process.env.NEXT_PUBLIC_DOMAIN}/api/app/comments/page`))
 
  return (
  <main>
    <section>{data}</section>
    <section>{source}</section>
    Tada!!!
  </main>
  )
}
