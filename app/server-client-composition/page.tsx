import { readFileSync } from 'fs'

import Server from "./server"
import Client from "./client"

export default function Parent() {

  const parentSource = readFileSync(`${process.cwd()}/app/server-client-composition/page.tsx`).toString()
  const clientComponentSource = readFileSync(`${process.cwd()}/app/server-client-composition/client.tsx`).toString()
  const serverComponentSource = readFileSync(`${process.cwd()}/app/server-client-composition/server.tsx`).toString()

 return(
  <>
  The number of \n in the parentSource are {parentSource.split("\n").length}
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
