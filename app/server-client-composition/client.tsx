'use client'

import { useState } from 'react';

export default function Client({
  parentSource,
  clientComponentSource,
  serverComponentSource,
  children,
}: {
  parentSource: string,
  clientComponentSource: string,
  serverComponentSource: string,
  children: React.ReactNode
}) {
  const [name, setName] = useState("Unidentified Individual")
  return (
    <>
      <div>
        <h3>Hello, {name}!</h3>
        <p>
          My name is:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </p>
      </div>
      { children }
      <div>
        <h3>Source:</h3>
        <p>The purpose of this page is to demonstrate the possible composition of server & client components.</p>
        <p>The Page component reads data from the file system (which only server components can do) & then provides the client component with the results of the AJAX call as a prop as well as providing the server component as a child component:</p>
        <pre>{parentSource}</pre>
        <p>The client component contains logic to respond to user input (which only client components can do) and also displays the server component as well as source code it was provided as props by the parent component:</p>
        <pre>{clientComponentSource}</pre>
        <p>The child server component runs & displays the result an AJAX call (which something else that only server components can do):</p>
        <pre>{serverComponentSource}</pre>
      </div>
    </>
  )
}
