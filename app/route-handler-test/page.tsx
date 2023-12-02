"use client"

import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Page() {
  const { data, error } = useSWR("/api/routeHandler", fetcher)
  let result = "Loading..."
  if (error) {
    result = "Failed to load"
  }
  if (data) {
    result = JSON.stringify(data)
  }
  
  return (
    <main>
      <p>This page is a client component, which demonstrates the use of a hook for API calls, rather than async/await, which can only be used in Server Components.</p>
      <section>{result}</section>
    </main>
    )
}
