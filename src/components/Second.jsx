import React, { useRef } from 'react'
import post from '../assets/post.png'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(useGSAP,ScrollTrigger,ScrollToPlugin);

function Second() {

  const text = useRef()
  const text2 = useRef()
  const img = useRef()

  var tl = gsap.timeline({})

  useGSAP(()=>{
    gsap.from(text.current,{
      opacity:0,
      duration:0.7,
      scrollTrigger:{
        trigger:text.current,
        scroller:"body",
        // markers:true,
        start: "top 60%"
      },
      x: -100
    })
    gsap.from(text2.current,{
      opacity:0,
      duration:0.7,
      delay:0.3,
      scrollTrigger:{
        trigger:text.current,
        scroller:"body",
        // markers:true,
        start: "top 60%"
      },
      x: -100
    })
    gsap.from(img.current,{
      opacity:0,
      duration:0.7,
    
      scrollTrigger:{
        trigger:img.current,
        scroller:"body",
        // markers:true,
        start: "top 70%"
      },
      x: -100
    })

  })


  return (
    <div className='w-screen h-screen sec p-10 sm:p-20 flex flex-col-reverse sm:flex-row gap-3 justify-between items-center'>
        {/* left  */}
        <div className='  text-center  sm:w-[50%]'>
            <h1 className=' font-extrabold sm:text-4xl text-3xl mb-4' ref={text}>All-new technology</h1>
            <h4 className=' sm:text-3xl text-2xl' ref={text2}>News write-ups offer a great way to let clients know about new products and services, events, awards, and more. News write-ups offer a great way to let clients know about new products and services, events, awards, and more.</h4>
        </div>
        {/* Right  */}
        <div className=' flex justify-center sm:w-[50%] sm:mr-[-50px] '>
            <img src={post} ref={img} alt="" className='w-[70%] rounded-tr-[100px] sm:rounded-tr-[115px] drop-shadow-2xl' />
        </div>
      
    </div>
  )
}

export default Second
