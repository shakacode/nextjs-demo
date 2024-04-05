import { readFileSync } from 'fs'

import Server from "./server"
import Client from "./client"

export default function Parent() {

  const parentSource = readFileSync(`${process.cwd()}/app/server-client/parent.tsx`).toString()
  const clientComponentSource = readFileSync(`${process.cwd()}/app/server-client/client.tsx`).toString()
  const serverComponentSource = readFileSync(`${process.cwd()}/app/server-client/server.tsx`).toString()

 return(
  <>
    <Client
      parentSource={parentSource}
      clientComponentSource={clientComponentSource}
      serverComponentSource={serverComponentSource}
    >
      <Server />
    </Client>
  </>
 )
}
