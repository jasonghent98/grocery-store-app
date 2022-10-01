import React from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import { ifError } from 'assert'

const About = () => {
  return (
    <div className='bg-gray-200 h-screen overflow-scroll'>
      <div className='flex flex-col justify-center items-center h-full'>
        
          <div className='relative bottom-6 h-1/6 shadow'>
            <Navbar/>
          </div>
          <div className='flex flex-col h-5/6'>
            <div className='flex flex-col justify-center items-center h-full gap-8'>
            <p className='text-black font-semibold text-3xl'>Welcome</p>
            <div className="flex flex-col gap-y-4 text-black font-semibold text-5xl">
                <div className='flex justify-center'>
                  <p className='text-[#FF6B18]'>At GrocerySmart, we believe</p><br/>
                </div>
              <p>everyone should have the power to shop smart.</p> 
            </div>
            </div>
          </div>

      </div>

      {/* mission statement here */}
      <div className="flex gap-x-2 justify-center items-center h-5/6 bg-gray-300">
        <div className='flex justify-center bg-green-300 w-1/2 ml-10'>
          <p className='text-red-500 h-4/6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, nemo sit. Necessitatibus similique odit provident. Sunt neque recusandae consequatur officiis, facere natus laudantium praesentium reprehenderit molestiae veniam laboriosam dignissimos. Vel!
        Tempora facilis, deleniti autem vitae assumenda inventore mollitia pariatur! Autem quia excepturi maiores, voluptatibus distinctio dignissimos et cupiditate repellat? Soluta eveniet mollitia recusandae temporibus perferendis ad quod voluptate inventore nesciunt.
        Quam vero quos atque reprehenderit id, blanditiis iste eum animi vitae explicabo consequatur fuga quidem voluptatum autem laudantium rerum neque qui sequi repellat, ab culpa minima cumque? Molestias, dignissimos? Soluta!
        Ab autem debitis obcaecati quibusdam blanditiis, quam libero iure reiciendis omnis enim iste possimus voluptatem sapiente non tempora praesentium cum suscipit accusamus! Soluta itaque ab sit accusantium? Numquam, pariatur eaque!
        Quis aperiam, sapiente ullam minima accusamus nisi est! Incidunt illum similique animi quae possimus corporis deleniti reiciendis, est molestias commodi fugit, voluptatem nam nesciunt quod consequatur recusandae totam sint velit?
          </p>
        </div>
        <div className='flex justify-center w-1/2'>
          <Image 
            src={'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'}
            className='w-full'
            height={400}
            width={400}
            layout='intrinsic'
            alt='Fruits'
            />
        </div>
      </div>

      {/* stores we offer data from  */}
      <div className='bg-gray-200 overflow-scroll'>
        <div className="flex justify-center h-full text-red-700">1</div>
        <div className="flex justify-center h-full text-red-700">2</div>
        <div className="flex justify-center h-full text-red-700">3</div>
      </div>

    </div>
  )
}

export default About