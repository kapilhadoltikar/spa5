import React, { useState, useEffect } from 'react'

import { CiCircleChevUp } from "react-icons/ci"

const ScrollToTop = () => {

    const [showScrollTopButton, setShowScrollTopButton] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 300) {
                setShowScrollTopButton(true)
            } else {
                setShowScrollTopButton(false)
            }
        })
        
    }, [])


    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }



  return (
    <div  onClick={scrollTop} className='h-12 w-12 rounded-[50%] border-[2px] border-[solid] border-[#333] bg-[#fff] cursor-pointer fixed bottom-[15px] right-[20px]'>
        {showScrollTopButton && <CiCircleChevUp />}
    </div>
  )
}

export default ScrollToTop