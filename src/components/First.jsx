import React from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Headphones from  '../assets/Headphones.png'
import { useRef } from 'react';
import logo from  '../assets/logo.png'
import { Timeline } from 'gsap/gsap-core';

gsap.registerPlugin(useGSAP,ScrollTrigger,ScrollToPlugin);

function First() {
   const text = useRef()
   const text2 = useRef()

   var tl = gsap.timeline({});

   useGSAP(()=>{
    tl.from(text.current,{
        x:-100,
        opacity:0,
        duration:0.5,
        ease: "back.out(1.7)"
    })
    tl.from(text2.current,{
        x:-100,
        opacity:0,
        duration:0.5,
        ease: "back.out(1.7)"
    })
    gsap.from(".head",{
        y:-100,
        opacity:0,
        duration:1,
        delay:0.4,
        ease: "elastic.out(1,0.4)"
    })
   })

  return (
    <div className= {`w-screen h-screen main flex flex-col sm:items-center p-10`}>
        <div className='w-[80%] h-[100px] flex  '>
            <img src={logo} alt="" className=' w-8 h-6' />
            <h1 className='font-bold'>Westmire Wired</h1>
        </div>
        {/* container */}
        <div className='flex  flex-col-reverse items-center sm:flex-row'>
        {/* //left */}
            <div className='w-[40%]  flex flex-col justify-center items-center ml-[10%]'> 
                <div>
                    <h1 className=' sm:text-8xl text-[270%] ' ref={text}>The&nbsp;Westmire</h1><br />
                    <h1 className=' sm:text-8xl text-[270%] font-bold' ref={text2}>A56 Headset</h1>
                </div>
                <div className="buttons flex gap-4 p-10">
                    <button className='bg-white w-[9rem] rounded-3xl h-11'>Buy Now</button>
                    <button className=' bg-slate-200 hover:bg-white w-[9rem] rounded-3xl'>Shop All</button>
                </div>
               
            </div>
            {/* right  */}
            <div className='w-[60%]'>
            <img className='head' src={Headphones} alt=""  />

            </div>
        </div>
      
    </div>
  )
}

export default First
