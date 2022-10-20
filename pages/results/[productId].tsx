import React from 'react'
import { useRouter } from 'next/router'
import Navbar from '../../components/Navbar'

// dynamic page that will contain all the detailed information about a searched product in the client's area
// need to ensure the api results contain locations so that we can provide a map for the user for locating stores

const Product = ({data}: any) => {

    const router = useRouter()
    const {productId} = router.query
  return (
    <div className='h-screen bg-gray-300'>
      <div className='h-1/6'>
        <div className='h-3/5'>
          <Navbar/>
        </div>
      </div>

      <div className='flex'>
        {/* map API to display relative location */}
        <div>

        </div>
        {/* product details */}
        <div>

        </div>
      </div>
      {productId}
    </div>
  )
}

// server side props bc the data is not available ahead of user's request

export async function getServerSideProps(context: any) {
  const {req, res, query} = context

  console.log(query)
  return {
    props: {
      data: null
    }
  }
}

export default Product