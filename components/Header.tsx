
import React from 'react'
import Logo from './Logo'
import MenuData from './MenuData'
import Container from './Container'
import { Heart, Search, ShoppingCart, User  } from 'lucide-react'

const Header = () => {
  return (
    <>
    <header className='flex  '>
        <Container className='w-full h-[100px] '>
          <div className="flex">
          <Logo />
        
          
        <MenuData />
        <div className="flex gap-[45px] ml-[158px] mt-[36px]">
          <User />
          <Search />
          <Heart />
          <ShoppingCart />
        </div>
        
     

          <div className="w-full border-b-2 border-x-white"></div>
          </div>
        
            </Container>




    </header>
    
    
    </>
  )
}

export default Header