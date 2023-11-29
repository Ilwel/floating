import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const { authorization } = req.headers

  const options = {
    headers: { 'Authorization': (authorization as string) }
  }
  
  const response = await fetch(`https://pr.staging.gcirisk.com.br/api/users/usuario_logado`, options)
  if(response.ok){
    const data = await response.json()
    res.send(data)
  }else{
    res.status(400)
  }
}
