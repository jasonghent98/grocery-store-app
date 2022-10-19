import React from 'react'
import { useRouter } from 'next/router'

// dynamic page that will contain all the detailed information about a searched product in the client's area
// need to ensure the api results contain locations so that we can provide a map for the user for locating stores

const Product = () => {
    const router = useRouter()
    const {productId} = router.query
  return (
    <div className='h-screen bg-gray-300'>
      {productId}
    </div>
  )
}

export default Product