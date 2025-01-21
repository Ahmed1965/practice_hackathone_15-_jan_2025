


import { footerData } from '@/constant'
import React from 'react'
import Container from './Container'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='bg-[#FFFFFF] py-5'>
      <Container className='grid grid-cols-1 sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {footerData.map((item)=>(
        // <div className=" ">
            <div key={item._id} className="">
              <h3 className="text-[24px] font-bold mt-[48px] ml-[50px]">{item?.title}

              </h3>
              <div className="flex flex-col ml-[35px] gap-y-4">
                {item?.listItem?.map((list)=>list?.listData?.map((data)=>(

                  <Link href='/'key={data}>{data}</Link>
                )
                ))}
              </div>

            </div>
          ))}
                      
        {/* </div> */}



      </Container>
    </div>
  )
}

export default Footer

