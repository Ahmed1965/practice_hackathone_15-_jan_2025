
import React from 'react'
import Container from './Container'
import Image from 'next/image'

const Logo = () => {
  return (
    <Container className='ml-[505px] w-[185px] h-[41px] mt-[29px] '>
        <div className="flex gap-2  ml-[54px]  ">
            <Image src={'/logo.png'} alt='' width={50} height={32}  />
            <span className=""><p className="text-[34px] font-bold leading-[41.45px]">Furniro</p></span>
            
        </div>


    </Container>
  )
}

export default Logo