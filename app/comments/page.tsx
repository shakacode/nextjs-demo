async function getData(url: string, reevalutationPeriodInSeconds: number) {
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
    <p>This page is a server component, which demonstrates the use of NextJS's enhanced fetch for API calls in combination with async/await rather than hooks.</p>
    <section>{data}</section>
    <section>{source}</section>
  </main>
  )
}
