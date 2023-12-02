import type { NextApiRequest, NextApiResponse } from 'next'
import { readFileSync } from 'fs';
 
type ResponseData = {
  success: boolean
}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  let { filepath } = req.query
  console.log(`process.cwd() is ${process.cwd()}`)
  console.log(`filepath was ${filepath}`)
  const fullFilePath = filepath.join('/')
  console.log(`fullFilePath is ${fullFilePath}`)
  if(!(fullFilePath.startsWith("app") || fullFilePath.startsWith("pages"))) {
    console.log("unauthorized")
    res.status(401).send()
  } else {
    console.log("reading file")
    res.status(200).json({ source: readFileSync(`${process.cwd()}/${fullFilePath}.tsx`).toString() })
  }
}
