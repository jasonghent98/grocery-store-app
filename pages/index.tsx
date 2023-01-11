import { NextApiRequest, NextApiResponse } from 'next'
import React from 'react'

export const Home = () => {
  return (
    <div>index</div>
  )
}

export default async function getServerSideProps({req, res}: {req: NextApiRequest, res: NextApiResponse}) {
    res.writeHead(307, {location: "/login"})
    res.end() // kill the process
}
