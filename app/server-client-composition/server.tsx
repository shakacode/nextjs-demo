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

export default async function Page() { // Got to add the getData async function \O/
  const data = JSON.stringify(await getData('https://reactrails.com/comments.json', 5))
 
  return (
  <main>
    <p>This page is a server component, which demonstrates the use of NextJS's enhanced fetch for API calls in combination with async/await rather than hooks.</p>

    The result of the server-side async API call to https://reactrails.com/comments.json:
    <section>{data}</section>
  </main>
  )
}
