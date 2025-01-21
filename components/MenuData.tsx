import React from 'react'
import { headerdata } from '@/constant'
import Link from 'next/link'
 import Container from './Container'

const MenuData = () => {
  return (
    <>
    <Container className='flex ml-[451px] gap-[75px]'>
    <div className='hidden md:inline-flex justify-between items-center gap-[75px] '>
        {headerdata?.map((item)=>(
            <Link key={item.title} href={item?.href}>{item?.title}</Link>
            

        ))}
    </div>
    </Container>
   </>     

        
  )
}

export default MenuData